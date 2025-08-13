
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


export const feedbackCase7Ch4En: CaseFeedbackData = {
  caseId: 'c7_chapter_4',
  correctSuspect: 'A11', // Arthur Blackwood
  keyEvidence: [
    'D04',
    'D08',
    'D09',
    'D10',
    'D15',
    'D16',
    'D20'
  ],
  combinationFeedback: [
    // Close Combinations
    {
      cards: ['A11', 'D04'],
      proximity: 'close',
      messages: [
        'Arthur and the Lord\'s diary are crucial clues to revealing the truth of the case.',
        'The confession in the diary is deeply related to Arthur\'s motive.',
        '💡 Connect Arthur\'s actions with the diary\'s contents to understand the motive. 📖',
      ]
    },
    {
      cards: ['A11', 'D08'],
      proximity: 'close',
      messages: [
        'Arthur and the inheritance revocation plan form his strong motive for murder.',
        'Imagine Arthur\'s reaction when he found out about this plan.',
        '💡 Deduce how the inheritance revocation plan might have affected Arthur. 💭',
      ]
    },
    {
      cards: ['A11', 'D09'],
      proximity: 'close',
      messages: [
        'Arthur and the motive for murder strongly suggest he is the culprit.',
        'Arthur had a sufficient reason to murder the Lord.',
        '💡 Find the direct link between Arthur\'s motive and the crime. 🔍',
      ]
    },
    {
      cards: ['A11', 'D10'],
      proximity: 'close',
      messages: [
        'Arthur and the traces of using the secret passage shatter his alibi.',
        'It is highly likely that Arthur used this passage to commit the crime.',
        '💡 Reconstruct the crime by carefully comparing Arthur\'s movements with the traces in the secret passage. 🏠',
      ]
    },
    {
      cards: ['A11', 'D15'],
      proximity: 'close',
      messages: [
        'Arthur and the core of the truth fit all the puzzle pieces of the case together.',
        'This is a decisive clue that confirms Arthur is the culprit.',
        '💡 Connect Arthur\'s actions with the core of the truth to reveal the full story of the case. 💡',
      ]
    },
    {
      cards: ['A11', 'D16'],
      proximity: 'close',
      messages: [
        'Arthur and the pursuit of the culprit show that he is cornered.',
        'Arthur may have noticed the detective\'s presence and might try to destroy evidence.',
        '💡 Predict Arthur\'s next move and find a way to stop him. 🚨',
      ]
    },
    {
      cards: ['A11', 'D20'],
      proximity: 'close',
      messages: [
        'Arthur and the final clue make it clear that he is the culprit.',
        'The Lord\'s diary is the decisive evidence proving Arthur\'s crime.',
        '💡 Combine all the evidence proving Arthur\'s crime to arrest him. 💡',
      ]
    },
    {
      cards: ['D08', 'D09'],
      proximity: 'close',
      messages: [
        'The inheritance revocation plan and the motive for murder are the core reasons for the Lord\'s death.',
        'These two pieces of evidence provide a strong reason for the culprit to murder the Lord.',
        '💡 Think about who would be most affected by this plan. 💭',
      ]
    },
    {
      cards: ['D09', 'D10'],
      proximity: 'close',
      messages: [
        'The motive for murder and the use of the secret passage show the specific method of the crime.',
        'It is highly likely the culprit used this passage to fabricate their alibi.',
        '💡 Reconstruct the criminal process by connecting the culprit\'s motive and actions. 🔍',
      ]
    },
    {
      cards: ['D15', 'D16'],
      proximity: 'close',
      messages: [
        'The core of the truth and the pursuit of the culprit signal the end of the case.',
        'This is the decisive moment when the detective reveals the culprit\'s identity and chases him.',
        '💡 Combine all the evidence to arrest the culprit and close the case. 💡',
      ]
    },

    // Partial Combinations
    {
      cards: ['D04', 'D03'],
      proximity: 'partial',
      messages: [
        'The diary\'s confession and the Lord\'s secret study reveal his hidden inner self.',
        'This combination provides new information related to the Lord\'s death.',
        '💡 Delve deeper into the Lord\'s feelings about his family in his diary. 📖',
      ]
    },
    {
      cards: ['D04', 'D13'],
      proximity: 'partial',
      messages: [
        'The diary\'s confession and the unfinished letters show the Lord\'s final struggles.',
        'It shows that the Lord was agonizing over his relationship with his family until the moment he died.',
        '💡 Deduce how the content of the Lord\'s letters might have influenced his will or family relationships. 💭',
      ]
    },
    {
      cards: ['D04', 'D05'],
      proximity: 'partial',
      messages: [
        'The diary\'s confession and the record about Beatrice reveal her greed.',
        'The fact that Beatrice was embezzling the Lord\'s assets strengthens her motive.',
        '💡 Investigate Beatrice\'s financial status more deeply to uncover her hidden actions. 💸',
      ]
    },
    {
      cards: ['D04', 'D06'],
      proximity: 'partial',
      messages: [
        'The diary\'s confession and the record about Arthur show his debauched lifestyle.',
        'Arthur\'s debt problem is deeply connected to his motive for the crime.',
        '💡 Find the direct link between Arthur\'s financial status and the Lord\'s death. 💰',
      ]
    },
    {
      cards: ['D04', 'D07'],
      proximity: 'partial',
      messages: [
        'The diary\'s confession and the records about Eleanor and Sebastian show the Lord\'s disillusionment.',
        'It shows that the Lord was disappointed with his entire family.',
        '💡 Deduce how the Lord\'s feelings might have influenced his will or actions. 💭',
      ]
    },
    {
      cards: ['D01', 'D02'],
      proximity: 'partial',
      messages: [
        'The hidden door and the cobwebbed corridor confirm the existence of a secret passage.',
        'This combination suggests that the culprit knows the layout of the mansion well.',
        '💡 Deduce how the secret passage might have been used in the crime. 🏠',
      ]
    },
    {
      cards: ['D03', 'D10'],
      proximity: 'partial',
      messages: [
        'The Lord\'s secret study and the traces of using the secret passage hint at the culprit\'s movements.',
        'This combination shows that the culprit entered and exited the secret study.',
        '💡 Connect other clues found in the secret study with the culprit\'s movements. 🔍',
      ]
    },
    {
      cards: ['D03', 'D11'],
      proximity: 'partial',
      messages: [
        'The Lord\'s secret study and his disillusionment provide a deeper understanding of his inner self.',
        'This combination shows the Lord\'s personality and his critical view of society.',
        '💡 Think about how the Lord\'s ideas or values might relate to his will or death. 💭',
      ]
    },
    {
      cards: ['D02', 'D10'],
      proximity: 'partial',
      messages: [
        'The cobwebbed corridor and the traces of using the secret passage suggest the possibility of a fabricated alibi.',
        'The culprit may have used this passage to create a false alibi.',
        '💡 Re-verify the culprit\'s alibi and compare it with the traces in the secret passage. 🔍',
      ]
    },
    {
      cards: ['D05', 'D06'],
      proximity: 'partial',
      messages: [
        'The records about Beatrice and Arthur reveal the family\'s hypocrisy.',
        'This combination shows the hidden dark side of the Blackwood family.',
        '💡 Deduce how the family\'s hypocrisy might be related to the Lord\'s death. 💭',
      ]
    },
    {
      cards: ['D08', 'D09'],
      proximity: 'partial',
      messages: [
        'The inheritance revocation plan and the motive for murder are the core reasons for the Lord\'s death.',
        'These two pieces of evidence provide a strong reason for the culprit to murder the Lord.',
        '💡 Think about who would be most affected by this plan. 💭',
      ]
    },

    // None Combinations (examples)
    {
      cards: ['D01', 'D03'],
      proximity: 'none',
      messages: [
        'The hidden door and the Lord\'s secret study have little direct connection.',
        'These two elements describe the mansion\'s layout but are not direct clues.',
        '🔍 Focus on other clues to get to the heart of the case.'
      ]
    },
    {
      cards: ['D02', 'D03'],
      proximity: 'none',
      messages: [
        'The cobwebbed corridor and the Lord\'s secret study have little direct connection.',
        'These two elements describe the mansion\'s layout but are not direct clues.',
        '🔍 Focus on other clues to get to the heart of the case.'
      ]
    },
    {
      cards: ['D03', 'D14'],
      proximity: 'none',
      messages: [
        'The Lord\'s secret study and the caricature show the Lord\'s personality.',
        'This combination does not directly help solve the case.',
        '🔍 Focus on the Lord\'s diary and other clues.'
      ]
    },
    {
      cards: ['D01', 'D14'],
      proximity: 'none',
      messages: [
        'The hidden door and the caricature have little direct connection.',
        'These two elements describe the background of the case but are not direct clues.',
        '🔍 Focus on other clues to get to the heart of the case.'
      ]
    }
  ],

  urgentHints: [
    '🚨 Urgent Tip: The Lord\'s secret diary has been found. This diary contains the decisive motive for the case.',
    '🚨 Scene Evidence: Faint footprints, believed to be the culprit\'s, were found on the floor of the secret passage. Re-verify the culprit\'s alibi.',
    '🚨 Forensics Report: The Lord\'s death has been confirmed as a homicide. Delve deeper into the motive and method of the crime.',
    '🚨 Financial/Communication Investigation: The Lord intended to donate all his wealth to charity. The person who knew this plan in advance is likely the culprit.',
    '🚨 Urgent Tip: A cold draft and footsteps were heard from the secret passage. The culprit may have noticed the detective\'s presence.'
  ],
  contextualHints: [
    '💡 Deduction Tip: The victim\'s hidden secrets play a crucial role in revealing the motive. Analyze the Lord\'s diary carefully.',
    '💡 Investigation Perspective: The culprit likely had a meticulous plan to erase their tracks. Find the loopholes in their alibi.',
    '💡 Criminal Psychology: Greed and betrayal can be powerful motives for a crime. Delve deeper into the family relationships.',
    '💡 Evidence Analysis: Documentary evidence like diaries and letters is important for understanding the culprit\'s psychology and motive. Check the contents thoroughly.',
    '💡 Timeline: Pinpoint the exact time of the crime by comparing the Lord\'s last movements with his diary entries. 💭',
    '💡 Deduction Tip: The mansion\'s hidden spaces were likely used for the crime. Deduce how these spaces connect to the case. 🏠'
  ]
};

export default feedbackCase7Ch4En;