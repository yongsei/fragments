export const case8_chapter2_2_kr = {
  id: 'case8_chapter2_2',
  title: '챕터 2-2: 그림자의 실체',
  story: '반복 현상을 확신하게 된 여행자가 더 깊은 단서들을 발견하며, 마을의 저주가 단순한 환상이 아님을 증명하는 결정적인 증거를 찾는 과정.',
  victim: '',
  suspects: [
    {
      id: 'B04',
      name: '반복 현상의 추가 인물',
      role: '마을 주민',
      description: '마을의 반복되는 일상 속에서 발견되는 또 다른 인물. 그의 행동이나 표정에서 저주에 갇힌 마을 주민들의 고통이 엿보인다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B05',
      name: '특정 장소의 인물',
      role: '마을 주민',
      description: '마을의 특정 장소에서 반복적으로 나타나는 인물. 그가 하는 행동은 저주의 패턴을 이해하는 데 중요한 단서가 될 수 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B06',
      name: '챕터의 마지막 인물',
      role: '결론',
      description: '챕터 2의 인물 카드를 모두 모으면 드러나는, 마을 주민들의 집단적인 무의식이나 저주에 대한 반응을 상징하는 인물.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'B16',
      name: '아이들의 노래',
      description: '마을 광장에서 아이들이 반복해서 부르는 기이한 노래.',
      details: '가사는 알 수 없지만, 묘한 불길함을 담고 있다.',
      location: 'B08'
    },
    {
      id: 'B17',
      name: '반복 현상의 추가 증거',
      description: '마을의 반복되는 현상 속에서 발견되는 또 다른 증거.',
      details: '이는 저주의 패턴을 이해하는 데 중요한 단서가 될 수 있다.',
      location: ''
    },
    {
      id: 'B18',
      name: '챕터의 마지막 증거',
      description: '챕터 2의 증거 카드를 모두 모으면 드러나는, 마을의 저주가 단순한 환상이 아님을 증명하는 결정적인 증거.',
      details: '',
      location: ''
    }
  ],
  locations: [
    {
      id: 'B10',
      name: '낡은 숙소',
      description: '하룻밤을 보낸 여관 같은 민가.',
      details: '밤새도록 알 수 없는 소리가 들려왔으며, 창밖의 안개는 여전히 짙다.'
    },
    {
      id: 'B11',
      name: '반복 현상의 추가 장소',
      description: '마을의 반복되는 현상이 목격되는 또 다른 장소.',
      details: '그곳의 풍경은 어제와 똑같으며, 시간의 흐름이 멈춘 듯하다.'
    },
    {
      id: 'B12',
      name: '챕터의 마지막 장소',
      description: '챕터 2의 장소 카드를 모두 모으면 드러나는, 마을의 시간 반복 현상이 가장 극명하게 드러나는 장소.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_B04_B05_B06',
      cards: ['B04', 'B05'],
      result: '챕터의 마지막 인물에 대한 정보가 해금되었습니다.',
      unlock: 'B06'
    },
    {
      id: 'rule_B10_B11_B12',
      cards: ['B10', 'B11'],
      result: '챕터의 마지막 장소에 대한 정보가 해금되었습니다.',
      unlock: 'B12'
    },
    {
      id: 'rule_B16_B17_B18',
      cards: ['B16', 'B17'],
      result: '챕터의 마지막 증거가 해금되었습니다.',
      unlock: 'B18'
    }
  ],
  fragments: [],
  winCondition: 'B18',
  initialCards: ['B04', 'B10', 'B16']
};