import { CaseFeedbackData, CombinationFeedback } from "../types";

export const chapter1FeedbackData: CaseFeedbackData = {
  caseId: 'case6_chapter1',
  correctSuspect: 'D-P01', // 닥터 아서 랭던 (전체 시나리오의 최종 범인)
  keyEvidence: [
    'D-E01', // 랭던의 과거 의료 과실
    'D-E03', // 랭던의 수법 (희귀 독극물)
    'D-E05', // 찢겨진 페이지 내용 (공개)
  ],
  combinationFeedback: [
    // 'close' 조합
    {
      cards: ['CH1_EV01', 'CH1_CH01'],
      proximity: 'close',
      messages: [
        'The glowing manuscript seems to be central to Elara's research. What is she hiding?',
        'Elara's deep involvement with the manuscript suggests she knows more about its true nature and purpose.',
        '💡 Focus on Elara's connection to the manuscript. Her personal diary (CH1_EV03) might reveal her secrets.'
      ]
    },
    {
      cards: ['CH1_CH01', 'CH1_LC01'],
      proximity: 'close',
      messages: [
        'Elara spends a lot of time in the Forbidden Section. What is she doing there?',
        'Her presence in the Forbidden Section is directly linked to her secret research. Look for hidden items.',
        '💡 Elara's personal diary (CH1_EV03) is likely hidden within the Forbidden Section. Find it!'
      ]
    },
    {
      cards: ['CH1_EV03', 'CH1_CH02'],
      proximity: 'close',
      messages: [
        'Jonas seems very nervous about Elara's activities. What did he see?',
        'Jonas's fear is connected to Elara's desperate attempts to find a cure. He might have witnessed something crucial.',
        '💡 Jonas's secret confession (CH1_EV08) will reveal what he knows about Elara's rituals and the plague.'
      ]
    },
    {
      cards: ['CH1_EV06', 'CH1_CH05'],
      proximity: 'close',
      messages: [
        'The City Guard's report mentions strange disappearances. Is the Silent Watcher connected?',
        'The Silent Watcher seems to be observing the victims. Their presence is unsettling and significant.',
        '💡 The scratched silver locket (CH1_EV11) found near the aqueducts might link the Silent Watcher to a victim.'
      ]
    },
    // 'partial' 조합
    {
      cards: ['CH1_EV04', 'CH1_EV01'],
      proximity: 'partial',
      messages: [
        'A map of the sewers from the manuscript? This suggests a hidden connection to the city's underbelly.',
        '📖 This map hints at a subterranean network. Could the glowing plague originate from below?',
        '💭 Consider how the sewers might be connected to the disappearances mentioned in the City Guard's report (CH1_EV06).'
      ]
    },
    {
      cards: ['CH1_EV05', 'CH1_CH02'],
      proximity: 'partial',
      messages: [
        'Jonas knows something about Elara's purchases. What kind of herbs was she buying?',
        '⚕️ The receipt for rare alchemical herbs suggests Elara is experimenting with potent substances. Where did she buy them?',
        '💡 The Apothecary's Back Room (CH1_LC02) might be where these illicit transactions took place. Investigate there.'
      ]
    },
    {
      cards: ['CH1_EV02', 'CH1_CH04'],
      proximity: 'partial',
      messages: [
        'The torn page has strange symbols. The Whispering Scholar might understand them.',
        '📖 The scholar's knowledge of ancient lore could decipher the symbols. What do they represent?',
        '💭 The ancient astrolabe fragment (CH1_EV09) might be related to these symbols and the scholar's insights.'
      ]
    },
    {
      cards: ['CH1_EV09', 'CH1_LC04'],
      proximity: 'partial',
      messages: [
        'An astrolabe fragment at the observatory? This suggests celestial connections.',
        '🏠 The observatory was used for charting stars. Could the plague be linked to cosmic events?',
        '🔍 The faded alchemical diagram (CH1_EV10) might be found here, revealing more about the plague's origin.'
      ]
    },
    // 'none' 조합
    {
      cards: ['CH1_LC01', 'CH1_LC04'],
      proximity: 'none',
      messages: [
        'The Forbidden Section and the Rooftop Observatory are both in the library. Is there a direct link?',
        '🏠 These are distinct areas of the library. Their connection might be more thematic than direct.',
        '🔍 Focus on the specific clues found within each location rather than combining the locations themselves.'
      ]
    },
    {
      cards: ['CH1_CH03', 'CH1_CH04'],
      proximity: 'none',
      messages: [
        'Sergeant Thorne and the Whispering Scholar are very different people. Do they have a common link?',
        '💭 Their approaches to knowledge are vastly different. A direct collaboration seems unlikely.',
        '🔍 Consider their individual roles and how they might contribute to the investigation separately.'
      ]
    },
    {
      cards: ['CH1_EV05', 'CH1_EV09'],
      proximity: 'none',
      messages: [
        'A receipt for herbs and an astrolabe fragment. Do these connect?',
        '🌿 These items seem to belong to different spheres of investigation. One is mundane, the other arcane.',
        '🔍 Re-evaluate the context of each item. They might be important, but not together.'
      ]
    },
  ],
  urgentHints: [
    '🚨 Urgent Report: More citizens are showing signs of the glowing affliction. The plague is spreading faster than anticipated!',
    '🚨 Witness Testimony: A terrified citizen claims to have seen a cloaked figure lurking near the aqueducts just before a disappearance.',
    '🚨 Library Security Log: Elara accessed the Forbidden Section late at night, just hours before the first reported glowing incident.',
    '🚨 Alchemical Residue: Traces of an unknown, bioluminescent substance have been found in the city's water supply, hinting at a widespread contamination.'
  ],
  contextualHints: [
    '💡 Deduction Tip: Sometimes, the most obvious suspect is a red herring. Look for subtle inconsistencies.',
    '💡 Investigation Focus: Follow the flow of information. Who knows what, and who benefits from keeping secrets?',
    '💡 Evidence Analysis: Consider the origin of each piece of evidence. Where did it come from, and what does that tell you?',
    '💡 Character Motivation: What drives each character? Fear, ambition, loyalty, or something else entirely?',
    '💡 Timeline Review: When did each event occur? The sequence of events can reveal hidden connections.'
  ]
};