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

export const case8_chapter0FeedbackData: CaseFeedbackData = {
  caseId: 'case8_chapter0',
  correctSuspect: 'A05', // Shadow Figure
  keyEvidence: ['A15', 'A17', 'A14', 'A06', 'A18'], // Name Not on Map, Ominous Aura, Uneasy Gaze, Prologue\'s Last Character, Prologue\'s Last Evidence
  combinationFeedback: [
    // close combinations
    {
      cards: ['A05', 'A15'],
      proximity: 'close',
      messages: [
        "Explore the connection between the shadow figure witnessed in the fog and the village not found on any map.",
        "The very existence of this village is a mystery, and the shadow figure might be at its core.",
        "💡 How is the shadow figure related to the village\'s isolation? Uncover the secret of the village not on the map."
      ]
    },
    {
      cards: ['A05', 'A17'],
      proximity: 'close',
      messages: [
        "The ominous aura surrounding the village and the appearance of the shadow figure may not be a coincidence.",
        "This eerie atmosphere is likely deeply connected to the presence of the shadow figure.",
        "💡 Is the shadow figure the cause of the village\'s ominous aura? Explore the meaning of its existence."
      ]
    },
    {
      cards: ['A05', 'A14'],
      proximity: 'close',
      messages: [
        "The villagers' uneasy gaze might stem from fear of the shadow figure.",
        "The presence of the shadow figure might be terrifying the villagers.",
        "💡 There might be clues about the shadow figure where the villagers' gaze is directed. Understand their fear."
      ]
    },
    {
      cards: ['A15', 'A17'],
      proximity: 'close',
      messages: [
        "The fact that the village is not on any map and its ominous aura show that this village is not ordinary.",
        "This village is isolated from the outside world, and that isolation might be the cause of the ominous atmosphere.",
        "💡 Find the combined meaning of the village\'s unmapped nature and its ominous aura. What is the essence of this village?"
      ]
    },
    {
      cards: ['A15', 'A14'],
      proximity: 'close',
      messages: [
        "The villagers' uneasy gaze towards the unmapped village hints at something beyond mere caution towards outsiders.",
        "The village\'s isolation might be amplifying the villagers' anxiety.",
        "💡 How does the fact that the village is unmapped connect with the villagers' uneasy gaze? Consider the consequences of the village\'s isolation."
      ]
    },
    {
      cards: ['A17', 'A14'],
      proximity: 'close',
      messages: [
        "The village\'s ominous aura is closely linked to the villagers' uneasy gaze.",
        "The fear felt by the villagers might be intensifying the village\'s eerie atmosphere.",
        "💡 How do the village\'s ominous aura and the villagers' uneasy gaze influence each other? Analyze the interaction between these two elements."
      ]
    },
    {
      cards: ['A05', 'A06'],
      proximity: 'close',
      messages: [
        "The shadow figure and the other entity trapped in the village are deeply connected to the village\'s curse.",
        "The encounter between these two entities will be a crucial clue to uncovering the village\'s secret.",
        "💡 What is the relationship between the shadow figure and the last character? Find the link between them."
      ]
    },
    {
      cards: ['A05', 'A18'],
      proximity: 'close',
      messages: [
        "The shadow figure and the first direct clue about the village\'s curse point to the core of the incident.",
        "This evidence is decisive in understanding the identity of the shadow figure and the village\'s curse.",
        "💡 What truth do the shadow figure and the last piece of evidence reveal? Their combination is the key to the next chapter."
      ]
    },
    {
      cards: ['A06', 'A18'],
      proximity: 'close',
      messages: [
        "The trace of the entity trapped in the village and the first clue about the curse show the tragedy of this village.",
        "These two elements prove that the village\'s curse is not just a rumor.",
        "💡 Grasp the truth about the village\'s curse revealed by the last character and the last piece of evidence combined."
      ]
    },
    // partial combinations
    {
      cards: ['A02', 'A13'],
      proximity: 'partial',
      messages: [
        "The villagers' silence might be related to this eerie quietness.",
        "Is the reason for the villagers' silence due to the village\'s abnormal quietness?",
        "💭 What do the villagers' silence and the village\'s quietness signify? Find clues through their actions."
      ]
    },
    {
      cards: ['A03', 'A16'],
      proximity: 'partial',
      messages: [
        "The innkeeper might be related to the village\'s history symbolized by the old wooden sign.",
        "Is the innkeeper\'s gruffness a stance to protect the village\'s old secrets?",
        "📖 The old sign represents the village\'s past, and the innkeeper its present. Explore their relationship."
      ]
    },
    {
      cards: ['A04', 'A18'],
      proximity: 'partial',
      messages: [
        "The last piece of evidence found by the lost driver might be related to his despair.",
        "Is this evidence the result of the ominous experience the driver went through?",
        "🚨 Understand what warning the lost driver\'s experience and the last piece of evidence convey."
      ]
    },
    {
      cards: ['A01', 'A02'],
      proximity: 'partial',
      messages: [
        "The traveler\'s encounter with the villager shows the relationship between an outsider and the villagers.",
        "What meaning does the villagers' wariness hold for the traveler?",
        "💭 What clues can you gain from the interaction between you, the outsider, and the villagers?"
      ]
    },
    {
      cards: ['A01', 'A03'],
      proximity: 'partial',
      messages: [
        "The traveler meeting the innkeeper is an attempt to settle in the village.",
        "What information can be obtained from the innkeeper\'s gruffness?",
        "📖 The innkeeper might be an important figure in the village. Find clues in your conversation with them."
      ]
    },
    {
      cards: ['A02', 'A04'],
      proximity: 'partial',
      messages: [
        "Both the villager and the lost driver are affected by the village.",
        "Is their anxiety due to some common threat in the village?",
        "💭 Can you find any patterns in the shared experiences of the villager and the driver?"
      ]
    },
    {
      cards: ['A03', 'A13'],
      proximity: 'partial',
      messages: [
        "The innkeeper seems accustomed to the village\'s eerie quietness.",
        "How is their silence related to this quietness?",
        "📖 What do the innkeeper\'s demeanor and the village\'s quietness signify? Explore their relationship."
      ]
    },
    {
      cards: ['A04', 'A16'],
      proximity: 'partial',
      messages: [
        "The lost driver must have entered the village through the old wooden sign.",
        "The sign indicates the village\'s existence, but what caused the driver\'s despair?",
        "🚨 Can you find a connection between the old sign and the driver\'s despair?"
      ]
    },
    // none combinations
    {
      cards: ['A07', 'A08'],
      proximity: 'none',
      messages: [
        "Dense fog and the village entrance are simply elements describing the current situation.",
        "This combination shows the process of entering the village but is not a direct clue.",
        "🏠 The fog obscures the village, and the entrance is the way in. These represent the physical environment."
      ]
    },
    {
      cards: ['A09', 'A10'],
      proximity: 'none',
      messages: [
        "The old dwelling and the silent road form the background of the village\'s eerie atmosphere.",
        "This combination represents the player\'s lodging and travel path.",
        "🍽️ The old dwelling is lodging, and the silent road is a travel path. They help understand your current location and surroundings."
      ]
    },
    {
      cards: ['A01', 'A07'],
      proximity: 'none',
      messages: [
        "The traveler being in the fog indicates the current situation.",
        "This combination describes the player\'s current state but does not provide direct hints for solving the case.",
        "🔍 You are in the fog. Focus on more important clues to find a way out of this situation."
      ]
    },
    {
      cards: ['A02', 'A07'],
      proximity: 'none',
      messages: [
        "A villager being in dense fog is a common situation in the village.",
        "This combination shows the villagers' everyday environment but has no special meaning.",
        "💭 Villagers live in the fog. Focus on more important clues to analyze their actions."
      ]
    },
    {
      cards: ['A03', 'A10'],
      proximity: 'none',
      messages: [
        "The innkeeper and the silent road form the background of the village.",
        "This combination represents the innkeeper\'s location and the village\'s atmosphere.",
        "🍽️ The innkeeper stays in the village, and the road is a travel path. They have little direct relevance."
      ]
    },
    {
      cards: ['A04', 'A11'],
      proximity: 'none',
      messages: [
        "The lost driver must have headed to the village after seeing the faint light.",
        "This combination explains how the driver arrived at the village.",
        "🔍 The driver\'s path to the village is important, but this combination itself is not a core clue."
      ]
    }
  ],
  urgentHints: [
    '🚨 Urgent Report: Echowood Village is an unknown place not found on any map.',
    '🚨 On-site Evidence: The villagers\' uneasy gaze hints at a hidden secret.',
    '🚨 Forensic Report: The dense fog surrounding the village might not be a mere natural phenomenon.',
    '🚨 Financial/Communication Investigation: The shadow figure might be deeply connected to the village\'s curse.'
  ],
  contextualHints: [
    '💡 Deduction Tip: In the prologue, it\'s crucial to carefully observe your surroundings and the reactions of the characters.',
    '💡 Investigation Perspective: A village not on the map signifies isolation from the outside world, which can be a crucial clue.',
    '💡 Criminal Psychology: The villagers\' anxiety might be because they are under some threat or hiding something.',
    '💡 Physical Evidence Analysis: Non-physical evidence like fog and silence are also important for understanding the atmosphere of the case.',
    '💡 Timeline: Try to organize the strange phenomena that occurred since your arrival in the village in chronological order.'
  ]
};
