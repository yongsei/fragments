
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


export const feedbackCase7Ch3En: CaseFeedbackData = {
  caseId: 'c7_chapter_3', // The unique ID for the case
  correctSuspect: 'A11', // Arthur Blackwood
  keyEvidence: [         // List of key evidence for solving the case
    'C06', // Secret Passage
    'C09', // The Ghost's Play
    'C15', // Human Malice
    'C16', // Secret of the Mansion
    'C19'  // Deepening Mystery
  ],
  combinationFeedback: [ // Feedback for card combinations
    // --- Close Combinations (Core combinations that are very close to the solution) ---
    {
      cards: ['A11', 'C06'], // Cards: [Arthur, Secret Passage]
      proximity: 'close',
      messages: [
        'Arthur and the secret passage are the core link to the crime.',
        'This suggests the possibility that Arthur used this passage.',
        '💡 Investigate the relationship between Arthur\'s movements and the secret passage more deeply. 🔍',
      ]
    },
    {
      cards: ['A11', 'C09'], // Cards: [Arthur, The Ghost's Play]
      proximity: 'close',
      messages: [
        'Arthur and The Ghost\'s Play imply that he fabricated the incident.',
        'The ghost commotion could have been a planned act by Arthur.',
        '💡 Try to deduce Arthur\'s purpose for pretending to be a ghost. 💭',
      ]
    },
    {
      cards: ['A11', 'C15'], // Cards: [Arthur, Human Malice]
      proximity: 'close',
      messages: [
        'Arthur and human malice clarify his motive for the crime.',
        'Arthur\'s greed could be directly linked to the lord\'s death.',
        '💡 Delve deeper into Arthur\'s psyche to understand the origin of his malice. 💭',
      ]
    },
    {
      cards: ['A11', 'C16'], // Cards: [Arthur, Secret of the Mansion]
      proximity: 'close',
      messages: [
        'Arthur and the secret of the mansion show that he knows the mansion\'s layout well.',
        'A hidden space in the mansion may have been used for the crime.',
        '💡 Investigate how Arthur learned the secrets of the mansion. 🏠',
      ]
    },
    {
      cards: ['A11', 'C19'], // Cards: [Arthur, Deepening Mystery]
      proximity: 'close',
      messages: [
        'Arthur and the deepening mystery emphasize that he is a key figure in the case.',
        'Arthur\'s actions have made the case\'s mystery even more complex.',
        '💡 Find the contradictions in Arthur\'s statements and actions. 🔍',
      ]
    },
    {
      cards: ['C06', 'C09'], // Cards: [Secret Passage, The Ghost's Play]
      proximity: 'close',
      messages: [
        'The existence of the secret passage and The Ghost\'s Play are crucial clues to the truth.',
        'These two pieces of evidence clearly show that the ghost incident was fabricated.',
        '💡 Try to deduce the characteristics or behavior patterns of the culprit indicated by this combination. 🔍',
      ]
    },
    {
      cards: ['C06', 'C16'], // Cards: [Secret Passage, Secret of the Mansion]
      proximity: 'close',
      messages: [
        'The secret passage and the secret of the mansion reveal the key location of the incident.',
        'The hidden structure of the mansion may have been used for the crime.',
        '💡 Deduce how these secrets connect to the culprit. 🏠',
      ]
    },

    // --- Partial Combinations (Related to the case, but not decisive) ---
    {
      cards: ['C02', 'C01'], // Cards: [Tragedy of Isabella Blackwood, Origin of the Legend]
      proximity: 'partial',
      messages: [
        'The tragedy of Isabella Blackwood and the origin of the legend show the history of the mansion.',
        'This combination helps in understanding the background of the case.',
        '💡 Think about how Isabella\'s tragedy might be connected to the current case. 💭',
      ]
    },
    {
      cards: ['C03', 'C04'], // Cards: [Ghostly Whispers, Family's Fear]
      proximity: 'partial',
      messages: [
        'The ghostly whispers and the family\'s fear signal the beginning of the ghost commotion.',
        'This combination sets the mood of the case, but it is not a direct clue.',
        '💡 Determine if the ghost incident is real or fabricated. 🔍',
      ]
    },
    {
      cards: ['C05', 'C07'], // Cards: [Figure Disappearing into the Wall, Old Library Records]
      proximity: 'partial',
      messages: [
        'The figure disappearing into the wall and the old library records hint at the existence of a secret passage.',
        'This combination is an important clue about a hidden space in the mansion.',
        '💡 Look for more specific information about the secret passage in the old library records. 📖',
      ]
    },
    // ... (Other partial combinations would follow the same structure)

    // --- None Combinations (Examples of irrelevant combinations) ---
    {
      cards: ['C07', 'C08'], // Cards: [Old Library Records, Stormy Night]
      proximity: 'none',
      messages: [
        'The old library records and the stormy night have little direct connection.',
        'These two elements describe the background of the case, but they are not direct clues.',
        '🔍 Focus on other clues to get to the heart of the case.'
      ]
    },
    // ... (Other none combinations would follow the same structure)
  ],

  // Urgent hints that provide critical information
  urgentHints: [
    '🚨 Urgent Tip: The ghost commotion is someone\'s planned act. Uncover the secret of the figure that disappeared into the wall.',
    '🚨 Field Evidence: A hidden secret passage exists inside the mansion. Investigate how this passage was used in the crime.',
    '🚨 Forensics Report: The lord\'s death was not a supernatural phenomenon, but a homicide by physical force. Look for traces of the culprit.',
    '🚨 Financial/Telecom Investigation: The tragedy of Isabella Blackwood is related to an inheritance dispute. Consider how past events affect the present.',
    '🚨 Urgent Tip: The family members are terrified by the ghost commotion. Figure out how their reactions were used in the culprit\'s plan.'
  ],

  // General tips to help with deduction
  contextualHints: [
    '💡 Deduction Tip: Behind supernatural phenomena, there can always be a rational explanation. Approach it logically.',
    '💡 Investigation Perspective: The culprit may have used the mansion\'s structure to create an alibi. Find the hidden spaces.',
    '💡 Criminal Psychology: Fear clouds people\'s judgment. The culprit may have used this to their advantage.',
    '💡 Evidence Analysis: Sounds from walls or floors can be clues to hidden spaces. Focus on the sounds.',
    '💡 Timeline: Compare the time of the ghost incidents with the suspects\' whereabouts to find contradictions. 💭',
    '💡 Deduction Tip: The old legend of the mansion might hold hints about the motive or method of the crime. Uncover the truth of the legend. 📖'
  ]
};

export default feedbackCase7Ch3En;