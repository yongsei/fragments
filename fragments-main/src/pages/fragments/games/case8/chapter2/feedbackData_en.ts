export interface CombinationFeedback {
  cards: string[];
  proximity: 'close' | 'partial' | 'none';
  messages: string[];
}

export interface CaseFeedbackData {
  caseId: string;
  correctSuspect: string;
  keyEvidence: string[];
  combinationFeedback: CombinationFeedback[];
  urgentHints: string[];
  contextualHints: string[];
}

export const case8_chapter1FeedbackData: CaseFeedbackData = {
  caseId: 'case8_chapter1',
  correctSuspect: 'B13', // Eerie Repetition
  keyEvidence: ['B13', 'B14', 'B15', 'B18'], // Eerie Repetition, Stagnant Time, Elara\'s Warning, Chapter 1\'s Last Evidence
  combinationFeedback: [
    // close combinations
    {
      cards: ['B13', 'B14'],
      proximity: 'close',
      messages: [
        "Eerie repetition and stagnant time are the core phenomena of the curse dominating this village.",
        "The repetition, as if time has stopped, shows the curse\'s impact on the entire village.",
        "💡 Repeating phenomena and stopped time reveal the essence of the curse. Delve deeply into their relationship."
      ]
    },
    {
      cards: ['B13', 'B15'],
      proximity: 'close',
      messages: [
        "Grandma Elara\'s warning is a crucial clue about the eerie repetition phenomenon.",
        "You need to understand how her words connect to the repeating curse.",
        "💡 Grandma Elara\'s warning tells the meaning of the repeating shadows. Reflect on her words."
      ]
    },
    {
      cards: ['B13', 'B18'],
      proximity: 'close',
      messages: [
        "Eerie repetition and the last piece of evidence prove that the curse is not a mere illusion.",
        "This evidence is decisive in revealing the cause of the repeating phenomena and the true nature of the curse.",
        "💡 Grasp the truth of the curse revealed by the repeating phenomena and the last piece of evidence combined."
      ]
    },
    {
      cards: ['B14', 'B15'],
      proximity: 'close',
      messages: [
        "Stagnant time and Grandma Elara\'s warning emphasize the abnormal state of the village.",
        "Her warning is important for understanding the meaning of stopped time.",
        "💡 Grandma Elara\'s warning holds the secret of stopped time. Unravel the stagnation of time through her words."
      ]
    },
    {
      cards: ['B14', 'B18'],
      proximity: 'close',
      messages: [
        "Stagnant time and the last piece of evidence show that the curse is distorting the flow of time in the village.",
        "This evidence proves the cause of stopped time and the power of the curse.",
        "💡 Understand the power of the curse revealed by stopped time and the last piece of evidence combined."
      ]
    },
    {
      cards: ['B15', 'B18'],
      proximity: 'close',
      messages: [
        "Grandma Elara\'s warning and the last piece of evidence confirm the existence of the curse.",
        "These two elements are the most direct and decisive clues about the curse.",
        "💡 Grasp the true nature of the curse indicated by Grandma Elara\'s warning and the last piece of evidence."
      ]
    },
    {
      cards: ['B01', 'B13'],
      proximity: 'close',
      messages: [
        "Grandma Elara seems to know about the repeating phenomena.",
        "How are her actions and words related to the repeating curse?",
        "💡 Grandma Elara is a witness to the repeating shadows. Find clues in her words and actions."
      ]
    },
    {
      cards: ['B01', 'B14'],
      proximity: 'close',
      messages: [
        "Grandma Elara warned about the stagnant time phenomenon.",
        "Her warning is important for understanding the meaning of stopped time.",
        "💡 Grandma Elara\'s warning holds the secret of stopped time. Unravel the stagnation of time through her words."
      ]
    },
    {
      cards: ['B02', 'B13'],
      proximity: 'close',
      messages: [
        "The repeating elder is living proof of the eerie repetition phenomenon.",
        "His actions can be an important clue to understanding the pattern of the curse.",
        "💡 The repeating elder\'s actions show the pattern of the curse. Understand the meaning of repetition through him."
      ]
    },
    {
      cards: ['B03', 'B13'],
      proximity: 'close',
      messages: [
        "The children\'s song is another form of the repeating phenomenon.",
        "You must find the eerie meaning of repetition hidden behind their innocent appearance.",
        "💡 The children\'s song contains the pattern of the repeating curse. Understand the meaning of that song."
      ]
    },
    // partial combinations
    {
      cards: ['B04', 'B16'],
      proximity: 'partial',
      messages: [
        "The additional character and the children\'s song are elements found in the repeating daily life of the village.",
        "Their combination can hint at the suffering of the villagers trapped by the curse.",
        "💭 What do the additional character\'s actions and the children\'s song signify? Observe the villagers' reactions."
      ]
    },
    {
      cards: ['B05', 'B17'],
      proximity: 'partial',
      messages: [
        "The repeatedly appearing character and additional evidence can help understand the pattern of the curse.",
        "Their combination can provide clues on how the curse operates.",
        "📖 Analyze the pattern of the curse revealed by the additional character and additional evidence combined."
      ]
    },
    {
      cards: ['B06', 'B17'],
      proximity: 'partial',
      messages: [
        "The last character and additional evidence symbolize the collective unconscious or reaction of the villagers to the curse.",
        "Their combination can show the curse\'s impact on the villagers.",
        "💭 Understand the villagers' reactions revealed by the last character and additional evidence combined."
      ]
    },
    {
      cards: ['B01', 'B02'],
      proximity: 'partial',
      messages: [
        "Grandma Elara and the repeating elder are characters showing the abnormal phenomena of the village.",
        "The presence of these two elders can hint that the village\'s curse is ancient.",
        "💭 What clues do the actions and words of these two elders provide about the village\'s curse?"
      ]
    },
    {
      cards: ['B07', 'B02'],
      proximity: 'partial',
      messages: [
        "The repeating elder lingering by the old mailbox is a symbol of stagnant time.",
        "The mailbox implies that no one has sent letters for a long time.",
        "📖 The combination of the old mailbox and the repeating elder represents the village\'s isolation and stagnant time."
      ]
    },
    {
      cards: ['B08', 'B03'],
      proximity: 'partial',
      messages: [
        "Children repeatedly singing in the village square shows the normalization of the curse.",
        "The square is the center of the village, but an eerie silence, rather than vibrancy, hangs over it.",
        "🏠 The village square and the children\'s song show the appearance of the village trapped by the curse."
      ]
    }
  ],
  urgentHints: [
    '🚨 Urgent Report: Everything in the village is repeating exactly as it was yesterday.',
    '🚨 On-site Evidence: Phenomena as if time has stopped are witnessed everywhere.',
    '🚨 Forensic Report: Grandma Elara\'s warning is not just an old woman\'s rambling.',
    '🚨 Financial/Communication Investigation: The children\'s song might contain the pattern of the repeating curse.'
  ],
  contextualHints: [
    '💡 Deduction Tip: In repeating phenomena, look for subtle differences or exceptions. They might be clues to breaking the curse.',
    '💡 Investigation Perspective: Is the stagnation of time a physical phenomenon or a psychological illusion?',
    '💡 Criminal Psychology: Observing how the villagers react to the repeating daily life can help understand the essence of the curse.',
    '💡 Physical Evidence Analysis: Repetition of sounds or actions forms important patterns. Understand the rules of the curse through them.',
    '💡 Timeline: Record the sequence of repeating events and check what parts are fixed and what parts change.'
  ]
};
