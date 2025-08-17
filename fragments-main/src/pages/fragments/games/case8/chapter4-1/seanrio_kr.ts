export const case8_chapter4_1_kr = {
  id: 'case8_chapter4_1',
  title: '챕터 4-1: 저주의 핵심을 찾아서',
  story: "'잊혀진 의식'이 저주의 원인임을 확신하고, 엘라라 할머니의 도움으로 저주를 풀기 위한 핵심 요소인 '고리의 파편'의 존재를 알게 되는 과정.",
  victim: '',
  suspects: [
    {
      id: 'D01',
      name: '엘라라 할머니의 진실',
      role: '엘라라 할머니',
      description: "엘라라 할머니가 저주에 대한 진실을 말할 때의 모습. 그녀의 불안감과 함께 드러나는 과거의 비밀에 대한 힌트.",
      alibi: '',
      motive: ''
    },
    {
      id: 'D02',
      name: '저주의 수호자',
      role: '저주의 수호자',
      description: '저주의 수호자. 안개 속에서 희미하게 들려오던 속삭임이 이제 분명한 목소리가 되어 여행자를 조롱한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'D03',
      name: '마을 주민 영혼',
      role: '마을 주민 영혼',
      description: '과거 \'잊혀진 의식\'에 참여했던 마을 주민들의 영혼. 그들은 저주에 갇혀 고통받으며, 여행자의 진입을 막으려 한다.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'D13',
      name: '고리의 파편',
      description: '교회 지하 제단에 남아있을 것으로 추정되는, 저주를 묶어두는 핵심적인 기이한 수정 조각.',
      details: '검붉은 빛을 낸다.',
      location: 'D08'
    },
    {
      id: 'D14',
      name: '반전 의식',
      description: "저주를 풀기 위해 '고리의 파편'을 파괴하거나, 의식을 역으로 되돌리는 데 필요한 구체적인 방법이나 주문.",
      details: '',
      location: ''
    },
    {
      id: 'D15',
      name: '벽화의 비밀',
      description: '교회 지하 제단 주변 벽면에 그려진, 잊혀진 의식의 과정이 섬뜩하게 묘사된 벽화.',
      details: '저주의 기원을 이해하는 데 중요한 단서가 된다.',
      location: 'D08'
    }
  ],
  locations: [
    {
      id: 'D07',
      name: '낡은 교회',
      description: '마을의 가장 높은 언덕에 위치한 낡고 부서진 교회.',
      details: '퀴퀴한 곰팡이 냄새와 함께 알 수 없는 냉기가 감돈다.'
    },
    {
      id: 'D08',
      name: '교회 지하 제단',
      description: '교회 지하로 통하는 비밀 통로를 통해 발견된 제단.',
      details: "의식의 흔적과 '고리의 파편'이 남아있을 것으로 추정되는 곳."
    },
    {
      id: 'D09',
      name: '교회 내부 공간',
      description: '교회 내부의 특정 공간.',
      details: '이곳에서 과거 의식의 잔재나 저주와 관련된 유물을 발견할 수 있다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_D01_D02_D03',
      cards: ['D01', 'D02'],
      result: '과거 \'잊혀진 의식\'에 참여했던 마을 주민들의 영혼에 대한 정보를 발견했습니다.',
      unlock: 'D03'
    },
    {
      id: 'rule_D07_D08_D09',
      cards: ['D07', 'D08'],
      result: '교회 내부의 특정 공간에 대한 정보를 얻었습니다.',
      unlock: 'D09'
    },
    {
      id: 'rule_D13_D14_D15',
      cards: ['D13', 'D14'],
      result: '벽화의 비밀을 해독했습니다.',
      unlock: 'D15'
    }
  ],
  fragments: [],
  winCondition: 'D15',
  initialCards: ['D01', 'D07', 'D13']
};