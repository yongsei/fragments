import React from 'react';
import MysteryIntroLayout from '../../components/MysteryIntroLayout';
import { useFragmentsTranslation } from '../../hooks/useFragmentsTranslation';

const MysteryAlchemy3CaseIntro: React.FC = () => {
  const { t, originalLang } = useFragmentsTranslation();

  return (
    <MysteryIntroLayout
      seoTitle={originalLang === 'kr' 
        ? "브래스헬름의 잿불 챕터1 - 단서의 파편 케이스3"
        : "Ashes of Brasshelm Chapter1 - Fragment of Mystery Case3 Free Play"
      }
      seoDescription={originalLang === 'kr'
        ? "🔥 스팀펑크 도시 브래스헬름에서 벌어진 의문의 살인사건! 정체불명의 톱니바퀴와 하급 연구원의 죽음. 섀도우 오브 스팀 조직의 거대한 음모를 파헤쳐보세요. 단서의 파편 케이스3 체험!"
        : "🔥 A mysterious murder case in the steampunk city of Brasshelm! An unidentified gear and the death of a junior researcher. Uncover the massive conspiracy of the Shadow of Steam organization. Fragment of Mystery Case3 free trial!"
      }
      seoKeywords={originalLang === 'kr'
        ? "브래스헬름의 잿불, 단서의 파편 케이스3, 스팀펑크 추리게임, 섀도우 오브 스팀, 브래스헬름, 기계 미스터리, 스팀펑크게임, 무료추리게임, 온라인미스터리"
        : "ashes of brasshelm, fragment of mystery case3, steampunk detective game, shadow of steam, brasshelm, mechanical mystery, steampunk game, free detective game, online mystery"
      }
      canonicalUrl="/fragments/case3"
      title={originalLang === 'kr' ? '브래스헬름의 잿불' : 'Ashes of Brasshelm'}
      subtitle={originalLang === 'kr' ? '챕터 1: 사건의 불꽃' : 'Chapter 1: Spark of the Incident'}
      storyTitle={originalLang === 'kr' ? '스팀펑크 도시의 미스터리' : 'Mystery of the Steampunk City'}
      storyContent={originalLang === 'kr' 
        ? '브래스헬름에 도착한 에드윈은 의문의 살인 사건과 정체불명의 톱니바퀴를 마주한다. 그는 현장의 단서들을 샅샅이 파헤치고, 도시의 어두운 이면 속에서 정보상 카시안 홀트와 손을 잡는다. 두 사람의 목표는 사건의 배후에 있는 거대한 비밀 결사 "섀도우 오브 스팀"의 실체에 접근하는 것이다.'
        : 'Edwin arrives in Brasshelm and encounters a mysterious murder case and an unidentified gear. He thoroughly investigates the clues at the scene and teams up with information broker Cassian Holt in the dark underbelly of the city. Their goal is to approach the reality of the massive secret society "Shadow of Steam" behind the incident.'
      }
      gameUrl="game"
      backUrl="/fragments"
      caseId="case3"
      uiCustomization={{
        backgroundGradient: 'linear-gradient(135deg, #2d1b69 0%, #11998e 50%, #38ef7d 100%)',
        titleGradient: 'linear-gradient(45deg, #38ef7d, #11998e)',
        accentColor: '#38ef7d',
        buttonGradient: 'linear-gradient(45deg, #38ef7d, #11998e)',
        fontFamily: "'Noto Sans KR', sans-serif",
        titleIcon: '🔥',
        gameButtonIcon: '⚙️',
        gameButtonText: originalLang === 'kr' ? '브래스헬름 수사 시작하기' : 'Start Brasshelm Investigation'
      }}
    />
  );
};

export default MysteryAlchemy3CaseIntro;