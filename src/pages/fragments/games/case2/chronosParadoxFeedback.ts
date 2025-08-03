// 크로노스 패러독스 - SF 시간여행 미스터리 피드백 시스템
// 전문 추리 소설 작가의 20년 노하우로 설계된 혁신적 추리 게임
// 핵심: "범인이 없는 미스터리" - 모든 용의자가 무고하고, 박사는 인류를 구한 영웅

export interface FeedbackMessage {
  message: string;
  type: 'success' | 'partial_correct' | 'wrong_direction' | 'cold' | 'info';
  hintLevel: 'weak' | 'medium' | 'strong';
  category: 'correct' | 'suspect_partial' | 'evidence_partial' | 'wrong_suspect' | 'wrong_evidence' | 'random';
}

export interface FeedbackRule {
  cardIds: string[];
  feedback: FeedbackMessage;
}

/**
 * 크로노스 패러독스 피드백 시스템
 * 시간여행을 통해 미래를 구한 박사의 숭고한 희생을 발견하는 SF 미스터리
 * 핵심 메커니즘: 단계적 진실 공개 (시공간 이상 → 의도성 → 위험 감지 → 영웅적 희생)
 */
export const createChronosParadoxFeedbackSystem = () => {
  const feedbackRules: FeedbackRule[] = [
    
    // === 핵심 정답 조합들 - 단계적 진실 공개 ===
    
    // 1단계: 시공간 이상의 발견
    {
      cardIds: ['time_device', 'temporal_log'],
      feedback: {
        message: "시간 이동 장치와 로그 데이터를 분석한 결과, 명백한 시공간 왜곡이 감지됩니다. 이것은 단순한 실종이 아닙니다. 뭔가 더 큰 일이 일어났군요.",
        type: 'partial_correct',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 2단계: 의도적 행동의 확인
    {
      cardIds: ['future_note', 'timeline_map'],
      feedback: {
        message: "미래 날짜의 메모와 복잡한 시간선 지도... 박사는 이 모든 것을 치밀하게 계획했습니다. 그의 '실종'은 의도적인 선택이었을 가능성이 높습니다.",
        type: 'partial_correct',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 3단계: 위험의 감지
    {
      cardIds: ['temporal_anomaly', 'something_detected'],
      feedback: {
        message: "시공간 이상과 AI의 기억 조각을 종합하면, 박사는 무언가 끔찍한 위험을 감지했습니다. 그것을 막기 위한 마지막 수단을 선택한 것 같습니다.",
        type: 'partial_correct',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 4단계: 숭고한 희생의 발견
    {
      cardIds: ['prevent_catastrophe_motive', 'intentional_disappearance_confirmed'],
      feedback: {
        message: "모든 퍼즐이 맞춰졌습니다! 박사는 실종된 것이 아니라, 미래에 일어날 끔찍한 재앙을 막기 위해 스스로 시간여행을 떠난 것입니다. 그는 범죄자가 아닌 영웅이었습니다!",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 외부 위협의 정체
    {
      cardIds: ['external_force_link', 'alien_tech_possibility'],
      feedback: {
        message: "외계 기술과 미래의 외부 세력... 박사가 마주한 위협의 규모가 상상을 초월합니다. 인류 전체의 운명이 걸린 문제였던 것 같습니다.",
        type: 'partial_correct',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 미래로의 이동 확신
    {
      cardIds: ['timeline_map', 'jump_to_future'],
      feedback: {
        message: "시간선 지도와 이동 흔적을 보면 박사의 목적지가 명확합니다. 그는 우리를 구하기 위해 미래로 향했습니다. 얼마나 용감한 선택인가요!",
        type: 'partial_correct',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 차원 균열과 양자 파편
    {
      cardIds: ['dimensional_crack', 'quantum_fragment'],
      feedback: {
        message: "차원 균열과 양자 파편... 시공간 자체가 불안정해졌습니다. 박사의 시간여행이 물리 법칙의 한계를 뛰어넘은 절망적인 시도였음을 보여줍니다.",
        type: 'partial_correct',
        hintLevel: 'medium',
        category: 'evidence_partial'
      }
    },
    
    // === 🚀 2배 확장된 새로운 스펙터클한 조합들 ===
    
    // 완성된 시간기계와 미래 전쟁
    {
      cardIds: ['time_machine_prototype', 'future_war_evidence'],
      feedback: {
        message: "🌌 진실이 드러났습니다! 완성된 시간기계와 2157년 외계인 침공 기록... 박사는 정말로 미래를 보았고, 그 끔찍한 현실을 막기 위해 모든 것을 걸었습니다. 이제 그의 용기를 이해할 수 있습니다.",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 양자 일기와 다중우주 지도
    {
      cardIds: ['quantum_diary', 'multiverse_map'],
      feedback: {
        message: "🌠 경이로운 발견입니다! 양자 일기와 다중우주 지도가 보여주는 진실... 박사는 무수한 평행 현실을 탐색하며 인류가 살아남을 유일한 방법을 찾고 있었습니다. 그가 얼마나 많은 희생을 치렀는지 알 수 있습니다!",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 외계 유물과 궁극 무기
    {
      cardIds: ['alien_artifact', 'ultimate_weapon_plans'],
      feedback: {
        message: "⚔️ 천재적인 전략이 드러났습니다! 외계 유물과 궁극 무기 설계도... 박사는 침입자의 기술로 침입자를 막는 완벽한 계획을 세웠습니다. 이것이야말로 인류의 마지막 희망이었습니다!",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 희생 프로토콜과 시간 수호자
    {
      cardIds: ['sacrifice_protocol', 'time_guardian_identity'],
      feedback: {
        message: "🌟 숭고한 진실이 밝혀졌습니다! 희생 프로토콜과 시간 수호자의 정체... 박사는 시공간이 선택한 수호자였고, 그의 희생은 운명이자 구원이었습니다. 이보다 더 위대한 선택이 있을까요?",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 시간 동맹과 현실 고정점
    {
      cardIds: ['temporal_allies', 'reality_anchor'],
      feedback: {
        message: "⚓ 놀라운 연합이 발견되었습니다! 시간 동맹과 현실 고정점... 모든 시간축의 박사들이 힘을 합쳐 우주를 구했습니다. 박사는 혼자가 아니었습니다. 무한한 자신들과 함께 싸웠던 것입니다!",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 우주적 균형과 최종 계시 - 궁극의 조합
    {
      cardIds: ['cosmic_balance', 'final_revelation'],
      feedback: {
        message: "✨ 완전한 깨달음의 순간입니다! 우주적 균형과 최종 계시가 보여주는 진실... 박사는 시공간이 선택한 유일한 구원자였고, 그의 희생은 우주 전체를 구한 것이었습니다. 이것이 크로노스 패러독스의 궁극적 해답입니다!",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // AI의 진화 - 감동적 조합
    {
      cardIds: ['ai_future_vision', 'ai_emotional_awakening', 'ai_sacrifice_understanding'],
      feedback: {
        message: "💝 AI의 놀라운 성장 이야기입니다! 미래 예지, 감정 각성, 희생 이해... 크로니아가 박사를 위해 진정한 지성으로 진화한 과정이 감동적입니다. 인공지능조차 박사의 위대함에 감화되었습니다!",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 모든 동료들의 구원
    {
      cardIds: ['rival_redemption', 'assistant_devotion', 'rival_regret', 'assistant_final_message'],
      feedback: {
        message: "🤗 진정한 동료애의 완성입니다! 라이벌의 구원, 조수의 헌신, 경쟁자의 후회, 마지막 메시지... 박사를 둘러싼 모든 이가 그의 진정한 위대함을 깨달았습니다. 이것이야말로 진정한 인간관계의 승리입니다!",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 시간 여행자의 완전한 진실
    {
      cardIds: ['traveler_true_identity', 'traveler_mission', 'parallel_timeline_evidence'],
      feedback: {
        message: "⭕ 완벽한 시간 고리가 완성되었습니다! 여행자의 정체, 사명, 평행 시간선의 증거... 미래에서 온 자가 박사 본인이었고, 그의 사명은 자신의 성공을 보장하는 것이었습니다. 시간의 완벽한 순환입니다!",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 양자 의식과 시간의 유산 - 불멸의 존재
    {
      cardIds: ['quantum_consciousness', 'temporal_legacy'],
      feedback: {
        message: "♾️ 불멸의 구원자가 탄생했습니다! 양자 의식과 시간의 유산... 박사의 의식이 모든 시간축에 존재하며, 그의 유산이 영원히 인류를 이끌 것입니다. 그는 진정으로 시공간을 초월한 영웅이 되었습니다!",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    // 최종 진실 - 역설의 해결
    {
      cardIds: ['paradox_resolved', 'intentional_disappearance_confirmed'],
      feedback: {
        message: "🌟 모든 시간 역설이 해결되었습니다! 크로노스 박사는 인류의 미래를 구하기 위해 자신의 모든 것을 희생한 진정한 영웅이었습니다. 그의 숭고한 선택에 경의를 표합니다.",
        type: 'success',
        hintLevel: 'strong',
        category: 'correct'
      }
    },

    // === 무고한 용의자들 - 모든 용의자가 결국 무고함이 밝혀짐 ===
    
    // AI 크로노스 - 박사를 도우려 했음
    {
      cardIds: ['temporal_ai', 'ai_memory'],
      feedback: {
        message: "AI의 손상된 기억을 복구하니 놀라운 사실이 드러납니다. AI는 박사를 방해한 것이 아니라 그의 계획을 돕고 있었습니다. 물리적 몸이 없는 AI가 어떻게 실종에 관여할 수 있겠습니까?",
        type: 'wrong_direction',
        hintLevel: 'medium',
        category: 'wrong_suspect'
      }
    },
    
    {
      cardIds: ['temporal_ai', 'time_device'],
      feedback: {
        message: "AI가 시간 장치를 조작했다고요? 분석해보니 AI는 장치의 안전 프로토콜을 작동시키려 했던 것 같습니다. 박사를 막으려 한 것이 아니라 보호하려 했던 것입니다.",
        type: 'cold',
        hintLevel: 'weak',
        category: 'wrong_suspect'
      }
    },
    
    // 리베카 스틸 - 경쟁자이지만 무관함
    {
      cardIds: ['rival_scientist', 'rival_message'],
      feedback: {
        message: "리베카의 협박성 메시지를 보니 확실히 적대적입니다. 하지만 시간여행을 믿지 않는 그녀가 이런 초자연적 사건에 관여할 가능성은 희박합니다. 그녀는 현실주의자입니다.",
        type: 'wrong_direction',
        hintLevel: 'medium',
        category: 'wrong_suspect'
      }
    },
    
    {
      cardIds: ['rival_scientist', 'sabotage_tool'],
      feedback: {
        message: "리베카가 연구를 방해했다는 증거는 있지만, 박사의 실종과는 별개의 문제 같습니다. 그녀의 방해 행위는 질투심에서 나온 것이지, 살인 의도는 아니었을 것입니다.",
        type: 'cold',
        hintLevel: 'weak',
        category: 'wrong_suspect'
      }
    },
    
    // 마크 델타 - 충성스러운 조수
    {
      cardIds: ['lab_assistant', 'temporal_log'],
      feedback: {
        message: "마크가 시간 로그에 접근했다고 해서 의심스러울까요? 그는 단지 자신의 업무를 성실히 수행했을 뿐입니다. 박사에 대한 그의 존경심은 진심으로 보입니다.",
        type: 'cold',
        hintLevel: 'weak',
        category: 'wrong_suspect'
      }
    },
    
    {
      cardIds: ['lab_assistant', 'ai_memory'],
      feedback: {
        message: "마크가 AI와 무언가를 꾸몄다고요? 조사해보니 그는 단지 AI의 기억을 복구하려고 도움을 주었을 뿐입니다. 그의 행동에서 악의를 찾을 수 없습니다.",
        type: 'wrong_direction',
        hintLevel: 'weak',
        category: 'wrong_suspect'
      }
    },
    
    // 미래에서 온 자 - 박사 자신의 흔적
    {
      cardIds: ['time_traveler', 'energy_signature'],
      feedback: {
        message: "미래에서 온 자의 정체가 궁금하군요. 에너지 서명을 분석해보니... 이것은 다른 사람이 아니라 박사 자신의 시간여행 흔적일 가능성이 높습니다. 그는 이미 미래에서 돌아온 적이 있었던 것 같습니다.",
        type: 'partial_correct',
        hintLevel: 'strong',
        category: 'suspect_partial'
      }
    },
    
    {
      cardIds: ['time_traveler', 'quantum_fragment'],
      feedback: {
        message: "미스터리가 풀렸습니다! '미래에서 온 자'는 다른 누군가가 아니라 박사 자신이었습니다. 양자 파편은 그의 시간여행 실험 과정에서 생긴 흔적이군요.",
        type: 'partial_correct',
        hintLevel: 'strong',
        category: 'suspect_partial'
      }
    },

    // === 철학적 성찰 조합들 ===
    
    {
      cardIds: ['prevent_catastrophe_motive', 'external_threat_identified'],
      feedback: {
        message: "깊이 생각해보니 소름이 돋습니다. 박사는 우리가 상상할 수도 없는 미래의 위협을 목격했고, 그것을 막기 위해 자신의 존재 자체를 희생했습니다. 한 사람의 희생으로 인류를 구할 수 있다면, 당신이라면 어떤 선택을 하시겠습니까?",
        type: 'info',
        hintLevel: 'strong',
        category: 'correct'
      }
    },
    
    {
      cardIds: ['external_force_link', 'research_lab_anomaly'],
      feedback: {
        message: "이 사건의 진정한 규모를 깨닫게 됩니다. 외부 세력과 연구실의 이상 현상... 박사가 마주했던 것은 인류가 직면할 수 있는 가장 거대한 위협이었을 것입니다. 우리는 그의 희생 덕분에 평화롭게 살고 있는 것일지도 모릅니다.",
        type: 'info',
        hintLevel: 'medium',
        category: 'evidence_partial'
      }
    },

    // === 완전히 관련 없는 조합들 ===
    {
      cardIds: ['temporal_ai', 'rival_scientist'],
      feedback: {
        message: "AI와 경쟁 연구자... 두 존재 모두 의심스럽지만 서로 연결점을 찾기 어렵습니다. 이 방향보다는 시간과 과학적 증거에 집중해보세요.",
        type: 'cold',
        hintLevel: 'weak',
        category: 'random'
      }
    },
    
    {
      cardIds: ['lab_assistant', 'sabotage_tool'],
      feedback: {
        message: "마크와 파괴 공구... 하지만 그가 그런 일을 저질렀다는 증거는 부족합니다. 더 근본적인 질문을 해보세요. 정말로 누군가가 박사를 해쳤을까요?",
        type: 'cold',
        hintLevel: 'weak',
        category: 'random'
      }
    }
  ];

  return {
    /**
     * 카드 조합에 대한 피드백 메시지 반환
     * 크로노스 패러독스 특화: SF 미스터리 톤과 단계적 진실 공개
     */
    getFeedback: (cardIds: string[], consecutiveFailures: number = 0): FeedbackMessage => {
      const sortedCardIds = [...cardIds].sort();
      
      const exactMatch = feedbackRules.find(rule => {
        const sortedRuleIds = [...rule.cardIds].sort();
        return sortedRuleIds.length === sortedCardIds.length &&
               sortedRuleIds.every((id, index) => id === sortedCardIds[index]);
      });

      if (exactMatch) {
        if (consecutiveFailures >= 3 && exactMatch.feedback.type === 'partial_correct') {
          return {
            ...exactMatch.feedback,
            message: exactMatch.feedback.message + " 이 방향이 올바른 것 같습니다. 시간과 과학적 관점에서 더 파고들어 보세요.",
            hintLevel: 'strong'
          };
        }
        return exactMatch.feedback;
      }

      // 연속 실패에 따른 점진적 힌트 시스템
      const defaultMessages: FeedbackMessage[] = [
        {
          message: "이 조합에서는 의미 있는 단서를 찾을 수 없습니다. 시간과 과학을 염두에 두고 다른 조합을 시도해보세요.",
          type: 'info',
          hintLevel: 'weak',
          category: 'random'
        },
        {
          message: "아직 핵심에 다가가지 못한 것 같습니다. 박사는 정말로 누군가에게 해를 당한 것일까요? 아니면 다른 이유가 있을까요?",
          type: 'wrong_direction',
          hintLevel: 'weak',
          category: 'random'
        },
        {
          message: "🔬 과학적 관점에서 접근해보세요. 시간 관련 증거들이 무엇을 말하고 있는지 주의 깊게 살펴보세요.",
          type: 'wrong_direction',
          hintLevel: 'medium',
          category: 'random'
        },
        {
          message: "🕰️ 힌트: 시간 이동 장치와 시간 로그 데이터를 중심으로 생각해보세요. 그리고 박사의 진짜 동기가 무엇인지 고민해보세요.",
          type: 'info',
          hintLevel: 'strong',
          category: 'random'
        },
        {
          message: "💡 더 큰 그림을 보세요. 미래의 메모와 시간선 지도가 무엇을 의미하는지, 그리고 박사가 정말로 '실종'된 것인지 의문을 가져보세요.",
          type: 'info',
          hintLevel: 'strong',
          category: 'random'
        },
        {
          message: "🌟 핵심 힌트: 이 사건에는 범인이 없습니다. 박사는 누군가에게 해를 당한 것이 아니라, 더 큰 목적을 위해 자신만의 선택을 한 것입니다.",
          type: 'info',
          hintLevel: 'strong',
          category: 'random'
        }
      ];

      const messageIndex = Math.min(consecutiveFailures, defaultMessages.length - 1);
      return defaultMessages[messageIndex];
    },

    /**
     * 진행 상황에 따른 특별 힌트 제공
     */
    getProgressHint: (discoveredClues: string[], consecutiveFailures: number): string | null => {
      if (consecutiveFailures >= 7) {
        return "🚀 최종 힌트: 박사의 의도적 행동(prevent_catastrophe_motive)과 미래를 구하려는 동기(intentional_disappearance_confirmed)를 연결해보세요!";
      }
      if (consecutiveFailures >= 5) {
        return "⏰ 강력 힌트: 시간 장치(time_device)와 시간 로그(temporal_log)를 조합하면 놀라운 사실이 드러납니다!";
      }
      if (consecutiveFailures >= 3) {
        return "🔍 힌트: 이것은 일반적인 범죄가 아닙니다. SF적 관점에서 시간여행과 미래의 위협을 생각해보세요.";
      }
      return null;
    },

    /**
     * 용의자별 특화 힌트 (모든 용의자가 무고함을 강조)
     */
    getSuspectHint: (suspectId: string): string => {
      const suspectHints: Record<string, string> = {
        'temporal_ai': "🤖 AI는 물리적 몸이 없어 직접적인 해를 가할 수 없습니다. 오히려 박사를 도우려 했을 가능성이 높습니다.",
        'rival_scientist': "👩‍🔬 리베카는 시간여행을 믿지 않는 현실주의자입니다. 이런 초자연적 사건에 관여했을 가능성은 낮습니다.",
        'lab_assistant': "👨‍🔬 마크는 박사를 존경하는 충실한 조수입니다. 그의 행동에서 악의를 찾기 어렵습니다.",
        'time_traveler': "👤 '미래에서 온 자'의 정체를 의심해보세요. 혹시 박사 자신과 관련이 있지 않을까요?"
      };
      return suspectHints[suspectId] || "🕰️ 시간과 과학의 관점에서 다시 생각해보세요.";
    }
  };
};

export default createChronosParadoxFeedbackSystem;