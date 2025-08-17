export const case8_chapter6_1_kr = {
  id: 'case8_chapter6_1',
  title: '챕터 6-1: 안개의 끝',
  story: '저주의 수호자와의 최종 대결 후, \'고리의 파편\'을 파괴하거나 \'반전 의식\'을 성공시켜 저주를 풀고, 안개가 걷히는 마을을 목격하는 과정.',
  victim: '',
  suspects: [
    {
      id: 'F01',
      name: '여행자와 알렉스',
      role: '여행자와 알렉스',
      description: '수호자가 사라진 후, 제단에서 서로를 부축하며 지상으로 향하는 여행자와 알렉스의 모습. 그들의 얼굴에는 깊은 피로와 안도감이 교차한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'F02',
      name: '마을 주민들',
      role: '마을 주민들',
      description: '저주가 풀린 후, 여전히 멍한 표정이지만 광기나 공포의 흔적은 사라진 마을 주민들. 그들의 눈빛은 공허하지만 평온하다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'F03',
      name: '엘라라 할머니',
      role: '엘라라 할머니',
      description: '엘라라 할머니가 제단에서 나온 여행자들을 말없이 바라보는 모습. 그녀의 눈빛에는 슬픔과 함께 알 수 없는 안도감이 스쳐 지나간다.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'F13',
      name: '흩어진 수호자',
      description: '\'고리의 파편\'에서 뿜어져 나온 빛에 의해 안개처럼 흩어져 사라진 저주의 수호자.',
      details: '',
      location: ''
    },
    {
      id: 'F14',
      name: '평범한 파편',
      description: '더 이상 검붉은 빛을 내지 않고, 평범한 돌멩이처럼 변해버린 \'고리의 파편\'.',
      details: '저주의 힘이 사라졌음을 보여준다.',
      location: 'F08'
    },
    {
      id: 'F15',
      name: '걷힌 안개',
      description: '마을을 뒤덮었던 짙은 안개가 완전히 걷히고, 희미하게나마 햇살이 비치는 현상.',
      details: '저주가 풀렸음을 시각적으로 보여준다.',
      location: 'F07'
    }
  ],
  locations: [
    {
      id: 'F07',
      name: '안개 걷힌 마을',
      description: '저주가 풀린 후, 짙은 안개가 걷히고 햇살이 비치는 에코우드 마을.',
      details: '그러나 여전히 낡고 황량한 모습이다.'
    },
    {
      id: 'F08',
      name: '교회 지하 제단',
      description: '수호자가 사라지고 \'고리의 파편\'이 평범한 돌멩이처럼 변해버린 곳.',
      details: ''
    },
    {
      id: 'F09',
      name: '마을을 벗어나는 길',
      description: '마을을 벗어나는 길.',
      details: '올 때와는 달리 맑은 햇살이 비추지만, 여행자의 마음속에는 여전히 안개가 드리워져 있다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_F01_F02_F03',
      cards: ['F01', 'F02'],
      result: '엘라라 할머니가 제단에서 나온 여행자들을 말없이 바라보는 모습에 대한 정보를 발견했습니다.',
      unlock: 'F03'
    },
    {
      id: 'rule_F07_F08_F09',
      cards: ['F07', 'F08'],
      result: '마을을 벗어나는 길에 대한 정보를 얻었습니다.',
      unlock: 'F09'
    },
    {
      id: 'rule_F13_F14_F15',
      cards: ['F13', 'F14'],
      result: '걷힌 안개에 대한 정보를 얻었습니다.',
      unlock: 'F15'
    }
  ],
  fragments: [],
  winCondition: 'F15',
  initialCards: ['F01', 'F07', 'F13']
};