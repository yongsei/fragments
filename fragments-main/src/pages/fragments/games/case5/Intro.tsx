import React from 'react';
import MysteryIntroLayout from '../../components/MysteryIntroLayout';
import { useFragmentsTranslation } from '../../hooks/useFragmentsTranslation';

const MysteryAlchemy5CaseIntro: React.FC = () => {
  const { t, originalLang } = useFragmentsTranslation();
  
  return (
    <MysteryIntroLayout
      seoTitle={originalLang === 'kr' 
        ? "브래스헬름의 잿불 챕터3 - 단서의 파편 케이스5"
        : "Ashes of Brasshelm Chapter3 - Fragment of Mystery Case5 Free Play"
      }
      seoDescription={originalLang === 'kr'
        ? "🔥 브래스헬름의 최종 결전! 5인의 팀과 함께 섀도우의 요새에 잠입하세요. 스파크가 만든 끔찍한 괴물과 맞서고, 릴리아의 비극적 희생을 통해 승리를 쟁취하세요. 브래스헬름 3부작의 감동적 완결편!"
        : "🔥 The final battle of Brasshelm! Infiltrate Shadow's fortress with your team of five. Face the terrible monsters created by Spark and achieve victory through Lilia's tragic sacrifice. The moving conclusion of the Brasshelm trilogy!"
      }
      seoKeywords={originalLang === 'kr'
        ? "브래스헬름의 잿불 챕터3, 단서의 파편 케이스5, 최종 결전, 섀도우 요새, 릴리아 희생, 스파크 괴물, 브래스헬름 완결편, 시리즈 피날레"
        : "ashes of brasshelm chapter3, fragment of mystery case5, final battle, shadow fortress, lilia sacrifice, spark monster, brasshelm finale, series conclusion"
      }
      canonicalUrl="/fragments/case5"
      title={originalLang === 'kr' ? '브래스헬름의 잿불' : 'Ashes of Brasshelm'}
      subtitle={originalLang === 'kr' ? '챕터 3: 브래스헬름의 잿불' : 'Chapter 3: Ashes of Brasshelm'}
      storyTitle={originalLang === 'kr' ? '최종 결전의 시간' : 'Time for the Final Battle'}
      storyContent={originalLang === 'kr' 
        ? '마침내 섀도우의 요새로 잠입한 5인의 팀. 하지만 그들을 기다리는 것은 상상 이상으로 강력한 적과 스파크가 만들어낸 끔찍한 괴물이었다. 팀원들은 각자의 능력을 총동원하여 맞서 싸우지만, 승리를 위해선 누군가의 비극적인 희생이 필요했다.'
        : 'The team of five finally infiltrates Shadow\'s fortress. But what awaits them are enemies more powerful than imagined and terrible monsters created by Spark. The team members fight with all their abilities, but tragic sacrifice from someone is needed for victory.'
      }
      gameUrl="game"
      backUrl="/fragments"
      caseId="case5"
      uiCustomization={{
        backgroundGradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #feca57 100%)',
        titleGradient: 'linear-gradient(45deg, #feca57, #ff9ff3)',
        accentColor: '#feca57',
        buttonGradient: 'linear-gradient(45deg, #feca57, #ff9ff3)',
        fontFamily: "'Noto Sans KR', sans-serif",
        titleIcon: '🔥',
        gameButtonIcon: '⚔️',
        gameButtonText: originalLang === 'kr' ? '최종 결전 시작하기' : 'Start Final Battle'
      }}
    />
  );
};

export default MysteryAlchemy5CaseIntro;