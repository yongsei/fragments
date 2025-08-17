export const case8_chapter1_1_kr = {
  id: 'case8_chapter1_1',
  title: '챕터 1-1: 안개 속의 도착',
  story: '평화로운 여행 중 갑작스러운 짙은 안개에 갇혀 지도에도 없는 마을 \'에코우드\'에 도착하고, 마을의 기이한 고요함과 주민들의 불안한 시선을 처음 마주하는 과정.',
  victim: '',
  suspects: [
    {
      id: 'A01',
      name: '여행자',
      role: '주인공',
      description: '짙은 안개 속에서 길을 잃고 에코우드 마을에 도착한 낯선 이. 이 기이한 마을의 비밀을 파헤치게 될 운명에 처해 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A02',
      name: '마을 주민',
      role: '마을 주민',
      description: '안개 속에서 마주친 마을 주민. 낯선 이방인을 경계하거나 시선을 피하는 등 불안한 모습을 보인다. 그들의 눈빛에는 설명할 수 없는 피로와 공포가 깃들어 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A03',
      name: '여관 주인',
      role: '여관 주인',
      description: '마을의 유일한 숙소인 낡은 민가를 운영하는 인물. 피로하고 무뚝뚝하지만, 마을의 비밀을 어렴풋이 알고 있는 듯하다. 그의 침묵은 많은 것을 암시한다.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'A13',
      name: '기이한 고요함',
      description: '안개 속에서 느껴지는 비정상적인 침묵.',
      details: '바람 소리나 멀리서 들려오던 문명 소리마저 사라진 듯하며, 이 고요함은 불안감을 증폭시킨다.',
      location: 'A07'
    },
    {
      id: 'A14',
      name: '불안한 시선',
      description: '마을 주민들이 이방인을 바라보는 경계심과 공포가 섞인 눈빛.',
      details: '그들의 시선은 마치 무언가를 숨기고 있거나, 혹은 경고하려는 듯하다.',
      location: 'A02'
    },
    {
      id: 'A15',
      name: '지도에 없는 이름',
      description: '에코우드라는 마을 이름이 어떤 지도에도 존재하지 않는다는 사실.',
      details: '이는 마을이 외부 세계와 단절되어 있음을 강력히 시사한다.',
      location: 'A08'
    }
  ],
  locations: [
    {
      id: 'A07',
      name: '짙은 안개',
      description: '모든 것을 집어삼키고 시야를 가리는 축축한 안개.',
      details: '마을을 외부와 단절시키는 역할을 하며, 그 속에서 알 수 없는 불길한 기운이 느껴진다.'
    },
    {
      id: 'A08',
      name: '에코우드 마을 입구',
      description: '낡은 나무 간판이 서 있는, 지도에도 없는 마을의 입구.',
      details: '간판의 글씨는 희미하게 지워져 있으며, 그 아래에는 알 수 없는 긁힌 자국들이 있다.'
    },
    {
      id: 'A09',
      name: '낡은 민가',
      description: '여관이라기보다는 낡은 민가에 가까운 숙소.',
      details: '퀴퀴한 냄새와 함께 묘한 냉기가 감돈다. 창문은 굳게 닫혀 있고, 내부에서는 인기척이 거의 느껴지지 않는다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_A01_A02_A03',
      cards: ['A01', 'A02'],
      result: '여관 주인에 대한 새로운 정보를 발견했습니다.',
      unlock: 'A03'
    },
    {
      id: 'rule_A07_A08_A09',
      cards: ['A07', 'A08'],
      result: '낡은 민가에 대한 정보를 얻었습니다.',
      unlock: 'A09'
    },
    {
      id: 'rule_A13_A14_A15',
      cards: ['A13', 'A14'],
      result: '지도에 없는 마을 이름의 의미를 깨달았습니다.',
      unlock: 'A15'
    }
  ],
  fragments: [],
  winCondition: 'A15',
  initialCards: ['A01', 'A07', 'A13']
};