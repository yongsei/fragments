import { useState, useEffect, useCallback, useMemo } from 'react';
import type { GameScenario } from '../games/case5/chapter1/scenario_kr';
import { Card, Connection } from '../types';
import type { CaseFeedbackData } from '../games/case5/chapter1/feedbackData_kr';
import { 
  saveGameProgress, 
  loadGameProgress, 
  clearGameProgress, 
  saveChapterCompletion,
  type GameProgressData 
} from '../utils/gameProgress';
import { useLanguage } from './useLanguage';

// Utility function to identify unlock-only cards
const getUnlockOnlyCards = (scenario: GameScenario, initialCards: string[]): string[] => {
  const unlockOnlyCards: string[] = [];
  
  // Get all card IDs that appear in unlock rules
  const unlockableCardIds = new Set<string>();
  (scenario.connectionRules || []).forEach(rule => {
    if (rule.unlock) {
      const unlockIds = rule.unlock.split(',').map((id: string) => id.trim()).filter((id: string) => id);
      unlockIds.forEach((id: string) => unlockableCardIds.add(id));
    }
  });
  
  // Get all initial card IDs (cards that should be visible from the start)
  const initialCardIds = new Set([
    ...(scenario.suspects || []).map(s => s.id),
    ...(scenario.locations || []).map(l => l.id),
    ...initialCards
  ]);
  
  // Cards that are unlockable but not in initial cards are "unlock-only"
  unlockableCardIds.forEach(cardId => {
    if (!initialCardIds.has(cardId)) {
      unlockOnlyCards.push(cardId);
    }
  });
  
  return unlockOnlyCards;
};

interface UseMysteryGameProps {
  scenario: GameScenario;
  maxHints?: number;
  initialCards?: string[];
  winCondition?: string;
  onCardUnlock?: (unlockId: string) => string[];
  feedbackData?: CaseFeedbackData;
  caseId?: string; // 진행 상태 저장을 위한 케이스 ID
}

interface GameState {
  phase: 'playing';
  currentScenario: GameScenario;
  gamePhase: 1;
  elapsedTime: number;
  selectedCards: string[];
  connections: Connection[];
  discoveredClues: string[];
  discoveredCardIds: string[];
  newlyDiscoveredCards: string[];
  cardOrder: string[];
  consecutiveFailures: number;
  hintsUsed: number;
  playerProgress: {
    totalConnections: number;
    correctConnections: number;
    wrongConnections: number;
    hintsUsed: number;
    timeSpent: number;
    phase: number;
  };
}

