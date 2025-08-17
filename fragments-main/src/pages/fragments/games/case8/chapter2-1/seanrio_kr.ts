export const case8_chapter2_1_kr = {
  id: 'case8_chapter2_1',
  title: '챕터 2-1: 반복의 시작',
  story: '마을에 갇힌 여행자가 기이한 반복 현상들을 처음 목격하며, 시간의 흐름이 정상적이지 않다는 것을 깨닫기 시작하는 과정.',
  victim: '',
  suspects: [
    {
      id: 'B01',
      name: '엘라라 할머니',
      role: '마을 노파',
      description: '마을 어귀 텃밭에서 만난 노파. 깊은 주름과 슬픔이 가득한 눈빛으로, 안개와 시간에 대한 알 수 없는 경고를 던진다. 그녀의 말은 혼란스럽지만 저주의 존재를 암시한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B02',
      name: '반복되는 노인',
      role: '마을 주민',
      description: '어제 분명히 지나쳤던 낡은 우체통 옆에서 똑같은 자세로 서성이는 노인. 우리가 다가가자 멍하니 응시하며, 마을의 반복되는 현상을 보여주는 첫 번째 인물이다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B03',
      name: '노래하는 아이들',
      role: '마을 아이들',
      description: '마을 광장에서 어제와 똑같은 노래를 부르며 똑같은 놀이를 반복하는 아이들. 그들의 천진난만한 모습은 섬뜩한 반복 현상과 대비되어 더욱 불길하다.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'B13',
      name: '섬뜩한 반복',
      description: '어제와 똑같은 상황, 똑같은 대화, 똑같은 행동이 반복되는 현상.',
      details: '단순한 우연이라고 치부하기에는 너무나도 섬뜩하다.',
      location: ''
    },
    {
      id: 'B14',
      name: '시간의 정체',
      description: '마을에 들어선 이후 시간이 제대로 흐르지 않는 듯한 느낌.',
      details: '시계는 멈춰 있고, 해와 달의 위치도 변하지 않는 듯하다.',
      location: ''
    },
    {
      id: 'B15',
      name: '엘라라의 경고',
      description: '엘라라 할머니가 던진 "안개는 모든 것을 삼키고, 시간마저 묶어두지"라는 알 수 없는 말.',
      details: '저주의 존재를 암시하는 첫 번째 직접적인 경고이다.',
      location: 'B01'
    }
  ],
  locations: [
    {
      id: 'B07',
      name: '낡은 우체통',
      description: '반복되는 노인이 서성이는 장소.',
      details: '녹슬고 낡은 우체통은 오랜 시간 동안 아무도 편지를 보내지 않았음을 암시한다.'
    },
    {
      id: 'B08',
      name: '마을 광장',
      description: '아이들이 똑같은 노래를 부르며 놀이를 반복하는 곳.',
      details: '마을의 중심이지만, 활기보다는 기이한 정적이 감돈다.'
    },
    {
      id: 'B09',
      name: '텃밭',
      description: '엘라라 할머니가 허리를 굽히고 있던 작은 텃밭.',
      details: '흙은 메말라 있고, 식물들은 생기를 잃은 듯하다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_B01_B02_B03',
      cards: ['B01', 'B02'],
      result: '노래하는 아이들에 대한 새로운 정보를 발견했습니다.',
      unlock: 'B03'
    },
    {
      id: 'rule_B07_B08_B09',
      cards: ['B07', 'B08'],
      result: '텃밭에 대한 정보를 얻었습니다.',
      unlock: 'B09'
    },
    {
      id: 'rule_B13_B14_B15',
      cards: ['B13', 'B14'],
      result: '엘라라의 경고의 의미를 깨달았습니다.',
      unlock: 'B15'
    }
  ],
  fragments: [],
  winCondition: 'B15',
  initialCards: ['B01', 'B07', 'B13']
};