export const case8_chapter6_2_kr = {
  id: 'case8_chapter6_2',
  title: '챕터 6-2: 변화의 징조',
  story: '저주가 풀린 후 마을의 변화를 인지하고, 그 과정에서 얻은 상흔과 마을 주민들의 새로운 모습을 목격하는 결말 직전의 과정.',
  victim: '',
  suspects: [
    {
      id: 'F04',
      name: '릴리',
      role: '릴리',
      description: '릴리가 여행자에게 다가와 건네는, 더 이상 섬뜩하지 않은 평범한 아이의 그림. 그녀의 변화는 저주가 풀렸음을 상징한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'F05',
      name: '남아있는 마을 주민',
      role: '남아있는 마을 주민',
      description: '저주가 풀린 후에도 여전히 마을에 남아있는, 과거의 고통을 잊지 못하는 마을 주민. 그의 존재는 저주의 잔재를 보여준다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'F06',
      name: '희생의 대가',
      role: '희생의 대가',
      description: '챕터 6의 인물 카드를 모두 모으면 드러나는, 저주를 풀기 위한 희생의 대가를 상징하는 인물.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'F16',
      name: '릴리의 새 그림',
      description: '릴리가 여행자에게 건넨, 더 이상 섬뜩하지 않고 평범한 아이의 그림.',
      details: '이는 저주로부터의 해방을 상징한다.',
      location: 'F11'
    },
    {
      id: 'F17',
      name: '사라진 광기의 흔적',
      description: '마을 주민들의 눈빛에서 사라진 광기와 공포의 흔적.',
      details: '그들의 표정은 여전히 피로하지만, 평온함을 되찾았다.',
      location: 'F02'
    },
    {
      id: 'F18',
      name: '지울 수 없는 상흔',
      description: '챕터 6의 증거 카드를 모두 모으면 드러나는, 저주가 풀린 후에도 여행자에게 남겨진, 지울 수 없는 상흔을 상징하는 증거.',
      details: '',
      location: ''
    }
  ],
  locations: [
    {
      id: 'F10',
      name: '마을 주민들의 광장',
      description: '마을 주민들이 모여 있는 광장.',
      details: '더 이상 반복되는 놀이는 없지만, 그들의 표정에는 깊은 피로가 남아있다.'
    },
    {
      id: 'F11',
      name: '릴리의 그림 장소',
      description: '릴리가 그림을 건넨 장소.',
      details: '그곳은 새로운 시작을 암시하는 듯한 평온함을 되찾았다.'
    },
    {
      id: 'F12',
      name: '과거의 흔적 장소',
      description: '챕터 6의 장소 카드를 모두 모으면 드러나는, 저주가 풀린 후에도 마을에 남아있는, 과거의 흔적을 상징하는 장소.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_F04_F05_F06',
      cards: ['F04', 'F05'],
      result: '저주를 풀기 위한 희생의 대가를 상징하는 인물에 대한 정보가 해금되었습니다.',
      unlock: 'F06'
    },
    {
      id: 'rule_F10_F11_F12',
      cards: ['F10', 'F11'],
      result: '저주가 풀린 후에도 마을에 남아있는, 과거의 흔적을 상징하는 장소에 대한 정보가 해금되었습니다.',
      unlock: 'F12'
    },
    {
      id: 'rule_F16_F17_F18',
      cards: ['F16', 'F17'],
      result: '저주가 풀린 후에도 여행자에게 남겨진, 지울 수 없는 상흔을 상징하는 증거가 해금되었습니다.',
      unlock: 'F18'
    }
  ],
  fragments: [],
  winCondition: 'F18',
  initialCards: ['F04', 'F10', 'F16']
};