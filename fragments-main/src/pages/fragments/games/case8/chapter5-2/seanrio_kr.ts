export const case8_chapter5_2_kr = {
  id: 'case8_chapter5_2',
  title: '챕터 5-2: 저주의 종료',
  story: '저주의 수호자와의 최종 대결에서 예상치 못한 난관과 희생에 직면하며, 마을의 저주를 풀기 위한 마지막 시도를 완료하는 클라이맥스.',
  victim: '',
  suspects: [
    {
      id: 'E04',
      name: '엘라라의 예언',
      role: '엘라라 할머니',
      description: '엘라라 할머니의 경고가 귓가에 맴도는 모습. 그녀의 예언이 현실이 되는 순간을 보여준다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E05',
      name: '여행자의 저항',
      role: '여행자',
      description: '수호자의 공격에 맞서 필사적으로 버티는 여행자의 모습. 육체적, 정신적 한계에 다다른다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E06',
      name: '희생자',
      role: '희생자',
      description: '챕터 5의 인물 카드를 모두 모으면 드러나는, 저주를 풀기 위한 마지막 시도에서 희생될 수 있는 존재에 대한 암시.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'E16',
      name: '반복되는 고통',
      description: '같은 순간을 몇 번이고 반복하며 수호자의 공격을 받아내는 과정에서 겪는 육체적, 정신적 고통.',
      details: '',
      location: ''
    },
    {
      id: 'E17',
      name: '검은 연기',
      description: '\'고리의 파편\'에서 뿜어져 나오는 검은 연기.',
      details: '수호자의 형체를 만들고, 저주의 힘을 증폭시킨다.',
      location: 'E07'
    },
    {
      id: 'E18',
      name: '최종 결과',
      description: '챕터 5의 증거 카드를 모두 모으면 드러나는, 저주를 풀기 위한 마지막 시도의 성공 여부를 결정할 결정적인 단서.',
      details: '',
      location: ''
    }
  ],
  locations: [
    {
      id: 'E10',
      name: '파괴된 제단',
      description: '수호자의 공격으로 인해 파괴되거나 변형되는 제단의 일부.',
      details: '전투의 격렬함을 보여준다.'
    },
    {
      id: 'E11',
      name: '알렉스의 집중 지점',
      description: '저주를 풀기 위한 \'반전 의식\'이 진행되는 동안, 알렉스가 집중하는 특정 지점.',
      details: ''
    },
    {
      id: 'E12',
      name: '최종 공간',
      description: '챕터 5의 장소 카드를 모두 모으면 드러나는, 저주가 풀리거나 혹은 더욱 심화될 순간의 공간적 배경.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_E04_E05_E06',
      cards: ['E04', 'E05'],
      result: '저주를 풀기 위한 마지막 시도에서 희생될 수 있는 존재에 대한 정보가 해금되었습니다.',
      unlock: 'E06'
    },
    {
      id: 'rule_E10_E11_E12',
      cards: ['E10', 'E11'],
      result: '저주가 풀리거나 혹은 더욱 심화될 순간의 공간적 배경에 대한 정보가 해금되었습니다.',
      unlock: 'E12'
    },
    {
      id: 'rule_E16_E17_E18',
      cards: ['E16', 'E17'],
      result: '저주를 풀기 위한 마지막 시도의 성공 여부를 결정할 결정적인 단서가 해금되었습니다.',
      unlock: 'E18'
    }
  ],
  fragments: [],
  winCondition: 'E18',
  initialCards: ['E04', 'E10', 'E16']
};