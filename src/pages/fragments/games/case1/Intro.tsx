import React from 'react';
import MysteryIntroLayout from '../../components/MysteryIntroLayout';
import { useFragmentsTranslation } from '../../hooks/useFragmentsTranslation';

const MysteryAlchemy1CaseIntro: React.FC = () => {
  const { t, originalLang } = useFragmentsTranslation();
  
  const previewCards = [
    {
      icon: '☕',
      title: originalLang === 'kr' ? '독이 든 차' : 'Poisoned Tea',
      description: originalLang === 'kr' ? '희생자가 마지막으로 마신 것' : 'The last thing the victim drank',
      gradientColors: ['#ffd700', '#ffed4e']
    },
    {
      icon: '📄',
      title: originalLang === 'kr' ? '유언장 초안' : 'Will Draft',
      description: originalLang === 'kr' ? '미완성된 상속 문서' : 'Incomplete inheritance document',
      gradientColors: ['#8b5cf6', '#a855f7']
    },
    {
      icon: '🧤',
      title: originalLang === 'kr' ? '정원 장갑' : 'Garden Gloves',
      description: originalLang === 'kr' ? '수상한 흙과 얼룩' : 'Suspicious dirt and stains',
      gradientColors: ['#10b981', '#34d399']
    }
  ];

  const featureCards = [
    {
      icon: '🕵️',
      title: t.features.deduction.title,
      description: t.features.deduction.description
    },
    {
      icon: '🃏',
      title: t.features.clues.title,
      description: t.features.clues.description
    },
    {
      icon: '🏰',
      title: originalLang === 'kr' ? '고전 미스터리' : 'Classic Mystery',
      description: originalLang === 'kr' ? '고풍스러운 저택에서 벌어지는 클래식한 살인 미스터리를 경험하세요' : 'Experience a classic murder mystery set in an elegant mansion'
    }
  ];

  return (
    <MysteryIntroLayout
      seoTitle={originalLang === 'kr' 
        ? "저택 살인 사건 - 단서의 파편 케이스1 무료 플레이"
        : "Mansion Murder Case - Fragment of Mystery Case1 Free Play"
      }
      seoDescription={originalLang === 'kr'
        ? "🏰 고풍스러운 저택에서 벌어진 살인사건! 독살된 저택 주인의 진실을 밝혀내세요. 메리 부인, 집사, 의사 중 진짜 범인은? 단서 카드 조합으로 사건을 해결하는 클래식 추리게임 - 단서의 파편 케이스1 무료 체험!"
        : "🏰 A murder case in an elegant mansion! Uncover the truth behind the poisoned mansion owner. Who is the real culprit among Mrs. Mary, the butler, and the doctor? Classic detective game solving cases through clue card combinations - Fragment of Mystery Case1 free trial!"
      }
      seoKeywords={originalLang === 'kr'
        ? "저택 살인사건, 단서의 파편 케이스1, 추리게임, 미스터리게임, 독살사건, 클래식추리, 범인찾기, 저택미스터리, 살인사건게임, 추론게임, 탐정게임, 무료추리게임, 온라인미스터리"
        : "mansion murder case, fragment of mystery case1, detective game, mystery game, poisoning case, classic detective, find culprit, mansion mystery, murder case game, reasoning game, detective game, free detective game, online mystery"
      }
      canonicalUrl="/fragments/case1"
      title={t.case1.title}
      subtitle={t.case1.subtitle}
      previewCards={previewCards}
      featureCards={featureCards}
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