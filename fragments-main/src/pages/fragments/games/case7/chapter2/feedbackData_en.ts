
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


export const feedbackCase7Ch2En: CaseFeedbackData = {
  caseId: 'c7_chapter_2',
  correctSuspect: 'A11', // Arthur Blackwood
  keyEvidence: [
    'B05',
    'B14',
    'B15',
    'B16',
    'B19'
  ],
  combinationFeedback: [
    // Close Combinations
    {
      cards: ['B02', 'B05'],
      proximity: 'close',
      messages: [
        'Arthur\'s arrogance and private loans show his desperate situation.',
        'This combination clarifies why Arthur desperately needs the inheritance.',
        '💡 Think deeply about how Arthur\'s financial situation might have influenced his actions. 💭',
      ]
    },
    {
      cards: ['B02', 'B14'],
      proximity: 'close',
      messages: [
        'Arthur\'s arrogance and false testimony suggest he is hiding the truth.',
        'The lies found in Arthur\'s testimony make him a strong suspect.',
        '💡 Try to connect what Arthur\'s lies are trying to hide with other clues. 🔍',
      ]
    },
    {
      cards: ['B02', 'B15'],
      proximity: 'close',
      messages: [
        'Arthur\'s arrogance and financial pressure strengthen his motive for the crime.',
        'How did the Blackwood family\'s financial pressure affect Arthur?',
        '💡 Find the direct link between Arthur\'s financial situation and the lord\'s death. 💰',
      ]
    },
    {
      cards: ['B02', 'B16'],
      proximity: 'close',
      messages: [
        'Arthur\'s arrogance and hidden motives give a glimpse into his inner self.',
        'You must identify the true purpose hidden behind Arthur\'s actions.',
        '💡 Deduce how Arthur\'s hidden motive connects to the lord\'s death. 💭',
      ]
    },
    {
      cards: ['B02', 'B19'],
      proximity: 'close',
      messages: [
        'Arthur\'s arrogance and dangerous relationships show that he is at the center of the case.',
        'The dangerous relationships between Arthur and his family further complicate the case.',
        '💡 Analyze Arthur\'s network of relationships to identify who he was in conflict with. 👥',
      ]
    },
    {
      cards: ['B05', 'B15'],
      proximity: 'close',
      messages: [
        'Arthur\'s private loans and financial pressure emphasize his desperation.',
        'These two pieces of evidence suggest that Arthur could have committed the crime for money.',
        '💡 Find the point where Arthur\'s debt is directly linked to the lord\'s death. 💸',
      ]
    },
    {
      cards: ['B13', 'B14'],
      proximity: 'close',
      messages: [
        'The family\'s distrust and false testimonies reveal hidden motives.',
        'You need to figure out why the family members don\'t trust each other and are lying.',
        '💡 Cross-verify the family members\' testimonies to uncover the truth. 🗣️',
      ]
    },

    // Partial Combinations
    {
      cards: ['B01', 'B02'],
      proximity: 'partial',
      messages: [
        'Beatrice\'s calmness and Arthur\'s arrogance show the tension within the family.',
        'Consider how their relationship might have affected the case.',
        '💡 Look for hidden meanings in their conversations or actions. 💭',
      ]
    },
    {
      cards: ['B03', 'B05'],
      proximity: 'partial',
      messages: [
        'Sebastian\'s ambiguity and Arthur\'s private loans are an unexpected link.',
        'What connection does Sebastian have to Arthur\'s debt?',
        '💡 Investigate Sebastian\'s movements more deeply to understand his relationship with Arthur. 🔍',
      ]
    },
    {
      cards: ['B01', 'B04'],
      proximity: 'partial',
      messages: [
        'Beatrice\'s calmness and financial problems show her two-faced nature.',
        'Beatrice\'s financial situation contradicts her testimony.',
        '💡 Dig deeper into Beatrice\'s financial problems to find her hidden motive. 💸',
      ]
    },
    {
      cards: ['B02', 'B06'],
      proximity: 'partial',
      messages: [
        'Arthur\'s arrogance and Sebastian\'s suspicious activities show the tension between them.',
        'You need to figure out why Arthur is suspicious of Sebastian.',
        '💡 Investigate the relationship between Arthur and Sebastian more deeply to find the hidden truth. 👥',
      ]
    },
    {
      cards: ['B07', 'B08'],
      proximity: 'partial',
      messages: [
        'Eleanor\'s suspicion and Beatrice\'s suspicion of her son deepen the family\'s distrust.',
        'How will the distrust among family members affect solving the case?',
        '💡 Compare the family members\' testimonies to judge who is telling the truth. 🗣️',
      ]
    },
    {
      cards: ['B07', 'B09'],
      proximity: 'partial',
      messages: [
        'Eleanor\'s suspicion and Arthur\'s suspicion of his cousin reveal the family\'s false testimonies.',
        'You need to figure out why the family members suspect each other.',
        '💡 Find the contradictions in their testimonies. 💭',
      ]
    },
    {
      cards: ['B03', 'B06'],
      proximity: 'partial',
      messages: [
        'Sebastian\'s ambiguity and suspicious activities are confirmed by the servant\'s testimony.',
        'The servant\'s testimony is shaking Sebastian\'s alibi.',
        '💡 Investigate the servant\'s testimony more deeply to clarify Sebastian\'s movements. 🔍',
      ]
    },

    // None Combinations
    {
      cards: ['B10', 'B11'],
      proximity: 'none',
      messages: [
        'The billiard room and the garden are different places within the mansion.',
        'These two places have a low direct connection.',
        '🔍 Analyze the clues found in each location individually.'
      ]
    },
    {
      cards: ['B10', 'B12'],
      proximity: 'none',
      messages: [
        'The billiard room and the library are the main places where Arthur and Sebastian stay.',
        'This combination shows their personalities, but it is not a direct clue.',
        '🔍 Focus on their actions and testimonies to get closer to the heart of the case.'
      ]
    },
    {
      cards: ['B11', 'B12'],
      proximity: 'none',
      messages: [
        'The garden and the library are different places within the mansion.',
        'These two places have a low direct connection.',
        '🔍 Analyze the clues found in each location individually.'
      ]
    },
    {
      cards: ['B01', 'B10'],
      proximity: 'none',
      messages: [
        'Beatrice\'s calmness and the billiard room have little direct connection.',
        'This combination shows Beatrice\'s personality, but it is not a key clue to the case.',
        '🔍 Focus on Beatrice\'s financial problems and testimony.'
      ]
    }
  ],

  urgentHints: [
    '🚨 Breaking News: Arthur Blackwood is suffering from massive private debt, and his life is on the verge of ruin if he does not receive the inheritance.',
    '🚨 On-site Evidence: A letter in Beatrice\'s hand revealed her serious financial problems.',
    '🚨 Forensic Report: The lord\'s death has been confirmed as a homicide, not an accident. Dig deeper into the motive for the crime.',
    '🚨 Financial/Communication Investigation: Sebastian was witnessed near the study on the night of the incident. Reconfirm his alibi.',
    '🚨 Breaking News: The family members are suspecting each other and giving false testimonies. Find the contradictions in their statements.'
  ],
  contextualHints: [
    '💡 Deduction Tip: The suspects\' testimonies may be a means to hide their motives. Distinguish between truth and lies.',
    '💡 Investigation Perspective: Financial problems can be a strong motive for a crime. Closely investigate the suspects\' financial situations.',
    '💡 Criminal Psychology: Insecurity can be hidden behind arrogance. Analyze Arthur\'s psychological state.',
    '💡 Physical Evidence Analysis: Documentary evidence such as letters or dunning letters contains important information. Check the contents carefully.',
    '💡 Timeline: Reconstruct the suspects\' movements on the night of the incident in chronological order to find holes in their alibis. 💭',
    '💡 Deduction Tip: Distrust and conflict among family members are important for understanding the background of the case. Grasp their relationships. 👥'
  ]
};

export default feedbackCase7Ch2En;