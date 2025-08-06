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
const case5FeedbackDataEn1: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter1_en",
  "correctSuspect": "A13",
  "keyEvidence": ["A05", "A07", "A09", "A15"],
  "combinationFeedback": [
    {
      "cards": ["A02", "A05"],
      "proximity": "close",
      "messages": [
        "Kim Min-jun's body and the early 20th-century blade mark. Clear evidence of a time-travel murder.",
        "This mark is impossible with modern weapons. The culprit is a being who transcends time.",
        "💡 You must trace the owner of the blade that left this mark. It is likely a figure from the past."
      ]
    },
    {
      "cards": ["A07", "A15"],
      "proximity": "close",
      "messages": [
        "Kim Min-jun's paper fragment and the warning message from the future. The next target of the serial murder is clear.",
        "The culprit already knows of your existence. Time is not on your side.",
        "💡 You must identify the culprit's identity and motive before they commit the next murder."
      ]
    },
    {
      "cards": ["A03", "A06"],
      "proximity": "partial",
      "messages": [
        "The old pocket watch and the \"1888 London\" engraving. Points to a specific time in the past.",
        "📖 This watch is not just an artifact. It's a crucial clue related to time travel.",
        "💭 Deduce whose watch this is, and why it was next to Kim Min-jun's body."
      ]
    },
    {
      "cards": ["A01", "A04"],
      "proximity": "none",
      "messages": [
        "Detective Lee Jin-woo and Detective Park Jun-young. Your roles are important, but not clues in themselves.",
        "🔍 Focus on the 'physical evidence' found at the crime scene to find the next clue.",
        "💭 Use your deduction skills and teamwork to unravel this bizarre case."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: The design of an unfinished time travel device was found on Kim Min-jun's lab computer.",
    "🚨 Scene Evidence: The blade mark found on Kim Min-jun's body resembles the work of a specific craftsman popular in 19th-century London.",
    "🚨 Future Information: New York in 2122 is recorded as the site of the greatest technological revolution in human history."
  ],
  "contextualHints": [
    "💡 Deduction Tip: In time-travel murders, not only the culprit's motive but also the purpose of time travel is important.",
    "💡 Investigation Perspective: You must understand why a past artifact appeared at a present crime scene.",
    "💡 Time Paradox: Changing the past can twist the future. Approach with caution."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackDataEn1;