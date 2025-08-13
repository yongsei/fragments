
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


export const feedbackCase7Ch5En: CaseFeedbackData = {
  caseId: 'c7_chapter_5',
  correctSuspect: 'A11', // Arthur Blackwood
  keyEvidence: [
    'E05',
    'E06',
    'E07',
    'E08',
    'E09',
    'E17',
    'E18',
    'E20'
  ],
  combinationFeedback: [
    // Close Combinations
    {
      cards: ['E04', 'E11'],
      proximity: 'close',
      messages: [
        'The ghost\'s identity and the detective\'s deduction lead to the revelation of the disinheritance plan.',
        'This combination plays a crucial role in uncovering the core motive of the case.',
        '💡 Clearly identify the culprit\'s motive through the contents of the lord\'s diary. 📖',
      ]
    },
    {
      cards: ['E05', 'E02'],
      proximity: 'close',
      messages: [
        'The revelation of the disinheritance plan and the culprit\'s trap are decisive in revealing the culprit\'s identity.',
        'The trap set by the culprit ironically becomes the key to exposing his identity.',
        '💡 Use the culprit\'s trap against him to reveal his identity. 🚨',
      ]
    },
    {
      cards: ['E05', 'E06'],
      proximity: 'close',
      messages: [
        'The revelation of the disinheritance plan and the culprit\'s identity clarify Arthur\'s motive.',
        'This shows that Arthur had a strong motive to murder the lord.',
        '💡 Deduce how Arthur\'s motive connects to the crime. 💭',
      ]
    },
    {
      cards: ['E07', 'E01'],
      proximity: 'close',
      messages: [
        'Arthur\'s motive and his last-ditch effort are important for reconstructing the murder process.',
        'You can grasp the specific method and situation in which Arthur murdered the lord.',
        '💡 Clarify the crime process by connecting Arthur\'s motive and his last-ditch effort. 🔍',
      ]
    },
    {
      cards: ['E07', 'E02'],
      proximity: 'close',
      messages: [
        'Arthur\'s motive and the culprit\'s trap reveal the purpose of the ghost commotion.',
        'You can understand why Arthur started the ghost commotion and his desperation.',
        '💡 Figure out what Arthur was trying to gain through the ghost commotion. 💭',
      ]
    },
    {
      cards: ['E07', 'E08'],
      proximity: 'close',
      messages: [
        'Arthur\'s motive and the murder process lead to the culprit\'s confession.',
        'This combination is the decisive clue that will solve all the mysteries of the case.',
        '💡 Lead Arthur to confess by using his motive and the murder process. 🗣️',
      ]
    },
    {
      cards: ['E04', 'E17'],
      proximity: 'close',
      messages: [
        'The ghost\'s identity and the culprit\'s confession expose human malice.',
        'This combination shows that the fundamental cause of the case was human greed and malice.',
        '💡 Uncover the human malice hidden behind the ghost commotion and realize justice. 💡',
      ]
    },
    {
      cards: ['E17', 'E18'],
      proximity: 'close',
      messages: [
        'The culprit\'s confession and human malice confirm the triumph of truth.',
        'This combination is the final step to solving all the mysteries of the case and realizing justice.',
        '💡 Synthesize all the evidence to punish the culprit and close the case. 💡',
      ]
    },

    // Partial Combinations
    {
      cards: ['E03', 'E06'],
      proximity: 'partial',
      messages: [
        'The final confrontation and the culprit\'s identity hint at a secret hidden behind the tapestry in the central hall.',
        'This combination is an important clue to the place where the culprit was hiding.',
        '💡 Check what was hidden behind the tapestry. 🏠',
      ]
    },
    {
      cards: ['E03', 'E04'],
      proximity: 'partial',
      messages: [
        'The final confrontation and the ghost\'s identity trigger the detective\'s deduction.',
        'This combination is a crucial turning point in uncovering the truth of the case.',
        '💡 Figure out how the detective\'s deduction proceeds and which clues are used. 💭',
      ]
    },
    {
      cards: ['E06', 'E07'],
      proximity: 'partial',
      messages: [
        'The culprit\'s identity and Arthur\'s motive lead to witnessing Arthur\'s despair.',
        'This combination is an important clue that convinces you Arthur is the culprit.',
        '💡 Deduce how Arthur\'s despair is connected to his crime. 💭',
      ]
    },
    {
      cards: ['E05', 'E12'],
      proximity: 'partial',
      messages: [
        'The revelation of the disinheritance plan and Arthur\'s despair confirm the family\'s shock.',
        'This combination shows the process of the family accepting the truth of the case.',
        '💡 Think about how the family\'s reaction affects the case resolution. 👥',
      ]
    },
    {
      cards: ['E03', 'E10'],
      proximity: 'partial',
      messages: [
        'The final confrontation and the tapestry in the central hall greet the morning at Blackwood Manor.',
        'This combination implies the end of the case and the tranquility of the manor.',
        '💡 Feel how the atmosphere of the manor has changed after the case was solved. 🏠',
      ]
    },
    {
      cards: ['E06', 'E13'],
      proximity: 'partial',
      messages: [
        'The culprit\'s identity and the family\'s shock lead to receiving Eleanor\'s gratitude.',
        'This combination shows how the detective\'s actions affected the family.',
        '💡 Think about what Eleanor\'s gratitude means for the resolution of the case. 👥',
      ]
    },
    {
      cards: ['E04', 'E09'],
      proximity: 'partial',
      messages: [
        'The ghost\'s identity and the purpose of the ghost commotion signal the beginning of a new legend.',
        'This combination shows how the truth of the case will be recorded in the manor\'s history.',
        '💡 Deduce what this case means for the history of Blackwood Manor. 📖',
      ]
    },
    {
      cards: ['E14', 'E15'],
      proximity: 'partial',
      messages: [
        'The morning at Blackwood Manor and Eleanor\'s gratitude announce the end of the case.',
        'This combination shows that the detective\'s mission has been successfully completed.',
        '💡 Predict the detective\'s next move after the case is solved. 💭',
      ]
    },

    // None Combinations (examples)
    {
      cards: ['E01', 'E03'],
      proximity: 'none',
      messages: [
        'The last-ditch effort and the final confrontation have little direct connection.',
        'These two elements describe the climax of the case, but are not direct clues.',
        '🔍 Focus on other clues to get to the heart of the case.'
      ]
    },
    {
      cards: ['E02', 'E03'],
      proximity: 'none',
      messages: [
        'The culprit\'s trap and the final confrontation have little direct connection.',
        'These two elements describe the climax of the case, but are not direct clues.',
        '🔍 Focus on other clues to get to the heart of the case.'
      ]
    },
    {
      cards: ['E03', 'E11'],
      proximity: 'none',
      messages: [
        'The final confrontation and the detective\'s deduction have little direct connection.',
        'These two elements describe the climax of the case, but are not direct clues.',
        '🔍 Focus on other clues to get to the heart of the case.'
      ]
    },
    {
      cards: ['E04', 'E10'],
      proximity: 'none',
      messages: [
        'The ghost\'s identity and the tapestry in the central hall have little direct connection.',
        'These two elements describe the background of the case, but are not direct clues.',
        '🔍 Focus on other clues to get to the heart of the case.'
      ]
    }
  ],

  urgentHints: [
    '🚨 Urgent Tip: The culprit has noticed the detective\'s presence. They may try to destroy evidence or eliminate the detective.',
    '🚨 Crime Scene Evidence: There is a secret door hidden behind the tapestry in the central hall. This could be the culprit\'s hiding place.',
    '🚨 Forensic Report: The lord\'s death is a clear homicide. All questions must be answered through the culprit\'s confession.',
    '🚨 Financial/Communication Records: Arthur\'s financial situation and the contents of the lord\'s will clarify his motive for the crime.',
    '🚨 Urgent Tip: The ghost commotion is a planned act by the culprit. Reveal the ghost\'s identity and corner the culprit.'
  ],
  contextualHints: [
    '💡 Deduction Tip: The culprit used the manor\'s layout to fabricate their alibi. Find the hidden space.',
    '💡 Investigation Perspective: The culprit will make a final, desperate move. Predict their actions and prepare.',
    '💡 Criminal Psychology: Greed and desperation can lead people to extreme actions. Analyze Arthur\'s psychological state.',
    '💡 Physical Evidence Analysis: The culprit\'s confession is the decisive clue that will solve all mysteries. Reconstruct the case through their statement.',
    '💡 Timeline: Reconstruct the entire incident by arranging all clues and suspects\' movements in chronological order to reveal the full story. 💭',
    '💡 Deduction Tip: Justice will always prevail. Uncover the truth with persistent deduction and sharp insight. 💡'
  ]
};

export default feedbackCase7Ch5En;