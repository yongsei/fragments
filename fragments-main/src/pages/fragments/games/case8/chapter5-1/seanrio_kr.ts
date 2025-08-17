export const case8_chapter5_1_kr = {
  id: 'case8_chapter5_1',
  title: '챕터 5-1: 최후의 대결 시작',
  story: '교회 지하 제단에서 \'고리의 파편\'을 발견하고, 저주의 수호자와 직접 대면하며 반전 의식을 시작하는 과정.',
  victim: '',
  suspects: [
    {
      id: 'E01',
      name: '저주의 수호자',
      role: '수호자',
      description: '\'고리의 파편\'에서 피어오른 검은 연기가 형체를 갖춘 존재. 의식을 통해 소환되었으나 통제되지 못했던, 시간을 묶어둔 저주의 핵심적인 존재이다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E02',
      name: '알렉스의 의식',
      role: '알렉스',
      description: '알렉스가 필사적으로 반전 의식의 주문을 외우는 모습. 그의 집중력과 절박함이 느껴진다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'E03',
      name: '마을 주민 환영',
      role: '마을 주민 환영',
      description: '반복되는 시간 속에서 고통받는 마을 주민들의 환영. 그들은 수호자의 힘을 증폭시키거나, 여행자의 정신을 혼란시킨다.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'E13',
      name: '고리의 파편',
      description: '검붉은 빛을 내는 기이한 수정 조각.',
      details: '마을의 시간을 묶어두는 핵심이며, 수호자의 힘의 원천이다.',
      location: 'E07'
    },
    {
      id: 'E14',
      name: '반전 의식 주문',
      description: '알렉스가 필사적으로 외우는, 저주를 역으로 되돌리는 데 필요한 고대의 주문.',
      details: '그 힘은 강력하지만 위험하다.',
      location: 'E02'
    },
    {
      id: 'E15',
      name: '수호자의 공격',
      description: '물리적인 힘뿐만 아니라 정신적인 공포를 유발하는 수호자의 공격.',
      details: '여행자의 가장 깊은 두려움을 형상화한다.',
      location: 'E07'
    }
  ],
  locations: [
    {
      id: 'E07',
      name: '교회 지하 제단',
      description: '저주의 수호자와 최종 대면이 이루어지는 장소.',
      details: '검붉은 빛을 내는 \'고리의 파편\'이 놓여 있으며, 의식의 흔적이 가득하다.'
    },
    {
      id: 'E08',
      name: '제단 벽화',
      description: '제단 주변 벽면에 그려진, 의식의 과정이 묘사된 벽화.',
      details: '이제 그 그림들이 꿈틀거리는 듯한 착각을 불러일으킨다.'
    },
    {
      id: 'E09',
      name: '시간 왜곡 공간',
      description: '마을의 반복되는 현상들이 제단 안까지 영향을 미치기 시작하는 공간.',
      details: '시간의 왜곡이 더욱 심해진다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_E01_E02_E03',
      cards: ['E01', 'E02'],
      result: '반복되는 시간 속에서 고통받는 마을 주민들의 환영에 대한 정보를 발견했습니다.',
      unlock: 'E03'
    },
    {
      id: 'rule_E07_E08_E09',
      cards: ['E07', 'E08'],
      result: '마을의 반복되는 현상들이 제단 안까지 영향을 미치기 시작하는 공간에 대한 정보를 얻었습니다.',
      unlock: 'E09'
    },
    {
      id: 'rule_E13_E14_E15',
      cards: ['E13', 'E14'],
      result: '수호자의 공격에 대한 정보를 얻었습니다.',
      unlock: 'E15'
    }
  ],
  fragments: [],
  winCondition: 'E15',
  initialCards: ['E01', 'E07', 'E13']
};