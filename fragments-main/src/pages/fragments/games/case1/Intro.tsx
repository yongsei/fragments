import React from 'react';
import MysteryIntroLayout from '../../components/MysteryIntroLayout';
import { useFragmentsTranslation } from '../../hooks/useFragmentsTranslation';

const MysteryAlchemy1CaseIntro: React.FC = () => {
  const { t, originalLang } = useFragmentsTranslation();
  

  return (
    <MysteryIntroLayout
      seoTitle={originalLang === 'kr' 
        ? "저택 살인 사건 - 단서의 파편 케이스1"
        : "Mansion Murder Case - Fragment of Mystery Case1 Free Play"
      }
      seoDescription={originalLang === 'kr'
        ? "🏰 고풍스러운 저택에서 벌어진 살인사건! 독살된 저택 주인의 진실을 밝혀내세요. 메리 부인, 집사, 의사 중 진짜 범인은? 단서 카드 조합으로 사건을 해결하는 클래식 추리게임 - 단서의 파편 케이스1 체험!"
        : "🏰 A murder case in an elegant mansion! Uncover the truth behind the poisoned mansion owner. Who is the real culprit among Mrs. Mary, the butler, and the doctor? Classic detective game solving cases through clue card combinations - Fragment of Mystery Case1 free trial!"
      }
      seoKeywords={originalLang === 'kr'
        ? "저택 살인사건, 단서의 파편 케이스1, 추리게임, 미스터리게임, 독살사건, 클래식추리, 범인찾기, 저택미스터리, 살인사건게임, 추론게임, 탐정게임, 무료추리게임, 온라인미스터리"
        : "mansion murder case, fragment of mystery case1, detective game, mystery game, poisoning case, classic detective, find culprit, mansion mystery, murder case game, reasoning game, detective game, free detective game, online mystery"
      }
      canonicalUrl="/fragments/case1"
      title={t.case1.title}
      subtitle={t.case1.subtitle}
      storyTitle={t.case1.storyTitle}
      storyContent={t.case1.storyContent}
      gameUrl="game"
      backUrl="/fragments"
      caseId="case1"
      uiCustomization={{
        backgroundGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        titleGradient: 'linear-gradient(45deg, #ffd700, #ffed4e)',
        accentColor: '#ffd700',
        buttonGradient: 'linear-gradient(45deg, #ffd700, #ffed4e)',
        fontFamily: "'Noto Sans KR', sans-serif",
        titleIcon: '🏰',
        gameButtonIcon: '🕵️',
        gameButtonText: originalLang === 'kr' ? '사건 수사 시작하기' : 'Start Investigation'
      }}
    />
  );
};

export default MysteryAlchemy1CaseIntro;