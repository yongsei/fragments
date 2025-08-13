
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


export const feedbackCase7Ch1En: CaseFeedbackData = {
  caseId: 'c7_chapter_1',
  correctSuspect: 'A11',
  keyEvidence: [
    'A06',
    'A07',
    'A15',
    'A16',
    'A20'
  ],
  combinationFeedback: [
    // Close Combinations
    {
      cards: ['A11', 'A06'],
      proximity: 'close',
      messages: [
        'Arthur and the missing footprints are a crucial link.',
        'This clue suggests the possibility that Arthur pushed the Lord from the balcony.',
        '💡 Re-examine Arthur\'s movements and the footprints. There might be a clue related to the murder weapon.'
      ]
    },
    {
      cards: ['A11', 'A07'],
      proximity: 'close',
      messages: [
        'Arthur and the scratch on the railing could be a trace of the crime.',
        'If the Lord struggled with someone on the railing, it could be related to Arthur.',
        '💡 Look for a mark on Arthur\'s hands or belongings that matches the scratch on the railing.'
      ]
    },
    {
      cards: ['A11', 'A15'],
      proximity: 'close',
      messages: [
        'Arthur and the terms of the will show his strong motive.',
        'The fact that Arthur desperately needed the inheritance is deeply connected to the case.',
        '💡 Recall Arthur\'s reaction when he learned about the terms of the will. You need to investigate his financial situation more deeply.'
      ]
    },
    {
      cards: ['A11', 'A16'],
      proximity: 'close',
      messages: [
        'The conflict between Arthur and the family is not unrelated to the Lord\'s death.',
        'The discord among the family members might have strengthened Arthur\'s motive for the crime.',
        '💡 Investigate the relationships between Arthur and other family members closely to uncover hidden secrets.'
      ]
    },
    {
      cards: ['A11', 'A20'],
      proximity: 'close',
      messages: [
        'Your suspicion of Arthur on the first night shows your intuition was correct.',
        'The detective\'s first impression and Arthur\'s behavior are getting to the heart of the case.',
        '💡 Go over Arthur\'s suspicious actions once more and confirm where he was on the night of the incident.'
      ]
    },
    {
      cards: ['A06', 'A07'],
      proximity: 'close',
      messages: [
        'The missing footprints and the scratch on the railing are important clues from the crime scene.',
        'These two pieces of evidence clearly show that the Lord\'s death was not an accident.',
        '💡 Try to deduce the culprit\'s characteristics or behavior patterns that these clues point to. 🔍',
      ]
    },
    {
      cards: ['A04', 'A15'],
      proximity: 'close',
      messages: [
        'The reading of the will and its conditions make Arthur\'s motive even clearer.',
        'You can see the pressure Arthur was under to inherit the fortune.',
        '💡 Think about how the contents of the will might have affected Arthur. 📖',
      ]
    },
    {
      cards: ['A11', 'A12'],
      proximity: 'close',
      messages: [
        'The conflict between Arthur and Beatrice reveals deep problems within the family.',
        'Their argument could be an important background detail related to the Lord\'s death.',
        '💡 Dig deeper into their relationship to uncover hidden secrets. 💭',
      ]
    },

    // Partial Combinations
    {
      cards: ['A02', 'A04'],
      proximity: 'partial',
      messages: [
        'Eleanor and the reading of the will mark the beginning of the case.',
        'Eleanor\'s request opened the door to the case, but it\'s not the core of it yet.',
        '💡 Check Eleanor\'s testimony and the contents of the will once more. 📖',
      ]
    },
    {
      cards: ['A08', 'A09'],
      proximity: 'partial',
      messages: [
        'Mrs. Gable and the curse of the Weeping Woman set the atmosphere of the mansion.',
        'You must find the truth hidden behind the supernatural phenomena.',
        '💡 Consider whether Mrs. Gable\'s testimony is mere superstition or has another meaning. 💭',
      ]
    },
    {
      cards: ['A01', 'A09'],
      proximity: 'partial',
      messages: [
        'The detective\'s arrival and the curse of the Weeping Woman add to the mystery of the case.',
        'Don\'t focus too much on the supernatural aspect of the case.',
        '💡 Try to connect this curse with other clues to see how it relates to the actual incident. 🔍',
      ]
    },
    {
      cards: ['A03', 'A09'],
      proximity: 'partial',
      messages: [
        'Blackwood Manor and the curse of the Weeping Woman emphasize the gloomy atmosphere of the mansion.',
        'Consider the influence of the mansion\'s history and the curse on the case.',
        '💡 The mansion\'s structure or hidden spaces might be related to the curse. 🏠',
      ]
    },
    {
      cards: ['A03', 'A05'],
      proximity: 'partial',
      messages: [
        'Blackwood Manor and the study\'s balcony are important parts of the crime scene.',
        'A deeper investigation of the location where the incident occurred is needed.',
        '💡 Look for other clues around the balcony. 🔍',
      ]
    },
    {
      cards: ['A01', 'A03'],
      proximity: 'partial',
      messages: [
        'The detective\'s arrival and Blackwood Manor set the scene for the case.',
        'This is an important combination that signals the beginning of the case.',
        '💡 Recall the detective\'s first impression upon arriving at the manor. 💭',
      ]
    },
    {
      cards: ['A04', 'A10'],
      proximity: 'partial',
      messages: [
        'The reading of the will and the grand hall are where the family\'s conflict began.',
        'Carefully observe the family\'s reactions here.',
        '💡 Think about how the will\'s content and the family\'s reactions connect to the motive. 💭',
      ]
    },
    {
      cards: ['A02', 'A10'],
      proximity: 'partial',
      messages: [
        'Eleanor and the grand hall show her anxiety.',
        'Eleanor\'s actions and testimony could help get closer to the truth of the case.',
        '💡 Check if Eleanor\'s behavior or words in the grand hall align with other clues. 💭',
      ]
    },
    {
      cards: ['A02', 'A19'],
      proximity: 'partial',
      messages: [
        'Eleanor and the old library provide information about Sebastian Sohn.',
        'You need to uncover Sebastian\'s role and his secrets.',
        '💡 Investigate what Sebastian was recording in the library. 📖',
      ]
    },
    {
      cards: ['A03', 'A05'],
      proximity: 'partial',
      messages: [
        'Blackwood Manor and the study\'s balcony are important parts of the crime scene.',
        'A deeper investigation of the location where the incident occurred is needed.',
        '💡 Look for other clues around the balcony. 🔍',
      ]
    },
    {
      cards: ['A03', 'A09'],
      proximity: 'partial',
      messages: [
        'Blackwood Manor and the curse of the Weeping Woman emphasize the gloomy atmosphere of the mansion.',
        'Consider the influence of the mansion\'s history and the curse on the case.',
        '💡 The mansion\'s structure or hidden spaces might be related to the curse. 🏠',
      ]
    },
    {
      cards: ['A06', 'A07'],
      proximity: 'partial',
      messages: [
        'The missing footprints and the scratch on the railing are important clues from the crime scene.',
        'These two pieces of evidence clearly show that the Lord\'s death was not an accident.',
        '💡 Try to deduce the culprit\'s characteristics or behavior patterns that these clues point to. 🔍',
      ]
    },

    // None Combinations (examples)
    {
      cards: ['A03', 'A17'],
      proximity: 'none',
      messages: [
        'Blackwood Manor and the atmosphere of the study have little direct connection.',
        'These two elements describe the setting of the case, but are not direct clues.',
        '🔍 Focus on other clues to get to the heart of the case.'
      ]
    },
    {
      cards: ['A01', 'A18'],
      proximity: 'none',
      messages: [
        'The detective\'s arrival and the carriage signal the beginning of the case, but are not direct clues.',
        'This combination helps in understanding the background of the case.',
        '🔍 Proceed with your deduction by focusing on the key clues of the case.'
      ]
    },
    {
      cards: ['A05', 'A17'],
      proximity: 'none',
      messages: [
        'The study\'s balcony and the atmosphere of the study are descriptions of the place.',
        'This combination does not directly help in solving the case.',
        '🔍 Focus on the physical clues at the crime scene.'
      ]
    },
    {
      cards: ['A10', 'A19'],
      proximity: 'none',
      messages: [
        'The grand hall and the old library are different locations within the mansion.',
        'These two places have a low direct connection.',
        '🔍 Analyze the clues found in each location individually.'
      ]
    }
  ],

  urgentHints: [
    '🚨 Urgent Tip: The Lord\'s death was not a simple accident. Re-check the footprints and the scratch mark found at the scene.',
    '🚨 Scene Evidence: The scratch on the balcony railing suggests the Lord struggled with someone.',
    '🚨 Forensics Report: Signs of homicide were found on the Lord\'s body. It was not a slip and fall.',
    '🚨 Financial/Communication Investigation: Arthur Blackwood was suffering from massive gambling debts and desperately needed the inheritance.',
    '🚨 Urgent Tip: The housekeeper, Mrs. Gable, knows about the old curse of the mansion. Dig deeper into her testimony.'
  ],
  contextualHints: [
    '💡 Deduction Tip: Every clue at the crime scene has a meaning. Don\'t miss anything that seems trivial.',
    '💡 Investigation Perspective: Suspects\' testimonies may not always be true. Cross-verify their motives and alibis.',
    '💡 Criminal Psychology: The culprit will try to erase their tracks. Pay attention to missing clues or manipulated situations.',
    '💡 Evidence Analysis: Physical evidence does not lie. Find the connections between the pieces of evidence.',
    '💡 Timeline: Reconstruct the suspects\' whereabouts on the night of the incident in chronological order. 💭',
    '💡 Deduction Tip: The history and legends of the mansion could be connected to the case in some way. Look for related records. 📖'
  ]
};

export default feedbackCase7Ch1En;