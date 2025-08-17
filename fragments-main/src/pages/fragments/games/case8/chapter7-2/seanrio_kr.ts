export const case8_chapter7_2_kr = {
  id: 'case8_chapter7_2',
  title: '종막: 새로운 안개',
  story: '저주가 풀렸음에도 불구하고, 새로운 종류의 \'안개\' 속에서 헤매게 될지도 모른다는 여운을 남기는 최종 결말.',
  victim: '',
  suspects: [
    {
      id: 'G04',
      name: '엘라라의 경고',
      role: '여행자',
      description: '스산한 바람 소리에서도 엘라라 할머니의 경고를 듣는 여행자. 마을의 기억이 그를 계속해서 괴롭힌다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'G05',
      name: '꿈속의 릴리',
      role: '여행자',
      description: '꿈속에서 반복되는 릴리의 그림을 보는 여행자. 마을의 악몽이 그의 잠재의식 속에도 깊이 박혀 있음을 보여준다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'G06',
      name: '변화한 내면',
      role: '여행자',
      description: '종막의 인물 카드를 모두 모으면 드러나는, 에코우드 마을의 경험으로 인해 영원히 변해버린 여행자의 내면.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'G16',
      name: '엘라라의 경고',
      description: '스산한 바람 소리에서 들려오는 엘라라 할머니의 경고.',
      details: '저주의 여운이 여행자를 계속해서 따라다닌다.',
      location: 'G04'
    },
    {
      id: 'G17',
      name: '릴리의 그림',
      description: '꿈속에서 반복되는 릴리의 그림.',
      details: '마을의 악몽이 여행자의 잠재의식 속에도 깊이 박혀 있음을 보여준다.',
      location: 'G05'
    },
    {
      id: 'G18',
      name: '지울 수 없는 흔적',
      description: '종막의 증거 카드를 모두 모으면 드러나는, 에코우드 마을의 경험이 여행자의 삶에 남긴 지울 수 없는 흔적.',
      details: '',
      location: ''
    }
  ],
  locations: [
    {
      id: 'G10',
      name: '지도에 없는 마을',
      description: '지도에 없는 곳으로 남은 에코우드 마을.',
      details: '그곳의 현재 모습은 알 수 없지만, 여행자의 기억 속에는 선명하게 남아있다.'
    },
    {
      id: 'G11',
      name: '일상 속 그림자',
      description: '여행자가 일상생활 속에서 에코우드 마을의 그림자를 보는 장소.',
      details: '평범한 공간이 불길하게 느껴진다.'
    },
    {
      id: 'G12',
      name: '새로운 안개',
      description: '종막의 장소 카드를 모두 모으면 드러나는, 여행자가 영원히 헤매게 될 새로운 종류의 \'안개\'를 상징하는 공간.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_G04_G05_G06',
      cards: ['G04', 'G05'],
      result: '에코우드 마을의 경험으로 인해 영원히 변해버린 여행자의 내면에 대한 정보가 해금되었습니다.',
      unlock: 'G06'
    },
    {
      id: 'rule_G10_G11_G12',
      cards: ['G10', 'G11'],
      result: '여행자가 영원히 헤매게 될 새로운 종류의 \'안개\'를 상징하는 공간에 대한 정보가 해금되었습니다.',
      unlock: 'G12'
    },
    {
      id: 'rule_G16_G17_G18',
      cards: ['G16', 'G17'],
      result: '에코우드 마을의 경험이 여행자의 삶에 남긴 지울 수 없는 흔적이 해금되었습니다.',
      unlock: 'G18'
    }
  ],
  fragments: [],
  winCondition: 'G18',
  initialCards: ['G04', 'G10', 'G16']
};