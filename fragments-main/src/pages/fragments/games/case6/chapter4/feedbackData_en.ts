import { CaseFeedbackData, CombinationFeedback } from "../types";

export const chapter4FeedbackData: CaseFeedbackData = {
  caseId: 'case6_chapter4',
  correctSuspect: 'D-P01', // 닥터 아서 랭던 (전체 시나리오의 최종 범인)
  keyEvidence: [
    'D-E01', // 랭던의 과거 의료 과실
    'D-E03', // 랭던의 수법 (희귀 독극물)
    'D-E05', // 찢겨진 페이지 내용 (공개)
  ],
  combinationFeedback: [
    // 'close' 조합
    {
      cards: ['CH4_EV01', 'CH4_CH01'],
      proximity: 'close',
      messages: [
        'The Sunken Cathedral and its Guardian hold the ultimate truth. What will they reveal?',
        'The Guardian\'s message is critical. It will expose the true nature of the plague and Kael\'s ambition.',
        '💡 The Crystal\'s Horrifying Warning (CH4_EV02) will show the apocalyptic consequences if Kael is not stopped.'
      ]
    },
    {
      cards: ['CH4_EV02', 'CH4_CH02'],
      proximity: 'close',
      messages: [
        'The horrifying warning and Kael\'s last disciple. What is Kael\'s final plan?',
        'Kael\'s last disciple is fanatical. They hold the key to his exact whereabouts and final intentions.',
        '💡 Kael\'s Triumphant Final Notes (CH4_EV03) will detail his ultimate ritual.'
      ]
    },
    {
      cards: ['CH4_EV05', 'CH4_LC04'],
      proximity: 'close',
      messages: [
        'The confrontation with Kael in the Crystal\'s Heart. This is the final battle.',
        'This combination leads to Kael\'s ultimate downfall. His ambition will consume him.',
        '💡 Kael\'s Final, Horrific Demise (CH4_CH05) is the direct result of this confrontation.'
      ]
    },
    {
      cards: ['CH4_CH05', 'CH4_EV07'],
      proximity: 'close',
      messages: [
        'Kael\'s monstrous form against the city\'s collective will. Can he be stopped?',
        'The city\'s combined strength is overwhelming. This is the final blow to Kael.',
        '💡 This combination leads to Kael\'s Final, Horrific Demise (CH4_EV08), signifying the end of the immediate threat.'
      ]
    },
    // 'partial' 조합
    {
      cards: ['CH4_CH01', 'CH4_EV02'],
      proximity: 'partial',
      messages: [
        'The Guardian has revealed the terrifying future. What is the solution?',
        '📖 The Guardian will now explain the ancient ritual needed to restore the crystal.',
        '💡 The Life Restoration Ritual (CH4_EV04) is the only way to save the city.'
      ]
    },
    {
      cards: ['CH4_EV04', 'CH4_CH04'],
      proximity: 'partial',
      messages: [
        'The restoration ritual and Elara\'s willingness to sacrifice. Is this the only way?',
        '💭 Elara is prepared to make the ultimate sacrifice. This is a path of noble heroism.',
        '💡 This presents you with The Unbearable Choice (CH4_EV06) that will determine the city\'s fate.'
      ]
    },
    {
      cards: ['CH4_EV06', 'CH4_CH03'],
      proximity: 'partial',
      messages: [
        'The unbearable choice. Can Master Theron offer an alternative?',
        '💭 Master Theron represents the city\'s collective will. He might have a solution without sacrifice.',
        '💡 This reveals The City\'s Collective Will (CH4_EV07) as an alternative path to salvation.'
      ]
    },
    {
      cards: ['CH4_EV07', 'CH4_LC03'],
      proximity: 'partial',
      messages: [
        'Rallying the city\'s collective will in the Central Plaza. Where does this energy go?',
        '🏠 The collective energy is channeled towards the crystal. This is the final step before restoration.',
        '💡 This leads to The Crystal\'s Heart (CH4_LC04), where the city\'s fate will be sealed.'
      ]
    },
    // 'none' 조합
    {
      cards: ['CH4_LC05', 'CH4_LC06'],
      proximity: 'none',
      messages: [
        'The Restored Grand Library and the Reborn Aqueducts. These are outcomes, not direct clues.',
        '🏠 These represent the city\'s recovery. They are the result of your actions, not a combination for investigation.',
        '🔍 Focus on the immediate threats and solutions, not the future state of the city.'
      ]
    },
    {
      cards: ['CH4_CH03', 'CH4_CH05'],
      proximity: 'none',
      messages: [
        'Master Theron and Kael\'s monstrous form. Do they interact?',
        '💭 Their ideologies are completely opposed. There is no common ground for combination.',
        '🔍 Focus on confronting Kael directly or rallying the city against him.'
      ]
    },
    {
      cards: ['CH4_EV00', 'CH4_EV00'], // Placeholder for a truly unrelated combination
      proximity: 'none',
      messages: [
        'This combination yields no new insights. It seems unrelated to the current investigation.',
        '🔍 Re-evaluate your clues. Some combinations may not lead to any meaningful discovery.',
        '💭 Consider focusing on the core elements of the mystery: the crystal, Kael, and the plague.'
      ]
    },
  ],
  urgentHints: [
    '🚨 긴급 경고: 수정의 에너지가 급격히 고갈되고 있습니다. 도시의 파멸이 임박했습니다!',
    '🚨 최종 목격: 카엘이 자신의 최종 의식을 시작했습니다. 그를 막을 시간이 얼마 없습니다!',
    '🚨 수호자의 절규: 수정의 수호자가 마지막 힘을 다해 도움을 요청하고 있습니다. 그의 경고를 무시하지 마세요!',
    '🚨 도시의 불안: 시민들이 알 수 없는 불안감에 휩싸여 있습니다. 집단적인 공포가 도시를 마비시키고 있습니다.'
  ],
  contextualHints: [
    '💡 추리 팁: 가장 어려운 선택이 때로는 가장 올바른 길일 수 있습니다. 희생의 의미를 되새기세요.',
    '💡 수사 관점: 개인의 희생과 집단의 의지 중 어떤 것이 더 큰 힘을 발휘할까요? 두 가지 가능성을 모두 고려하세요.',
    '💡 범죄 심리: 범인의 마지막 행동은 그의 가장 깊은 욕망과 두려움을 드러냅니다. 그의 광기를 이해하세요.',
    '💡 물증 분석: 수정의 상태는 도시의 운명을 반영합니다. 그 변화를 주시하세요.',
    '💡 타임라인: 모든 것이 절정에 달했습니다. 지금 내리는 결정이 모든 것을 바꿀 것입니다.'
  ]
};