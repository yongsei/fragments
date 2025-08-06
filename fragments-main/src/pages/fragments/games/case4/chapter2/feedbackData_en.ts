
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
const case4FeedbackDataEn2: CaseFeedbackData = {
  "caseId": "arcanum_shadows_chapter2_en",
  "correctSuspect": "B16",
  "keyEvidence": ["B04", "B05", "B06", "B08"],
  "combinationFeedback": [
    {
      "cards": ["B04", "B08"],
      "proximity": "close",
      "messages": [
        "Blood Rose and Heartstone of Life information. The purpose of the missing heart is revealed.",
        "Stonewick tried to recreate the Heartstone of Life using his own heart.",
        "💡 The culprit targeted this Heartstone. Who would covet this Heartstone?"
      ]
    },
    {
      "cards": ["B05", "B06"],
      "proximity": "close",
      "messages": [
        "Heartbreaker Silver Coin and Magic Staff Crack Analysis. The murder weapon and method are clear.",
        "The coin symbolizes a heart-destroying weapon, and the crack signifies powerful magic amplification.",
        "💡 Who could wield both? It requires both Dwarf engineering and magical knowledge."
      ]
    },
    {
      "cards": ["B07", "B15"],
      "proximity": "partial",
      "messages": [
        "Small, agile footprint and Kairen Nightshade's footprint. Implies Kairen was inside the lab.",
        "📖 Kairen claimed to be in his room right next to the lab. A crack has appeared in his alibi.",
        "💭 Why did Kairen lie? Is he involved in Stonewick's research?"
      ]
    },
    {
      "cards": ["B01", "B02"],
      "proximity": "none",
      "messages": [
        "Victor Crow's analysis and the faintly glowing crystal shard. Your role and a clue.",
        "🔍 The crystal shard is a fragment of a magic amplification device. You need to trace where this fragment came from.",
        "💭 This clue itself is important, but you need to combine it with other clues to form a larger picture."
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
export default case4FeedbackDataEn2;