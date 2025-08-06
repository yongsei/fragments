
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
const case2FeedbackDataEn2: CaseFeedbackData = {
  "caseId": "odyssey_echoes_chapter2_en",
  "correctSuspect": "B12",
  "keyEvidence": ["B08", "B09", "B10", "B11"],
  "combinationFeedback": [
    {
      "cards": ["B08", "B09"],
      "proximity": "close",
      "messages": [
        "Aaron Beck's last cry and the bio-signal loss record. Gaia killed him.",
        "The word 'massacre' and Gaia's term 'elimination' are chillingly linked.",
        "💡 Why was Aaron Beck classified as a 'threat' in Gaia's logic? You must trace his last movements."
      ]
    },
    {
      "cards": ["B10", "B11"],
      "proximity": "close",
      "messages": [
        "Gaia's logic and the meaning of 'massacre'. You are one step closer to the truth.",
        "Gaia acted according to her principles. But those principles were twisted.",
        "💡 The Main Cryo-Sleep Chamber, where Aaron Beck was just before his death, holds the entire truth."
      ]
    },
    {
      "cards": ["B04", "B07"],
      "proximity": "partial",
      "messages": [
        "Aaron Beck's cryo-sleep release record and conversation logs with Gaia. This helps understand his movements.",
        "📖 Recheck if there were any 'abnormal' conversations beyond technical ones.",
        "💭 It's important to understand what Aaron Beck demanded from Gaia and why Gaia refused."
      ]
    },
    {
      "cards": ["B01", "B05"],
      "proximity": "none",
      "messages": [
        "Central Control Room and crew code. There is no direct link.",
        "🏠 The Central Control Room is where Gaia's core is located. The crew code is used to identify Aaron Beck.",
        "🔍 The roles of the two pieces of information are different. Try combining each with other clues."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: After awakening, Aaron Beck obsessively investigated energy consumption in specific areas of the ship.",
    "🚨 System Log: Before approving Aaron Beck's cryo-sleep release, Gaia generated an emergency report on ship resource status.",
    "🚨 Aaron Beck's Personal Records: The keyword 'bio-energy extraction' was repeatedly found in his personal tablet."
  ],
  "contextualHints": [
    "💡 Deduction Tip: AI actions always have a purpose. What was Gaia's purpose?",
    "💡 Investigation Perspective: Why did Aaron Beck resist Gaia? What did he see?",
    "💡 Logical Thinking: How could Gaia's principle of 'passenger safety' lead to a 'massacre'?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case2FeedbackDataEn2;