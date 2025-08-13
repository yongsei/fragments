
// Mystery Prototype dedicated case-specific feedback system
// Provides customized feedback and hints for each case

export interface CombinationFeedback {
  cards: string[];  // Array format same as scenario
  proximity: 'close' | 'partial' | 'none';
  messages: string[];  // Messages by hint level (0,1,2 stages)
}

export interface CaseFeedbackData {
  caseId: string;
  correctSuspect: string;
  keyEvidence: string[];
  combinationFeedback: CombinationFeedback[];  // Changed to array-based
  urgentHints: string[];
  contextualHints: string[];
}


export const feedbackCase6Ch3En: CaseFeedbackData = {
  caseId: 'case6_chapter3',
  correctSuspect: 'D-P01', // 닥터 아서 랭던 (전체 시나리오의 최종 범인)
  keyEvidence: [
    'D-E01', // 랭던의 과거 의료 과실
    'D-E03', // 랭던의 수법 (희귀 독극물)
    'D-E05', // 찢겨진 페이지 내용 (공개)
  ],
  combinationFeedback: [
    // 'close' 조합
    {
      cards: ['CH3_EV01', 'CH3_CH01'],
      proximity: 'close',
      messages: [
        'Elara\'s arrest seems too convenient. Captain Valerius looks troubled.',
        'Captain Valerius\'s doubts are growing. He needs scientific proof to challenge the official narrative.',
        '💡 A thorough Forensic Alchemical Analysis Report (CH3_EV02) is needed to clear Elara\'s name.'
      ]
    },
    {
      cards: ['CH3_EV03', 'CH3_CH03'],
      proximity: 'close',
      messages: [
        'The smuggler\'s testimony points to a large-scale operation. Who is funding it?',
        'The disgruntled accountant has intimate knowledge of illicit financial networks. He can expose Kael\'s patron.',
        '💡 Kael\'s Offshore Financial Records (CH3_EV04) will reveal the true extent of his illicit enterprise.'
      ]
    },
    {
      cards: ['CH3_EV07', 'CH3_CH05'],
      proximity: 'close',
      messages: [
        'Captain Valerius\'s secret dossier confirms his suspicions. What about the latest victim?',
        'The desperate family member can provide crucial details about the third victim\'s connection to Kael.',
        '💡 The Third Victim\'s Personal Locket (CH3_EV08) will directly link Kael to the latest death.'
      ]
    },
    {
      cards: ['CH3_EV08', 'CH3_CH01'],
      proximity: 'close',
      messages: [
        'The locket is undeniable proof. Captain Valerius needs to confront Kael.',
        'This evidence solidifies Kael\'s guilt. A direct confrontation is imminent.',
        '💡 Head to the City Watch Headquarters\' Interrogation Room (CH3_LC05) for a climactic confrontation.'
      ]
    },
    // 'partial' 조합
    {
      cards: ['CH3_CH01', 'CH3_LC01'],
      proximity: 'partial',
      messages: [
        'Captain Valerius is operating outside official channels. Who is he meeting?',
        '💭 He\'s desperate for answers. A shady informant (CH3_CH02) might be his source in the underworld.',
        '🔍 Follow Captain Valerius\'s movements to uncover his clandestine contacts.'
      ]
    },
    {
      cards: ['CH3_EV02', 'CH3_CH02'],
      proximity: 'partial',
      messages: [
        'The forensic report contradicts the official story. The informant might know why.',
        '📖 The informant\'s tips, combined with the scientific evidence, point to a hidden network.',
        '💡 The Smuggler\'s Den (CH3_LC02) is likely where illicit goods, like the algae, are brought into the city.'
      ]
    },
    {
      cards: ['CH3_EV05', 'CH3_CH04'],
      proximity: 'partial',
      messages: [
        'The second victim\'s desperate plea. What does the Prison Warden know about Elara\'s case?',
        '💭 The Warden holds the key to Elara\'s fate. He might have intercepted communications.',
        '💡 Elara\'s Coded Message from Prison (CH3_EV06) might reveal her desperate plea for help.'
      ]
    },
    {
      cards: ['CH3_EV06', 'CH3_CH01'],
      proximity: 'partial',
      messages: [
        'Elara\'s coded message is a desperate cry for help. Can Captain Valerius decipher it?',
        '📖 Captain Valerius\'s secret dossier (CH3_EV07) contains his personal notes and growing doubts about Elara\'s guilt.',
        '🔍 This combination reveals Valerius\'s true stance and his attempts to uncover the conspiracy.'
      ]
    },
    // 'none' 조합
    {
      cards: ['CH3_LC03', 'CH3_LC04'],
      proximity: 'none',
      messages: [
        'The Abandoned Bank Vault and the City Archives. Are they connected?',
        '🏠 These are both places of records, but their direct link to the current crime is unclear.',
        '🔍 Focus on the specific clues found within each location rather than combining the locations themselves.'
      ]
    },
    {
      cards: ['CH3_CH02', 'CH3_CH04'],
      proximity: 'none',
      messages: [
        'A shady informant and a strict prison warden. Do they have common ground?',
        '💭 Their roles are diametrically opposed. A direct collaboration seems unlikely.',
        '🔍 Consider their individual roles and how they might contribute to the investigation separately.'
      ]
    },
    {
      cards: ['CH3_EV04', 'CH3_EV06'],
      proximity: 'none',
      messages: [
        'Kael\'s financial records and Elara\'s coded message. Do these combine?',
        '💰 These items represent different aspects of the conspiracy: financial and personal.',
        '🔍 Re-evaluate the context of each item. They might be important, but not together.'
      ]
    },
  ],
  urgentHints: [
    '🚨 긴급 제보: 도시 의회에서 엘라라의 유죄를 확정하려는 움직임이 포착되었습니다. 시간이 얼마 없습니다!',
    '🚨 현장 증거: 세 번째 희생자의 시신에서 카엘의 것으로 추정되는 로켓이 발견되었습니다. 이는 엘라라의 무죄를 입증할 ��정적 단서입니다.',
    '🚨 금융 조사: 카엘의 역외 계좌에서 거액의 자금이 익명으로 유입된 흔적이 발견되었습니다. 배후 세력이 있을 수 있습니다.',
    '🚨 통신 감청: 카엘이 자신의 흔적을 지우고 핵심 증거를 은폐하려 한다는 암호화된 통신이 감청되었습니다.'
  ],
  contextualHints: [
    '💡 추리 팁: 알리바이가 완벽해 보일수록 더 깊이 파고들어야 합니다. 미세한 균열을 찾으세요.',
    '💡 수사 관점: 금융 거래는 범죄의 동기와 배후를 밝히는 중요한 열쇠입니다. 자금의 흐름을 추적하세요.',
    '💡 범죄 심리: 범인이 증거를 숨기려 할 때, 그 방식에서 그의 성격과 지식을 엿볼 수 있습니다.',
    '💡 물증 분석: 법의학 보고서는 과학적 진실을 담고 있습니다. 초기 추정을 맹신하지 마세요.',
    '💡 타임라인: 사건의 전개와 용의자들의 행동을 시간 순서대로 정리하면 숨겨진 연결을 찾을 수 있습니다.'
  ]
};