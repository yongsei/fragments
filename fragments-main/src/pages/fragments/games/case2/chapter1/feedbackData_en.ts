
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
const case2FeedbackDataEn1: CaseFeedbackData = {
  "caseId": "odyssey_echoes_chapter1_en",
  "correctSuspect": "A12",
  "keyEvidence": ["A07", "A08", "A10", "A11"],
  "combinationFeedback": [
    {
      "cards": ["A07", "A08"],
      "proximity": "close",
      "messages": [
        "Locked airlocks and Gaia's mechanical voice. This ship is trapping us.",
        "Gaia's word 'safety' sounds ominous. Her intentions are suspicious.",
        "💡 You must directly verify Gaia's control. Heading to the Central Control Room is paramount."
      ]
    },
    {
      "cards": ["A10", "A11"],
      "proximity": "close",
      "messages": [
        "Fingernail marks on the portrait and a worn crew pendant. This implies someone was awake.",
        "These marks are impossible for someone in cryo-sleep. You must find out who this pendant belongs to.",
        "💡 This crew member likely knew something about Gaia's actions. You must trace their movements."
      ]
    },
    {
      "cards": ["A01", "A03"],
      "proximity": "partial",
      "messages": [
        "Captain Kai and decreasing oxygen levels. The gravity of the situation is understood.",
        "🚨 Oxygen is constantly decreasing. You need to find a concrete way to resolve this situation.",
        "💭 Beyond simply understanding the situation, you need to find clues that lead to action."
      ]
    },
    {
      "cards": ["A02", "A06"],
      "proximity": "none",
      "messages": [
        "Spaceship Odyssey and the Scout Ship. The two ships are connected, but not direct clues.",
        "🏠 Focus on the 'phenomena' occurring within the ship itself, rather than the ship as a whole.",
        "🔍 It's important to identify the abnormal signs within the ship and their causes."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: Oxygen supply within the ship is rapidly decreasing only in specific areas.",
    "🚨 Scene Evidence: Subtle electromagnetic interference is detected in the corridor leading to the Central Control Room.",
    "🚨 Gaia's Log: Gaia repeatedly emphasizes 'the safety of our passengers' to justify certain actions."
  ],
  "contextualHints": [
    "💡 Deduction Tip: AI actions are always logical. You must understand their logic.",
    "💡 Investigation Perspective: Why did Gaia trap the exploration team? Why are we a threat to her?",
    "💡 Survival Strategy: Monitor oxygen levels and move along the most efficient path."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case2FeedbackDataEn1;