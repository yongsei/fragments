import { CaseFeedbackData, CombinationFeedback } from "../types";

export const chapter2FeedbackData: CaseFeedbackData = {
  caseId: 'case6_chapter2',
  correctSuspect: 'D-P01', // 닥터 아서 랭던 (전체 시나리오의 최종 범인)
  keyEvidence: [
    'D-E01', // 랭던의 과거 의료 과실
    'D-E03', // 랭던의 수법 (희귀 독극물)
    'D-E05', // 찢겨진 페이지 내용 (공개)
  ],
  combinationFeedback: [
    // 'close' 조합
    {
      cards: ['CH2_LC01', 'CH2_CH01'],
      proximity: 'close',
      messages: [
        'The aqueducts are vast. Why would Kael choose this place?',
        'Kael's presence in the aqueducts is highly suspicious. Look for a hidden base.',
        '💡 Kael's Hidden Laboratory (CH2_EV02) is likely deep within the aqueducts. Find it!'
      ]
    },
    {
      cards: ['CH2_CH01', 'CH2_EV02'],
      proximity: 'close',
      messages: [
        'Kael's lab is a mess of dark alchemy. What was he trying to create?',
        'The lab is the heart of Kael's operations. His research notes will reveal his true intentions.',
        '💡 Kael's Disturbing Research Notes (CH2_EV03) are crucial to understanding his experiments.'
      ]
    },
    {
      cards: ['CH2_EV01', 'CH2_EV07'],
      proximity: 'close',
      messages: [
        'The first victim's glowing skin matches the elixir's effects. Is this Kael's work?',
        'The Elixir's Chilling Recipe directly explains the glowing plague. This is a direct link.',
        '💡 This combination confirms Kael's method. Now, find out who his clients are (CH2_EV05).'
      ]
    },
    {
      cards: ['CH2_EV02', 'CH2_EV07'],
      proximity: 'close',
      messages: [
        'Kael's lab and the elixir recipe. This is where the plague is being manufactured.',
        'This combination reveals the full scope of Kael's depravity and his deadly concoction.',
        '💡 The grotesque failed experiment (CH2_EV04) in the lab is a chilling testament to his methods.'
      ]
    },
    // 'partial' 조합
    {
      cards: ['CH2_EV01', 'CH2_CH02'],
      proximity: 'partial',
      messages: [
        'The Aqueduct Scavenger knows the tunnels well. Did they see anything unusual near the victim?',
        '💭 The scavenger is a reluctant informant. Their knowledge of hidden passages (CH2_LC01) could be vital.',
        '🔍 Ask about any strange glowing substances or unusual activity in the aqueducts.'
      ]
    },
    {
      cards: ['CH2_LC02', 'CH2_CH03'],
      proximity: 'partial',
      messages: [
        'The Sunken Market is a hub for illicit goods. Is the Whispering Merchant involved with Kael?',
        '🏠 The merchant is a key link in Kael's supply chain. They deal in rare alchemical ingredients.',
        '💡 Look for a coded ledger from the market (CH2_EV10) that details Kael's transactions.'
      ]
    },
    {
      cards: ['CH2_EV05', 'CH2_CH04'],
      proximity: 'partial',
      messages: [
        'A desperate noble commissioned Kael? Who would pay such a price for immortality?',
        '💭 The Desperate Noble is Kael's wealthy client, driven by a fear of mortality. Their identity is crucial.',
        '🔍 This connection reveals the true nature of Kael's clientele and their dark desires.'
      ]
    },
    {
      cards: ['CH2_EV09', 'CH2_LC04'],
      proximity: 'partial',
      messages: [
        'The second victim's glowing remains are at the morgue. What can we learn from them?',
        '⚕️ The City Morgue's Secret Chamber is where the true extent of the plague is being understood. Look for more clues there.',
        '💡 This confirms the plague's spread. Now, find out who is supplying Kael (CH2_CH05).'
      ]
    },
    // 'none' 조합
    {
      cards: ['CH2_LC03', 'CH2_LC05'],
      proximity: 'none',
      messages: [
        'The Abandoned Pumping Station and Kael's Escape Route are both in the aqueducts. Are they directly related?',
        '🏠 These are distinct locations, though both are in the aqueducts. Their connection might be indirect.',
        '🔍 Focus on the specific purpose of each location in Kael's operations.'
      ]
    },
    {
      cards: ['CH2_CH02', 'CH2_CH04'],
      proximity: 'none',
      messages: [
        'The Aqueduct Scavenger and the Desperate Noble. Do they have any connection?',
        '💭 Their social standing and motivations are vastly different. A direct link seems unlikely.',
        '🔍 Re-evaluate their individual roles in the investigation. They might be important, but not together.'
      ]
    },
    {
      cards: ['CH2_EV04', 'CH2_EV06'],
      proximity: 'none',
      messages: [
        'A grotesque failed experiment and an ancient prophecy fragment. Do these combine?',
        '📖 These items represent different aspects of the mystery: scientific horror and mystical lore.',
        '🔍 Consider their individual significance. They might be important clues, but not in combination.'
      ]
    },
  ],
  urgentHints: [
    '🚨 긴급 보고: 빛나는 전염병이 변이하여 새로운 희생자들에게서 더 공격적인 증상을 보이고 있습니다. 시간이 얼마 없습니다!',
    '🚨 목격자 증언: 카엘의 숨겨진 실험실에서 이상한 빛이 새어 나오는 것을 보았다는 증���이 있습니다.',
    '🚨 가로챈 통신: 카엘이 더 많은 생물 발광 조류를 확보하기 위해 필사적으로 움직이고 있다는 암호화된 메시지가 가로채졌습니다.',
    '🚨 법의학 분석: 희생자들의 체내에서 발견된 물질이 급격한 세포 노화를 유발하는 것으로 확인되었습니다. 이는 단순한 독극물이 아닙니다.'
  ],
  contextualHints: [
    '💡 추리 팁: 특이한 재료의 공급망을 추적하세요. 누가 그것들을 제공하고, 누구에게 제공하는가?',
    '💡 수사 관점: 카엘의 불멸 추구 뒤에 숨겨진 진정한 동기를 이해하세요. 단순한 탐욕일까요?',
    '💡 증거 분석: 실패한 실험은 범인의 의도와 수법에 대한 중요한 단서를 제공합니다. 무엇을 시사할까요?',
    '💡 인물 동기: 절박한 의뢰인의 배경을 파악하세요. 그들의 절박함이 카엘의 범죄를 어떻게 부추겼을까요?',
    '💡 타임라인 검토: 각 희생자가 언제, 어디서 발견되었는지 확인하세요. 패턴이 있을 수 있습니다.'
  ]
};