
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

// Case 1: Mansion Murder Case Feedback Data
const case4FeedbackDataEn3: CaseFeedbackData = 
{
  "caseId": "arcanum_shadows_chapter3_en",
  "correctSuspect": "C15",
  "keyEvidence": ["C09", "C10", "C11", "C13"],
  "combinationFeedback": [
    {
      "cards": ["C09", "C10"],
      "proximity": "close",
      "messages": [
        "Stonewick's heart research and the purpose of the missing heart. The cause of all tragedy has been revealed.",
        "Stonewick tried to gain immortality using his own heart, and the culprit targeted that heart.",
        "💡 Now you must uncover the truth of this Heartstone ritual and find out who planned all of this."
      ]
    },
    {
      "cards": ["C11", "C13"],
      "proximity": "close",
      "messages": [
        "Accomplice in the locked-room trick and the truth of the Heartstone ritual. Kairen is the key to all of this.",
        "Kairen implanted Stonewick's heart into his own body to gain immortality.",
        "💡 You must reveal that Kairen murdered Stonewick and used other suspects to gain immortality."
      ]
    },
    {
      "cards": ["C04", "C06"],
      "proximity": "partial",
      "messages": [
        "Aelen Silverwood's confession and Liliana Bane's silence. The roles of two suspects are revealed.",
        "📖 Aelen provided the Blood Rose, and Liliana provided Heartstone information. They assisted Stonewick's research.",
        "💭 Why did they assist Stonewick's research? Was it simple cooperation, or did they have other motives?"
      ]
    },
    {
      "cards": ["C01", "C02"],
      "proximity": "none",
      "messages": [
        "Victor Crow's deduction and the secret of the Blood Rose. Your role and a clue.",
        "🔍 The Blood Rose is an important clue, but it doesn't directly point to the culprit.",
        "💭 Deduce how this clue connects to other suspects and what role it played."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: An ancient Elf magic circle found in Stonewick's lab is related to life energy absorption rituals.",
    "🚨 Scene Evidence: The crack in the magic staff is of a type that can only occur when combined with a specific magic amplification device.",
    "🚨 Suspect Info: Kairen Nightshade is a half-elf with deep understanding of both Elf magic and Dwarf engineering."
  ],
  "contextualHints": [
    "💡 Deduction Tip: All clues are connected. You must find the hidden meaning beyond what is apparent.",
    "💡 Investigation Perspective: You must delve into the inconsistencies between suspects' statements and physical evidence.",
    "💡 Psychological Analysis: The culprit lies to hide their crime. The truth is hidden within those lies."
  ]
}


// Case 3 dedicated feedback data - for independent use
export default case4FeedbackDataEn3;