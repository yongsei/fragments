export const case8_chapter7_1_kr = {
  id: 'case8_chapter7_1',
  title: '챕터 7-1: 문명으로의 귀환',
  story: '에코우드 마을을 떠난 여행자들이 문명으로 돌아오지만, 마을에서 겪었던 악몽과 상흔이 그들의 삶에 깊이 남아있음을 깨닫기 시작하는 과정.',
  victim: '',
  suspects: [
    {
      id: 'G01',
      name: '알렉스',
      role: '알렉스',
      description: '문명으로 돌아온 알렉스. 더 이상 저널리스트로서의 냉철함을 유지하기 어려워 보이며, 멍하니 허공을 응시하는 시간이 늘었다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'G02',
      name: '여행자',
      role: '여행자',
      description: '에코우드 마을을 떠난 여행자. 육체적인 피로보다 더 깊은, 정신적인 상흔이 그를 짓누른다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'G03',
      name: '일상 속 그림자',
      role: '여행자',
      description: '평범한 일상 속에서 에코우드 마을의 그림자를 보는 여행자의 모습. 스쳐 지나가는 사람들의 얼굴에서 마을 주민들의 공포를 읽는다.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'G13',
      name: '알렉스의 빈 수첩',
      description: '알렉스의 수첩. 더 이상 기록되지 않고 멍하니 펼쳐져 있는 페이지들.',
      details: '그의 논리적인 세계관이 붕괴되었음을 보여준다.',
      location: 'G01'
    },
    {
      id: 'G14',
      name: '파편의 진동',
      description: '여행자의 손끝에 남아있는 듯한 \'고리의 파편\'의 진동.',
      details: '저주의 물리적인 잔재가 여전히 느껴진다.',
      location: ''
    },
    {
      id: 'G15',
      name: '마을의 기억',
      description: '평범한 일상 속에서 문득 떠오르는 에코우드 마을의 기억.',
      details: '이는 여행자의 정신에 깊이 박힌 상흔을 보여준다.',
      location: ''
    }
  ],
  locations: [
    {
      id: 'G07',
      name: '마을을 떠나는 길',
      description: '에코우드 마을을 떠나는 길.',
      details: '짙은 안개는 걷혔고 맑은 햇살이 비추지만, 여행자의 마음속에는 여전히 안개가 드리워져 있다.'
    },
    {
      id: 'G08',
      name: '문명의 도시',
      description: '문명으로 돌아온 도시의 풍경.',
      details: '그러나 여행자에게는 모든 것이 예전과 같지 않게 느껴진다.'
    },
    {
      id: 'G09',
      name: '꿈속의 마을',
      description: '여행자의 꿈속에서 반복되는 에코우드 마을의 특정 장소.',
      details: '그곳은 여전히 악몽의 근원이다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_G01_G02_G03',
      cards: ['G01', 'G02'],
      result: '평범한 일상 속에서 에코우드 마을의 그림자를 보는 여행자의 모습에 대한 정보를 발견했습니다.',
      unlock: 'G03'
    },
    {
      id: 'rule_G07_G08_G09',
      cards: ['G07', 'G08'],
      result: '여행자의 꿈속에서 반복되는 에코우드 마을의 특정 장소에 대한 정보를 얻었습니다.',
      unlock: 'G09'
    },
    {
      id: 'rule_G13_G14_G15',
      cards: ['G13', 'G14'],
      result: '평범한 일상 속에서 문득 떠오르는 에코우드 마을의 기억에 대한 정보를 얻었습니다.',
      unlock: 'G15'
    }
  ],
  fragments: [],
  winCondition: 'G15',
  initialCards: ['G01', 'G07', 'G13']
};