export const useMysteryGame = ({
  scenario,
  maxHints = 3,
  initialCards: propInitialCards,
  winCondition: propWinCondition,
  onCardUnlock,
  feedbackData,
  caseId
}: UseMysteryGameProps) => {
  const { t } = useLanguage();
  
  // scenario에서 초기 카드와 승리 조건 가져오기
  const initialCards = useMemo(() => propInitialCards || scenario.initialCards || [], [propInitialCards, scenario.initialCards]);
  const winCondition = propWinCondition || scenario.winCondition || '';

  // 🔄 1단계: 항상 깨끗한 초기 상태로 시작
  const [gameState, setGameState] = useState<GameState>({
    phase: 'playing' as const,
    currentScenario: scenario,
    gamePhase: 1 as const,
    elapsedTime: 0,
    selectedCards: [],
    connections: [],
    discoveredClues: [],
    discoveredCardIds: [...initialCards], // 시나리오에서 명시된 initialCards만
    newlyDiscoveredCards: [],
    cardOrder: [],
    consecutiveFailures: 0,
    hintsUsed: 0,
    playerProgress: {
      totalConnections: 0,
      correctConnections: 0,
      wrongConnections: 0,
      hintsUsed: 0,
      timeSpent: 0,
      phase: 1
    }
  });

  // initialCards 변경 시 discoveredCardIds 업데이트
  useEffect(() => {
    if (initialCards.length > 0) {
      setGameState(prevState => ({
        ...prevState,
        discoveredCardIds: Array.from(new Set([
          ...prevState.discoveredCardIds, 
          ...initialCards
        ]))
      }));
    }
  }, [initialCards]);

  // 임시: 테스트를 위해 저장된 진행 상태를 지우는 함수 (개발용)
  useEffect(() => {
    if (caseId && typeof window !== 'undefined') {
      // 개발 시 저장된 상태를 지우려면 주석 해제
      // clearGameProgress(caseId);
      console.log('현재 caseId:', caseId, 'initialCards:', initialCards);
    }
  }, [caseId, initialCards]);

  // 🔄 2단계: 초기화 완료 후 저장된 데이터가 있으면 로딩
  useEffect(() => {
    const loadSavedProgress = async () => {
      if (!caseId) return;
      
      console.log('🔄 게임 초기화 완료 - 저장된 진행 상태 확인 중...');
      
      try {
        const savedProgress = await loadGameProgress(caseId);
        
        if (savedProgress && !savedProgress.isCompleted) {
          console.log('📁 저장된 게임 진행 상태 발견 - 데이터 복원 중...', savedProgress);
          setHasSavedProgress(true);
          
          // 저장된 상태로 게임 상태 업데이트 (초기 상태 위에 덮어쓰기)
          setGameState(prevState => ({
            ...prevState, // 깨끗한 초기 상태 유지
            elapsedTime: savedProgress.elapsedTime,
            connections: savedProgress.connections.map((conn, index) => ({
              id: `restored-${index}-${conn.timestamp}`,
              cards: conn.cards,
              result: conn.result,
              timestamp: conn.timestamp,
              verified: conn.isCorrect
            })),
            discoveredCardIds: Array.from(new Set([...initialCards, ...savedProgress.discoveredCardIds])),
            hintsUsed: savedProgress.hintsUsed,
            playerProgress: savedProgress.playerProgress
          }));
          
          console.log('✅ 저장된 게임 상태 복원 완료');
        } else {
          console.log('🆕 새 게임 시작 - 저장된 진행 상태 없음');
          setHasSavedProgress(false);
        }
      } catch (error) {
        console.error('❌ 게임 진행 상태 로드 실패:', error);
        setHasSavedProgress(false);
        console.log('🆕 오류로 인해 새 게임으로 시작');
      }
    };

    // 컴포넌트 마운트 후 잠시 대기 후 실행 (초기화 완료 보장)
    const timer = setTimeout(() => {
      loadSavedProgress();
    }, 100);

    return () => clearTimeout(timer);
  }, [caseId, initialCards]);


  const [cards, setCards] = useState<Card[]>([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [winConditionCardDiscovered, setWinConditionCardDiscovered] = useState<string | null>(null);
  const [highlightedCardId, setHighlightedCardId] = useState<string | null>(null);
  const [hasSavedProgress, setHasSavedProgress] = useState(false);
  const [toastMessage, setToastMessage] = useState<{
    message: string;
    type: 'success' | 'error' | 'info' | 'hint';
    isVisible: boolean;
    timestamp: number; // 추가: Toast 생성 시간 추적
  }>({ message: '', type: 'info', isVisible: false, timestamp: 0 });

  // 스마트 피드백 시스템을 위한 상태
  const [attemptHistory, setAttemptHistory] = useState<{
    cardId: string;
    attempts: number;
    lastAttempt: number;
  }[]>([]);

  // 카드 시각적 피드백 상태
  const [cardFeedback, setCardFeedback] = useState<{
    cardId: string;
    effect: 'warm' | 'cold' | 'neutral';
    timestamp: number;
  }[]>([]);

  // 스마트 피드백 시스템 함수들
  const getCardCombinationKey = useCallback((cards: string[]) => {
    return cards.sort().join('-');
  }, []);

  const updateAttemptHistory = useCallback((selectedCards: string[]) => {
    const combinationKey = getCardCombinationKey(selectedCards);
    const now = Date.now();
    
    setAttemptHistory(prev => {
      const existingAttempt = prev.find(attempt => attempt.cardId === combinationKey);
      if (existingAttempt) {
        return prev.map(attempt => 
          attempt.cardId === combinationKey 
            ? { ...attempt, attempts: attempt.attempts + 1, lastAttempt: now }
            : attempt
        );
      } else {
        return [...prev, { cardId: combinationKey, attempts: 1, lastAttempt: now }];
      }
    });
  }, [getCardCombinationKey]);

  const getProximityLevel = useCallback((selectedCards: string[], connectionRules: any[]): 'none' | 'partial' | 'close' => {
    let maxMatches = 0;
    let hasPartialMatch = false;
    
    // 모든 규칙을 검사하여 최고 매칭도 찾기
    for (const rule of connectionRules) {
      const ruleCards = rule.cards || [];
      const matchingCards = selectedCards.filter(card => ruleCards.includes(card));
      
      if (matchingCards.length > maxMatches) {
        maxMatches = matchingCards.length;
      }
      
      if (matchingCards.length === 1) {
        hasPartialMatch = true;
      }
    }
    
    // 정확한 매칭 (하지만 다른 규칙)은 close로 분류
    if (maxMatches === 2) return 'close';
    if (maxMatches === 1 || hasPartialMatch) return 'partial';
    return 'none';
  }, []);

  const getSmartFeedback = useCallback((
    selectedCards: string[], 
    connectionRules: any[], 
    attemptCount: number, 
    consecutiveFailures: number
  ): { message: string; type: 'error' | 'info'; cardEffects?: { cardId: string; effect: 'warm' | 'cold' | 'neutral' }[] } => {
    const proximityLevel = getProximityLevel(selectedCards, connectionRules);
    const hintLevel = Math.min(Math.floor(consecutiveFailures / 2), 2); // 0, 1, 2 단계
    
    // 케이스별 피드백 데이터 사용
    const caseFeedback = feedbackData;
    
    // 카드별 시각적 효과 결정
    const cardEffects = selectedCards.map(cardId => {
      const isInAnyRule = connectionRules.some(rule => rule.cards?.includes(cardId));
      return {
        cardId,
        effect: (isInAnyRule ? 'warm' : 'cold') as 'warm' | 'cold' | 'neutral'
      };
    });
    
    // 케이스별 맞춤 피드백이 있는 경우 - 배열 기반 매칭
    if (caseFeedback) {
      // 선택된 카드들과 일치하는 피드백 찾기 (순서 무관)
      const feedbackData = caseFeedback.combinationFeedback.find(feedback => {
        if (feedback.cards.length !== selectedCards.length) return false;
        return feedback.cards.every(card => selectedCards.includes(card));
      });
      
      if (feedbackData) {
        const message = feedbackData.messages[Math.min(hintLevel, feedbackData.messages.length - 1)];
        return { message, type: 'info', cardEffects };
      }
    }

    // 기본 피드백 (케이스별 데이터가 없거나 해당 조합이 없는 경우)
    if (proximityLevel === 'close') {
      const hints = [
        t('almostThere'),
        t('veryClose'),
        "💡 이 카드들은 올바른 방향입니다. 비슷한 맥락의 다른 단서를 찾아보세요."
      ];
      return { message: hints[hintLevel], type: 'info', cardEffects };
    }
    
    if (proximityLevel === 'partial') {
      const hints = [
        t('keyClueFound'),
        "🔍 선택한 단서 중 하나가 핵심에 가깝습니다. 어떤 것일까요?",
        "💭 한 단서는 정답과 연결됩니다. 그 단서의 성격과 어울리는 다른 단서를 찾아보세요."
      ];
      return { message: hints[hintLevel], type: 'info', cardEffects };
    }


    
    if (attemptCount >= 3) {
      const encouragingMessages = [
        t('notConnected'),
        "🤔 새로운 시각이 필요할 것 같습니다. 사건의 시간순서를 고려해보세요.",
        "🔄 이 단서들 사이의 직접적 연관성은 보이지 않습니다. 다른 연결고리를 찾아보세요."
      ];
      return { 
        message: encouragingMessages[Math.min(hintLevel, 2)], 
        type: 'info',
        cardEffects 
      };
    }

    const defaultMessages = [
      t('noNewClue'),
      t('noConnection'),
      "🔍 이 단서들은 서로 연결되지 않는 것 같습니다. 다른 접근이 필요해 보입니다."
    ];
    
    return { 
      message: defaultMessages[Math.min(hintLevel, 2)], 
      type: 'error',
      cardEffects 
    };
  }, [getProximityLevel, feedbackData, t]);

  // 카드 설정
  useEffect(() => {
    if (gameState.currentScenario) {
      const allScenarioCards: Card[] = [
        ...((gameState.currentScenario.suspects || [])).map(suspect => ({
          id: suspect.id,
          name: suspect.name,
          type: 'suspect' as const,
          description: suspect.role,
          details: suspect.description,
          discovered: false
        })),
        ...((gameState.currentScenario.evidence || [])).map((evidence) => ({
          id: evidence.id,
          name: evidence.name,
          type: 'evidence' as const,
          description: evidence.description,
          details: evidence.details,
          discovered: false
        })),
        ...((gameState.currentScenario.locations || [])).map(location => ({
          id: location.id,
          name: location.name,
          type: 'location' as const,
          description: location.description,
          details: location.details,
          discovered: false
        }))
      ];

      // Get unlock-only cards to filter them out
      const unlockOnlyCards = getUnlockOnlyCards(gameState.currentScenario, initialCards);
      
      // Filter out unlock-only cards that haven't been discovered yet
      const visibleCards = allScenarioCards.filter(card => {
        // If it's an unlock-only card and hasn't been discovered, hide it
        if (unlockOnlyCards.includes(card.id) && !gameState.discoveredCardIds.includes(card.id)) {
          return false;
        }
        return true;
      });

      const finalCards = visibleCards.map(card => ({
        ...card,
        discovered: gameState.discoveredCardIds.includes(card.id),
        isNew: gameState.newlyDiscoveredCards.includes(card.id) // NEW 태그용
      }));

      // 카드 순서 관리: 한 번 정해진 순서는 유지
      let sortedCards = finalCards;
      
      // cardOrder가 비어있으면 초기 순서 설정
      if (gameState.cardOrder.length === 0) {
        const initialOrder = finalCards.map(card => card.id);
        setGameState(prev => ({ ...prev, cardOrder: initialOrder }));
      } else {
        // 기존 순서에 따라 정렬하고, 새로운 카드는 맨 뒤에 추가
        const orderedCards: typeof finalCards = [];
        const newCards: typeof finalCards = [];
        
        // 기존 순서대로 카드 배치
        gameState.cardOrder.forEach(cardId => {
          const card = finalCards.find(c => c.id === cardId);
          if (card) {
            orderedCards.push(card);
          }
        });
        
        // 새로운 카드들 찾기
        finalCards.forEach(card => {
          if (!gameState.cardOrder.includes(card.id)) {
            newCards.push(card);
          }
        });
        
        sortedCards = [...orderedCards, ...newCards];
      }

      setCards(sortedCards);
    }
  }, [gameState.currentScenario, gameState.discoveredCardIds, gameState.newlyDiscoveredCards, gameState.cardOrder, initialCards]);

  // 진행 시간 타이머
  useEffect(() => {
    if (!gameWon && !showResult) {
      const timer = setTimeout(() => {
        setGameState(prev => ({ 
          ...prev, 
          elapsedTime: prev.elapsedTime + 1
          // playerProgress.timeSpent 제거 - 저장 시에만 계산
        }));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [gameWon, showResult]); // elapsedTime 의존성 제거하여 무한 루프 방지

  // 게임 로직 함수들
  const handleCardSelect = (cardId: string) => {
    const card = cards.find(c => c.id === cardId);
    if (!card?.discovered) return;

    // 승리조건 카드를 클릭한 경우 게임 완료
    if (winConditionCardDiscovered && cardId === winConditionCardDiscovered) {
      setTimeout(() => {
        setGameWon(true);
        setShowResult(true);
      }, 500);
      return;
    }

    setGameState(prev => {
      const isSelected = prev.selectedCards.includes(cardId);
      let newSelectedCards: string[];

      if (isSelected) {
        newSelectedCards = prev.selectedCards.filter(id => id !== cardId);
      } else if (prev.selectedCards.length < 2) {
        newSelectedCards = [...prev.selectedCards, cardId];
      } else {
        newSelectedCards = [prev.selectedCards[1], cardId];
      }

      return { ...prev, selectedCards: newSelectedCards };
    });
  };

  // 🔧 개선된 Toast 표시 함수 - 겹침 문제 해결 (handleConnect보다 먼저 정의)
  const showToast = useCallback((message: string, type: 'success' | 'error' | 'info' | 'hint') => {
    const timestamp = Date.now();
    
    // 기존 Toast 상태 확인
    setToastMessage(prev => {
      const hasExistingToast = prev.isVisible;
      
      if (hasExistingToast) {
        // 기존 Toast가 있으면 즉시 숨기고 잠시 후 새 Toast 표시
        setTimeout(() => {
          setToastMessage({
            message,
            type,
            isVisible: true,
            timestamp
          });
        }, 150); // 150ms 지연으로 애니메이션 완료 대기
        
        return { ...prev, isVisible: false };
      } else {
        // 기존 Toast가 없으면 즉시 새 Toast 표시
        return {
          message,
          type,
          isVisible: true,
          timestamp
        };
      }
    });
  }, []);

  const handleConnect = useCallback(async () => {
    if (gameState.selectedCards.length !== 2 || !gameState.currentScenario) return;

    setIsConnecting(true);

    const rule = (gameState.currentScenario.connectionRules || []).find((rule: any) =>
      rule.cards.length === gameState.selectedCards.length &&
      rule.cards.every((cardId: string) => gameState.selectedCards.includes(cardId))
    );

    await new Promise(resolve => setTimeout(resolve, 1000));

    const isAlreadyDiscovered = !!(rule && rule.unlock && 
      rule.unlock.split(',').every((item: string) => gameState.discoveredClues.includes(item.trim())));

    let resultMessage: string;
    let messageType: 'success' | 'error' | 'info' = 'error';
    
    if (rule) {
      if (isAlreadyDiscovered) {
        resultMessage = t('alreadyChecked');
        messageType = 'info';
      } else {
        resultMessage = rule.result;
        messageType = 'success';
      }
    } else {
      // 실패한 경우 스마트 피드백 시스템 적용
      updateAttemptHistory(gameState.selectedCards);
      const combinationKey = getCardCombinationKey(gameState.selectedCards);
      const attemptCount = attemptHistory.find(a => a.cardId === combinationKey)?.attempts || 1;
      
      const smartFeedback = getSmartFeedback(
        gameState.selectedCards,
        gameState.currentScenario.connectionRules || [],
        attemptCount,
        gameState.consecutiveFailures
      );
      
      resultMessage = smartFeedback.message;
      messageType = smartFeedback.type;
      
      // 카드별 시각적 효과 적용
      if (smartFeedback.cardEffects) {
        const now = Date.now();
        setCardFeedback(smartFeedback.cardEffects.map(effect => ({
          ...effect,
          timestamp: now
        })));
        
        // 3초 후 피드백 효과 제거
        setTimeout(() => {
          setCardFeedback(prev => prev.filter(feedback => feedback.timestamp !== now));
        }, 3000);
      }
    }

    // 토스트 메시지 표시
    showToast(resultMessage, messageType);

    const newConnection: Connection = {
      id: Date.now().toString(),
      cards: [...gameState.selectedCards],
      verified: !!rule,
      result: resultMessage,
      unlock: rule?.unlock,
      timestamp: Date.now()
    };

    setGameState(prev => {
      const isNewDiscovery = rule && rule.unlock && 
        !rule.unlock.split(',').every((item: string) => prev.discoveredClues.includes(item.trim()));

      // 연속 실패 카운트 관리 및 자동 힌트 트리거
      const newWrongConnections = !isNewDiscovery ? prev.playerProgress.wrongConnections + 1 : prev.playerProgress.wrongConnections;
      const newConsecutiveFailures = isNewDiscovery ? 0 : prev.consecutiveFailures + 1; // 성공하면 0으로 초기화
      


      let newDiscoveredClues = prev.discoveredClues;
      if (isNewDiscovery && rule.unlock) {
        const unlockedClues = rule.unlock.split(',').map((item: string) => item.trim());
        for (const clue of unlockedClues) {
          if (!newDiscoveredClues.includes(clue)) {
            newDiscoveredClues = [...newDiscoveredClues, clue];
          }
        }
      }
      
      let newDiscoveredCardIds = prev.discoveredCardIds;
      let newlyDiscoveredCards = prev.newlyDiscoveredCards;
      let newCardOrder = prev.cardOrder;
      
      if (isNewDiscovery && rule.unlock) {
        // 새로운 카드가 추가되면 이전 NEW 마크들을 제거하고 새로운 카드만 NEW로 설정
        const newCardsToAdd: string[] = [];
        
        // 커스텀 unlock 로직이 있으면 사용, 없으면 기본 로직
        if (onCardUnlock) {
          const cardsToUnlock = onCardUnlock(rule.unlock);
          for (const cardId of cardsToUnlock) {
            if (!prev.discoveredCardIds.includes(cardId)) {
              newDiscoveredCardIds = [...newDiscoveredCardIds, cardId];
              newCardsToAdd.push(cardId);
              // 새로운 카드를 순서 맨 뒤에 추가
              if (!newCardOrder.includes(cardId)) {
                newCardOrder = [...newCardOrder, cardId];
              }
            }
          }
        } else {
          // 기본 로직: unlock과 같은 이름의 카드 찾기
          const unlockedItems = rule.unlock.split(',');
          for (const item of unlockedItems) {
            const trimmedItem = item.trim();
            if (!prev.discoveredCardIds.includes(trimmedItem)) {
              newDiscoveredCardIds = [...newDiscoveredCardIds, trimmedItem];
              newCardsToAdd.push(trimmedItem);
              // 새로운 카드를 순서 맨 뒤에 추가
              if (!newCardOrder.includes(trimmedItem)) {
                newCardOrder = [...newCardOrder, trimmedItem];
              }
            }
          }
        }
        
        // 새로운 카드가 실제로 추가되었다면, 이전 NEW 마크는 제거하고 새로운 카드만 NEW로 설정
        if (newCardsToAdd.length > 0) {
          newlyDiscoveredCards = newCardsToAdd;
        }
      }

      // 승리 조건 카드 발견 체크 (자동 완료 대신 카드 클릭 대기)
      if (isNewDiscovery && rule.unlock === winCondition) {
        setWinConditionCardDiscovered(rule.unlock);
        // 토스트 메시지로 알림
        showToast(
          t('winConditionCardFound') || '🎯 최종 단서를 발견했습니다! 카드를 클릭하여 수사를 완료하세요.',
          'success'
        );
      }

      return {
        ...prev,
        // 성공한 연결(verified: true)만 기록에 추가
        connections: newConnection.verified ? [...prev.connections, newConnection] : prev.connections,
        discoveredClues: newDiscoveredClues,
        discoveredCardIds: newDiscoveredCardIds,
        newlyDiscoveredCards: newlyDiscoveredCards,
        cardOrder: newCardOrder,
        consecutiveFailures: newConsecutiveFailures,
        selectedCards: [],
        playerProgress: {
            ...prev.playerProgress,
            totalConnections: prev.playerProgress.totalConnections + 1,
            correctConnections: isNewDiscovery ? prev.playerProgress.correctConnections + 1 : prev.playerProgress.correctConnections,
            wrongConnections: newWrongConnections,
        }
      };
    });

    setIsConnecting(false);
  }, [gameState.selectedCards, gameState.currentScenario, gameState.discoveredClues, onCardUnlock, winCondition, attemptHistory, updateAttemptHistory, getSmartFeedback, getCardCombinationKey, showToast, t]); // gameState 전체 대신 필요한 것만 의존성으로

  const handleClearSelection = () => {
    setGameState(prev => ({ ...prev, selectedCards: [] }));
  };

  // 🚀 카드 검색 최적화를 위한 Map 생성
  const cardMap = useMemo(() => {
    return new Map(cards.map(card => [card.id, card]));
  }, [cards]);

  // 고급 힌트 생성 로직 (HintSystem에서 이동)
  const generateAdvancedHint = useCallback((): string => {
    // 1. 플레이어가 가진 발견된 카드들 확인
    const discoveredCards = cards.filter(card => card.discovered);
    const discoveredCardIds = discoveredCards.map(card => card.id);
    
    // 2. 이미 성공한 연결들 확인 - 더 정확한 비교
    const successfulConnections = gameState.connections.filter(conn => conn.verified);
    const usedCombinations = new Set(successfulConnections.map(conn => 
      conn.cards.sort().join(',')
    ));

    // 3. connectionRules를 스캔하여 조합 가능한 규칙 찾기
    const connectionRules = gameState.currentScenario?.connectionRules || [];
    for (const rule of connectionRules) {
      if (!rule.cards || !rule.unlock) continue;
      
      // 조건 1: 규칙에 필요한 모든 카드를 플레이어가 가지고 있는가?
      const hasAllCards = rule.cards.every((cardId: string) => 
        discoveredCardIds.includes(cardId)
      );
      
      // 조건 2: 해당 조합을 아직 사용하지 않았는가?
      const combinationKey = rule.cards.sort().join(',');
      const notUsedYet = !usedCombinations.has(combinationKey);
      
      if (hasAllCards && notUsedYet) {
        // 조합 가능한 규칙 발견! 모든 필요한 카드들을 명시
        const cardNames = rule.cards.map((cardId: string) => {
          const card = cardMap.get(cardId); // 🚀 O(1) 검색으로 최적화
          return card ? card.name : cardId;
        });
        
        let hintMessage = '';
        if (rule.cards.length === 2) {
          hintMessage = t('hintTwoCards').replace('{0}', cardNames[0]).replace('{1}', cardNames[1]);
        } else if (rule.cards.length === 3) {
          hintMessage = t('hintThreeCards').replace('{0}', cardNames[0]).replace('{1}', cardNames[1]).replace('{2}', cardNames[2]);
        } else {
          hintMessage = t('hintMultipleCards').replace('{0}', cardNames.join(', '));
        }
        
        // 모든 관련 카드들을 순차적으로 하이라이트
        rule.cards.forEach((cardId: string, index: number) => {
          setTimeout(() => {
            setHighlightedCardId(cardId);
          }, index * 1000); // 1초 간격으로 순차 하이라이트
        });
        
        // 마지막에 하이라이트 제거
        setTimeout(() => {
          setHighlightedCardId(null);
        }, rule.cards.length * 1000 + 3000);
        
        // 토스트로 힌트 표시
        showToast(hintMessage, 'hint');
        
        return hintMessage;
      }
    }
    
    // 조합 가능한 규칙이 없으면 다른 힌트 제공
    const availableHints = [
      t('tryDifferentCombos'),
      t('connectSameLocation'),
      t('connectSuspectEvidence'),
      t('connectLocationEvidence')
    ];
    
    const randomHint = availableHints[Math.floor(Math.random() * availableHints.length)];
    const finalHintMessage = t('hintPrefix').replace('{0}', randomHint);
    showToast(finalHintMessage, 'hint');
    
    return finalHintMessage;
  }, [cards, cardMap, gameState.connections, gameState.currentScenario?.connectionRules, setHighlightedCardId, showToast, t]);

  const handleRequestHint = useCallback(() => {
    if (gameState.hintsUsed >= maxHints) return;
    
    // 고급 힌트 생성 (기존 로직 유지)
    const actualHintMessage = generateAdvancedHint();
    
    // 실제 힌트 메시지를 연결 기록에 추가
    const hintMessage = actualHintMessage;
    const hintConnection: Connection = {
      id: `hint-${Date.now()}`,
      cards: [],
      verified: true,
      result: hintMessage,
      timestamp: Date.now(),
      isHint: true,
      hintMessage: hintMessage
    };
    
    // 힌트 사용 횟수 증가 및 힌트 기록 추가
    setGameState(prev => ({
      ...prev,
      connections: [...prev.connections, hintConnection],
      hintsUsed: prev.hintsUsed + 1,
      playerProgress: { ...prev.playerProgress, hintsUsed: prev.playerProgress.hintsUsed + 1 }
    }));
  }, [gameState.hintsUsed, maxHints, generateAdvancedHint]);

  // 상단 정답 힌트 (새로운 힌트 시스템)
  const handleAnswerHint = useCallback(() => {
    const undiscoveredCards = cards.filter(card => !card.discovered);
    
    if (undiscoveredCards.length === 0) {
      showToast(t('allCardsFound'), 'info');
      return;
    }

    // 연결 가능한 카드 조합 중 하나를 찾아서 정답을 알려줌
    const availableCards = cards.filter(card => card.discovered);
    const connectionRules = scenario.connectionRules || [];
    
    // 가능한 연결 중 하나를 찾기
    for (const rule of connectionRules) {
      if (rule.cards && rule.unlock) {
        const requiredCards = rule.cards.filter((cardId: string) => 
          availableCards.some(card => card.id === cardId)
        );
        
        if (requiredCards.length === rule.cards.length) {
          // 이미 해결된 조합인지 확인
          const alreadySolved = gameState.connections.some(conn => 
            conn.verified && 
            conn.cards.sort().join(',') === rule.cards.sort().join(',')
          );
          
          if (!alreadySolved) {
            // 정답 조합을 자동으로 선택
            setGameState(prev => ({
              ...prev,
              selectedCards: [...rule.cards],
              hintsUsed: prev.hintsUsed + 1,
              playerProgress: { ...prev.playerProgress, hintsUsed: prev.playerProgress.hintsUsed + 1 }
            }));
            
            // 선택된 카드들을 강조 표시
            rule.cards.forEach((cardId: string, index: number) => {
              setTimeout(() => {
                setHighlightedCardId(cardId);
                setTimeout(() => setHighlightedCardId(null), 1000);
              }, index * 200);
            });
            
            showToast(
              t('answerHint').replace('{0}', rule.cards.length.toString()),
              'info'
            );
            return;
          }
        }
      }
    }
    
    // 가능한 연결이 없으면 일반적인 힌트 제공
    showToast(t('generalHint'), 'info');
    
    setGameState(prev => ({
      ...prev,
      hintsUsed: prev.hintsUsed + 1,
      playerProgress: { ...prev.playerProgress, hintsUsed: prev.playerProgress.hintsUsed + 1 }
    }));
  }, [cards, scenario.connectionRules, gameState.connections, showToast, t]);


  const handleRestart = () => {
    window.location.reload();
  };

  const handleToastClose = useCallback(() => {
    setToastMessage(prev => ({ ...prev, isVisible: false }));
  }, []);

  // 진행 상태 저장 (연결 성공 또는 힌트 사용 시에만)
  useEffect(() => {
    if (caseId && (gameState.connections.length > 0 || gameState.hintsUsed > 0)) {
      const progressData: GameProgressData = {
        caseId,
        hintsUsed: gameState.hintsUsed,
        connections: gameState.connections.map(conn => ({
          cards: conn.cards,
          result: conn.result,
          timestamp: conn.timestamp || Date.now(),
          isCorrect: conn.verified || false
        })),
        discoveredCardIds: gameState.discoveredCardIds,
        totalDiscoveredCards: cards.filter(card => card.discovered).length, // 실제 발견한 카드 수
        elapsedTime: gameState.elapsedTime, // 현재 시간을 저장
        playerProgress: {
          ...gameState.playerProgress,
          timeSpent: gameState.elapsedTime // 저장 시에만 현재 시간으로 업데이트
        },
        timestamp: Date.now(),
        isCompleted: gameWon || showResult,
        // 새로 추가된 필드들
        dataVersion: '1.0.0',
        schemaVersion: 1
      };

      // 저장 시도 (에러 시에만 로그 출력)
      saveGameProgress(progressData).catch(error => {
        console.error('게임 진행 상태 저장 실패:', error);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [caseId, gameState.connections.length, gameState.hintsUsed, gameState.discoveredCardIds.length, gameWon, showResult]);

  // 게임 완료 시 진행 상태 삭제
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (caseId && (gameWon || showResult)) {
      // 게임 완료 표시를 위해 한 번 더 저장 후 삭제
      const progressData: GameProgressData = {
        caseId,
        hintsUsed: gameState.hintsUsed,
        connections: gameState.connections.map(conn => ({
          cards: conn.cards,
          result: conn.result,
          timestamp: conn.timestamp || Date.now(),
          isCorrect: conn.verified || false
        })),
        discoveredCardIds: gameState.discoveredCardIds,
        totalDiscoveredCards: cards.filter(card => card.discovered).length, // 실제 발견한 카드 수
        elapsedTime: gameState.elapsedTime,
        playerProgress: {
          ...gameState.playerProgress,
          timeSpent: gameState.elapsedTime // 저장 시에만 현재 시간으로 업데이트
        },
        timestamp: Date.now(),
        isCompleted: true,
        // 새로 추가된 필드들
        dataVersion: '1.0.0',
        schemaVersion: 1
      };

      saveGameProgress(progressData).catch(error => {
        console.error('게임 완료 상태 저장 실패:', error);
      });

      // 챕터 완료 상태 저장 (caseId에서 챕터 정보 추출)
      const chapterMatch = caseId.match(/^(.+)-ch(\d+)$/);
      if (chapterMatch) {
        const baseCaseId = chapterMatch[1];
        const chapterNumber = parseInt(chapterMatch[2]);
        
        saveChapterCompletion(baseCaseId, chapterNumber).catch(error => {
          console.error('챕터 완료 상태 저장 실패:', error);
        });
        
        console.log(`챕터 ${chapterNumber} 완료! 케이스: ${baseCaseId}`);
      }
      
      // 3초 후 진행 상태 삭제 (결과 화면을 보여준 후)
      setTimeout(async () => {
        try {
          await clearGameProgress(caseId);
        } catch (error) {
          console.error('게임 진행 상태 삭제 실패:', error);
        }
      }, 3000);
    }
  }, [caseId, gameWon, showResult, gameState, cards]);

  // 광고 시청 후 추가 힌트 제공 기능
  const handleAdHintReward = useCallback(() => {
    console.log('광고 시청 완료! 추가 힌트 제공');
    
    // 추가 힌트를 제공 (generateAdvancedHint 사용)
    const bonusHint = generateAdvancedHint();
    
    // 토스트 메시지로 힌트 표시
    showToast(`🎁 광고 보상 힌트: ${bonusHint}`, 'hint');
    
    // 연결 기록에 광고 힌트 추가
    setGameState(prev => {
      const newConnection = {
        id: `ad-hint-${Date.now()}`,
        cards: [],
        result: bonusHint,
        timestamp: Date.now(),
        verified: true,
        isHint: true,
        hintMessage: bonusHint
      };
      
      return {
        ...prev,
        connections: [...prev.connections, newConnection]
      };
    });
    
    console.log('광고 보상 힌트 제공:', bonusHint);
  }, [generateAdvancedHint, showToast]);

  return {
    // Game State
    gameState,
    cards,
    isConnecting,
    gameWon,
    showResult,
    highlightedCardId,
    toastMessage,
    cardFeedback,
    maxHints,
    winCondition,
    winConditionCardDiscovered,
    hasSavedProgress,
    
    // Game Actions
    handleCardSelect,
    handleConnect,
    handleClearSelection,
    handleRequestHint,
    handleAnswerHint,
    handleRestart,
    handleToastClose,
    handleAdHintReward, // 광고 시청 후 추가 힌트 제공
    
    // Setters for UI components
    setHighlightedCardId,
    showToast
  };
};