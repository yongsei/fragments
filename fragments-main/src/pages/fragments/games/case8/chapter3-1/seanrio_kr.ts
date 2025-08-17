export const case8_chapter3_1_kr = {
  id: 'case8_chapter3_1',
  title: '챕터 3-1: 새로운 동반자',
  story: '엘라라 할머니의 경고 이후 마을의 비밀을 본격적으로 탐색하며, 저널리스트 알렉스와 만나 협력하기 시작하는 과정.',
  victim: '',
  suspects: [
    {
      id: 'C01',
      name: '알렉스',
      role: '저널리스트',
      description: '이 지역의 실종 사건을 조사하던 젊은 저널리스트. 처음에는 회의적이었으나, 마을의 비정상적인 상황을 점차 받아들이며 여행자와 협력한다. 외부 지식과 논리적 사고를 제공한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C02',
      name: '릴리',
      role: '마을 아이',
      description: '마을의 유일한 아이로, 말을 하지 못하고 오직 그림으로만 의사소통한다. 그녀의 그림은 과거의 끔찍한 사건들을 묘사하며 저주의 중요한 단서가 된다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C03',
      name: '식료품점 인물',
      role: '마을 주민',
      description: '마을의 식료품점에서 알렉스와 마주친 인물. 그의 표정은 알렉스와 비슷한 당혹감과 피로를 담고 있으며, 마을의 비밀을 어렴풋이 알고 있는 듯하다.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'C13',
      name: '알렉스의 수첩',
      description: '알렉스가 항상 지니고 다니는 낡은 수첩.',
      details: '실종 사건에 대한 기록과 마을의 기이한 현상에 대한 그의 관찰이 담겨 있다.',
      location: 'C01'
    },
    {
      id: 'C14',
      name: '릴리의 그림',
      description: '릴리가 칠판과 바닥에 그린 기괴한 그림들.',
      details: '횃불을 든 사람들이 모여 있는 모습 등 \'잊혀진 의식\'을 묘사하는 듯하다.',
      location: 'C02'
    },
    {
      id: 'C15',
      name: '데자뷰 현상',
      description: '알렉스도 겪었던, 어제와 똑같은 상황이 반복되는 듯한 느낌.',
      details: '이는 마을의 시간 왜곡 현상을 증명하는 중요한 증거이다.',
      location: ''
    }
  ],
  locations: [
    {
      id: 'C07',
      name: '식료품점',
      description: '마을의 유일한 식료품점.',
      details: '알렉스와 처음 마주친 장소이며, 낡고 먼지가 쌓여 있어 물품이 거의 없다.'
    },
    {
      id: 'C08',
      name: '낡은 학교 건물',
      description: '마을 외곽에 위치한 폐허가 된 학교.',
      details: '릴리가 웅크리고 앉아 있었으며, 칠판 가득 기괴한 그림들이 그려져 있다.'
    },
    {
      id: 'C09',
      name: '마을의 숨겨진 장소',
      description: '마을의 숨겨진 장소 중 하나.',
      details: '이곳에서 과거의 의식과 관련된 유물이나 흔적을 발견할 수 있다.'
    }
  ],
  connectionRules: [
    {
      id: 'rule_C01_C02_C03',
      cards: ['C01', 'C02'],
      result: '마을의 식료품점에서 알렉스와 마주친 인물에 대한 정보를 발견했습니다.',
      unlock: 'C03'
    },
    {
      id: 'rule_C07_C08_C09',
      cards: ['C07', 'C08'],
      result: '마을의 숨겨진 장소 중 하나에 대한 정보를 얻었습니다.',
      unlock: 'C09'
    },
    {
      id: 'rule_C13_C14_C15',
      cards: ['C13', 'C14'],
      result: '데자뷰 현상의 의미를 깨달았습니다.',
      unlock: 'C15'
    }
  ],
  fragments: [],
  winCondition: 'C15',
  initialCards: ['C01', 'C07', 'C13']
};