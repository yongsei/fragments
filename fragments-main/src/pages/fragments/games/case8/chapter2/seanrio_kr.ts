export const case8_chapter1_kr = {
  id: 'case8_chapter1',
  title: '챕터 1: 반복되는 그림자',
  story: '마을에 갇힌 플레이어들이 기이한 반복 현상들을 목격하며 저주의 존재를 어렴풋이 인지하고, 엘라라 할머니와의 첫 만남을 통해 알 수 없는 경고를 듣는 과정.',
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
    },
    {
      id: 'B04',
      name: '(챕터 1의 추가 인물)',
      role: '마을 주민',
      description: '마을의 반복되는 일상 속에서 발견되는 또 다른 인물. 그의 행동이나 표정에서 저주에 갇힌 마을 주민들의 고통이 엿보인다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B05',
      name: '(챕터 1의 추가 인물)',
      role: '마을 주민',
      description: '마을의 특정 장소에서 반복적으로 나타나는 인물. 그가 하는 행동은 저주의 패턴을 이해하는 데 중요한 단서가 될 수 있다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'B06',
      name: '(챕터 1의 마지막 인물)',
      role: '결론',
      description: '챕터 1의 인물 카드를 모두 모으면 드러나는, 마을 주민들의 집단적인 무의식이나 저주에 대한 반응을 상징하는 인물.',
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
    },
    {
      id: 'B16',
      name: '아이들의 노래',
      description: '마을 광장에서 아이들이 반복해서 부르는 기이한 노래.',
      details: '가사는 알 수 없지만, 묘한 불길함을 담고 있다.',
      location: 'B08'
    },
    {
      id: 'B17',
      name: '(챕터 1의 추가 증거)',
      description: '마을의 반복되는 현상 속에서 발견되는 또 다른 증거.',
      details: '이는 저주의 패턴을 이해하는 데 중요한 단서가 될 수 있다.',
      location: ''
    },
    {
      id: 'B18',
      name: '(챕터 1의 마지막 증거)',
      description: '챕터 1의 증거 카드를 모두 모으면 드러나는, 마을의 저주가 단순한 환상이 아님을 증명하는 결정적인 증거.',
      details: '',
      location: ''
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
    },
    {
      id: 'B10',
      name: '낡은 숙소',
      description: '하룻밤을 보낸 여관 같은 민가.',
      details: '밤새도록 알 수 없는 소리가 들려왔으며, 창밖의 안개는 여전히 짙다.'
    },
    {
      id: 'B11',
      name: '(챕터 1의 추가 장소)',
      description: '마을의 반복되는 현상이 목격되는 또 다른 장소.',
      details: '그곳의 풍경은 어제와 똑같으며, 시간의 흐름이 멈춘 듯하다.'
    },
    {
      id: 'B12',
      name: '(챕터 1의 마지막 장소)',
      description: '챕터 1의 장소 카드를 모두 모으면 드러나는, 마을의 시간 반복 현상이 가장 극명하게 드러나는 장소.',
      details: ''
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
      id: 'rule_B01_B03_B04',
      cards: ['B01', 'B03'],
      result: '마을의 반복되는 일상 속에서 또 다른 인물을 발견했습니다.',
      unlock: 'B04'
    },
    {
      id: 'rule_B02_B04_B05',
      cards: ['B02', 'B04'],
      result: '마을의 특정 장소에서 반복적으로 나타나는 인물에 대한 단서를 얻었습니다.',
      unlock: 'B05'
    },
    {
      id: 'rule_B03_B05_B06',
      cards: ['B03', 'B05'],
      result: '챕터 1의 마지막 인물에 대한 정보가 해금되었습니다.',
      unlock: 'B06'
    },
    {
      id: 'rule_B07_B08_B09',
      cards: ['B07', 'B08'],
      result: '텃밭에 대한 정보를 얻었습니다.',
      unlock: 'B09'
    },
    {
      id: 'rule_B07_B09_B10',
      cards: ['B07', 'B09'],
      result: '낡은 숙소에 대한 단서를 발견했습니다.',
      unlock: 'B10'
    },
    {
      id: 'rule_B08_B10_B11',
      cards: ['B08', 'B10'],
      result: '마을의 반복되는 현상이 목격되는 또 다른 장소를 알게 되었습니다.',
      unlock: 'B11'
    },
    {
      id: 'rule_B09_B11_B12',
      cards: ['B09', 'B11'],
      result: '챕터 1의 마지막 장소에 대한 정보가 해금되었습니다.',
      unlock: 'B12'
    },
    {
      id: 'rule_B13_B14_B15',
      cards: ['B13', 'B14'],
      result: '엘라라의 경고의 의미를 깨달았습니다.',
      unlock: 'B15'
    },
    {
      id: 'rule_B13_B15_B16',
      cards: ['B13', 'B15'],
      result: '아이들의 노래에 대한 단서를 얻었습니다.',
      unlock: 'B16'
    },
    {
      id: 'rule_B14_B16_B17',
      cards: ['B14', 'B16'],
      result: '마을의 반복되는 현상 속에서 또 다른 증거를 찾았습니다.',
      unlock: 'B17'
    },
    {
      id: 'rule_B15_B17_B18',
      cards: ['B15', 'B17'],
      result: '챕터 1의 마지막 증거가 해금되었습니다.',
      unlock: 'B18'
    }
  ],
  fragments: [],
  winCondition: 'B18',
  initialCards: ['B01', 'B02', 'B07', 'B08', 'B13', 'B14']
};
