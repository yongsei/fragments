export const case8_chapter3_2_kr = {
  id: 'case8_chapter3_2',
  title: '챕터 3-2: 잊혀진 의식의 단서',
  story: '릴리의 기이한 그림을 통해 과거의 \'잊혀진 의식\'에 대한 중요한 단서를 발견하고, 저주의 기원에 대한 구체적인 정보를 얻는 과정.',
  victim: '',
  suspects: [
    {
      id: 'C04',
      name: '과거 의식 관련 인물',
      role: '과거 의식 관련 인물',
      description: '낡은 학교 건물에서 발견되는, 과거의 의식과 관련된 인물에 대한 흔적. 그의 존재는 저주의 기원을 밝히는 데 중요한 역할을 한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C05',
      name: '의식 주도자',
      role: '의식 주도자',
      description: '릴리의 그림 속에서 반복적으로 등장하는, 의식을 주도했던 인물. 그의 얼굴은 가려져 있지만, 그가 저주의 시작과 깊이 연관되어 있음을 암시한다.',
      alibi: '',
      motive: ''
    },
    {
      id: 'C06',
      name: '핵심 인물',
      role: '핵심 인물',
      description: '\'잊혀진 의식\'의 핵심 인물. 그의 정체는 저주의 본질을 이해하는 데 결정적인 단서가 된다.',
      alibi: '',
      motive: ''
    }
  ],
  evidence: [
    {
      id: 'C16',
      name: '실종 사건 기록',
      description: '알렉스가 조사하던 외부인의 실종 사건 기록.',
      details: '이 사건들이 마을의 저주와 연관되어 있음을 시사한다.',
      location: 'C01'
    },
    {
      id: 'C17',
      name: '과거 의식의 상징',
      description: '마을 곳곳에서 발견되는, 과거의 의식과 관련된 상징이나 문양.',
      details: '이는 저주의 기원을 밝히는 데 중요한 단서가 된다.',
      location: ''
    },
    {
      id: 'C18',
      name: '잊혀진 의식의 본질',
      description: '\'잊혀진 의식\'의 본질과 그 결과로 발생한 저주에 대한 결정적인 증거.',
      details: '',
      location: ''
    }
  ],
  locations: [
    {
      id: 'C10',
      name: '릴리의 그림 속 장소',
      description: '릴리의 그림에 자주 등장하는 장소.',
      details: '그곳은 저주의 시작과 깊이 연관된, 마을의 금지된 구역일 수 있다.'
    },
    {
      id: 'C11',
      name: '실종 사건 관련 장소',
      description: '알렉스가 조사하던 실종 사건과 관련된 장소.',
      details: '마을 외부의 사건이 저주와 연결되어 있음을 암시한다.'
    },
    {
      id: 'C12',
      name: '의식의 핵심 장소',
      description: '\'잊혀진 의식\'이 거행되었던 핵심 장소에 대한 암시.',
      details: ''
    }
  ],
  connectionRules: [
    {
      id: 'rule_C04_C05_C06',
      cards: ['C04', 'C05'],
      result: '\'잊혀진 의식\'의 핵심 인물에 대한 정보가 해금되었습니다.',
      unlock: 'C06'
    },
    {
      id: 'rule_C10_C11_C12',
      cards: ['C10', 'C11'],
      result: '\'잊혀진 의식\'이 거행되었던 핵심 장소에 대한 정보가 해금되었습니다.',
      unlock: 'C12'
    },
    {
      id: 'rule_C16_C17_C18',
      cards: ['C16', 'C17'],
      result: '\'잊혀진 의식\'의 본질과 그 결과로 발생한 저주에 대한 결정적인 증거가 해금되었습니다.',
      unlock: 'C18'
    }
  ],
  fragments: [],
  winCondition: 'C18',
  initialCards: ['C04', 'C10', 'C16']
};