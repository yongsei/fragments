import React from 'react';
import MysteryIntroLayout from '../../../components/MysteryIntroLayout';
import { useFragmentsTranslation } from '../../../hooks/useFragmentsTranslation';

const MysteryAlchemy4CaseIntro: React.FC = () => {
  const { t, originalLang } = useFragmentsTranslation();
  

  return (
    <MysteryIntroLayout
      seoTitle={originalLang === 'kr' 
        ? "브래스헬름의 잿불 챕터2 - 단서의 파편 케이스4"
        : "Ashes of Brasshelm Chapter2 - Fragment of Mystery Case4 Free Play"
      }
      seoDescription={originalLang === 'kr'
        ? "🤝 예상 밖의 동맹! 탈주한 과학자 이졸데 박사와 만나 5인의 팀을 결성하세요. 복수심에 불타는 빅토르, 신념 강한 릴리아와 함께 스파크의 끔찍한 진실을 막아보세요. 단서의 파편 케이스4 체험!"
        : "🤝 An unexpected alliance! Meet fugitive scientist Dr. Isolde and form a team of 5. Join Viktor burning with revenge and principled Lilia to stop the terrible truth of Spark. Fragment of Mystery Case4 free trial!"
      }
      seoKeywords={originalLang === 'kr'
        ? "브래스헬름의 잿불 챕터2, 단서의 파편 케이스4, 동맹 결성, 이졸데 박사, 빅토르 스틸하트, 릴리아 베넷, 팀워크 추리게임, 스팀펑크 모험"
        : "ashes of brasshelm chapter2, fragment of mystery case4, alliance formation, dr isolde, viktor steelheart, lilia bennett, teamwork detective game, steampunk adventure"
      }
      canonicalUrl="/fragments/case4"
      title={originalLang === 'kr' ? '브래스헬름의 잿불' : 'Ashes of Brasshelm'}
      subtitle={originalLang === 'kr' ? '챕터 2: 예상 밖의 동맹' : 'Chapter 2: Unexpected Alliance'}
      storyTitle={originalLang === 'kr' ? '5인의 팀 결성' : 'Formation of the Five'}
      storyContent={originalLang === 'kr' 
        ? '탈주한 과학자를 찾아 나선 에드윈과 카시안은 죄책감에 시달리는 이졸데 박사와 만난다. 스파크의 끔찍한 진실을 알게 된 그들은 계획을 막기 위해 복수심에 불타는 싸움꾼 빅토르와 신념 강한 저항군 릴리아까지 동료로 받아들여, 마침내 5인의 팀을 결성한다.'
        : 'Edwin and Cassian, who set out to find the fugitive scientist, meet Dr. Isolde, who is tormented by guilt. Learning the terrible truth about Spark, they accept the revenge-driven fighter Viktor and the principled resistance member Lilia as companions to stop the plan, finally forming a team of five.'
      }
      gameUrl="game"
      backUrl="/fragments"
      caseId="case4"
      uiCustomization={{
        backgroundGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        titleGradient: 'linear-gradient(45deg, #f093fb, #f5576c)',
        accentColor: '#f093fb',
        buttonGradient: 'linear-gradient(45deg, #f093fb, #f5576c)',
        fontFamily: "'Noto Sans KR', sans-serif",
        titleIcon: '🤝',
        gameButtonIcon: '⚙️',
        gameButtonText: originalLang === 'kr' ? '동맹 결성 시작하기' : 'Start Alliance Formation'
      }}
    />
  );
};

export default MysteryAlchemy4CaseIntro;