export const case8_chapter1_2_kr = {
  id: 'case8_chapter1_2',
  title: '챕터 1-2: 첫 번째 경고',
  story: '마을에 머물게 된 여행자가 더 깊은 불길한 징조들을 발견하고, 마을의 저주에 대한 첫 번째 직접적인 단서를 얻는 과정.',
  victim: '',
  suspects: [
    {
      id: 'A04',
      name: '길 잃은 운전자',
      role: '운전자',
      description: '안개 때문에 길가에 차를 세우고 몇 시간을 갇혀 있던 또 다른 여행자. 마을의 불길한 기운을 먼저 감지했을 수도 있으며, 그의 얼굴에는 깊은 절망감이 드리워져 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A05',
      name: '그림자',
      role: '미지의 존재',
      description: '안개 속에서 희미하게 목격되는, 형체를 알 수 없는 존재. 마을의 저주와 관련이 있을 수 있으며, 여행자의 시야에서 빠르게 사라진다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'A06',
      name: '서막의 마지막 인물',
      role: '결론',
      description: '서막에서 인물 카드를 모두 모으면 드러나는, 마을에 갇힌 또 다른 존재의 희미한 흔적. 그 존재는 마을의 저주에 대한 첫 번째 경고를 던진다.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'A16',
      name: '낡은 나무 간판',
      description: '마을 입구에 서 있는, 세월의 흔적이 역력한 낡은 나무 간판.',
      details: '글씨는 희미하지만, \'Echowood\'라는 이름은 분명히 읽을 수 있다.',
      location: 'A08'
    },
    {
      id: 'A17',
      name: '불길한 기운',
      description: '마을 전체를 감싸고 있는, 설명할 수 없는 불길하고 음산한 분위기.',
      details: '이 기운은 단순히 안개 때문이 아님을 직감하게 한다.',
      location: 'A07'
    },
    {
      id: 'A18',
      name: '서막의 마지막 증거',
      description: '서막에서 모든 카드를 모으면 드러나는, 마을의 저주에 대한 첫 번째 직접적인 단서.',
      details: '이는 여행자가 다음 챕터로 나아갈 동기를 부여한다.',
      location: ''
    }
  ],
  locations: [
    {
      id: 'A10',
      name: '고요한 도로',
      description: '안개에 갇혀 모든 소리가 사라진, 마을로 이어지는 한적한 국도.',
      details: '차량의 흔적은 거의 없으며, 마치 세상의 끝에 다다른 듯한 고립감이 느껴진다.'
    },
    {
      id: 'A11',
      name: '희미한 불빛',
      description: '안개 저편에서 깜빡이며 마을의 존재를 알린 유일한 희망의 불빛.',
      details: '그러나 가까이 갈수록 그 빛은 더욱 희미해지고, 불길한 그림자를 드리운다.'
    },
    {
      id: 'A12',
      name: '서막의 마지막 장소',
      description: '서막에서 장소 카드를 모두 모으면 드러나는, 마을의 숨겨진 불길한 장소에 대한 암시.',
      details: '그곳은 저주의 시작과 관련이 있을지도 모른다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_A04_A05_A06',
      cards: ['A04', 'A05'],
      result: '서막의 마지막 인물에 대한 정보가 해금되었습니다.',
      unlock: 'A06'
    },
    {
      id: 'rule_A10_A11_A12',
      cards: ['A10', 'A11'],
      result: '서막의 마지막 장소에 대한 정보가 해금되었습니다.',
      unlock: 'A12'
    },
    {
      id: 'rule_A16_A17_A18',
      cards: ['A16', 'A17'],
      result: '서막의 마지막 증거가 해금되었습니다.',
      unlock: 'A18'
    }
  ],
  fragments: [],
  winCondition: 'A18',
  initialCards: ['A04', 'A10', 'A16']
};