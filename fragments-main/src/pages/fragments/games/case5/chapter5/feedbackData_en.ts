
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
const case5FeedbackDataEn5: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter5_en",
  "correctSuspect": "E08",
  "keyEvidence": ["E04", "E05", "E10", "E12"],
  "combinationFeedback": [
    {
      "cards": ["E04", "E05"],
      "proximity": "close",
      "messages": [
        "The beginning of the 'Great Cleansing' and the 'Monument to Forgotten Heroes'. Chronos's brutal history is revealed.",
        "They erased history and left their mark. This monument is the proof.",
        "💡 Identify Chronos's victims through the names on the monument and find their connections."
      ]
    },
    {
      "cards": ["E08", "E09"],
      "proximity": "close",
      "messages": [
        "Sarah's identity and 'Sarah's Rose'. She is the 'Guardian of Time' Chronos tried to stop.",
        "The rose embodies Sarah's strong will. Her very existence is a threat to Chronos.",
        "💡 You must find out what Sarah's lecture is about, and why Chronos tried to erase her very existence."
      ]
    },
    {
      "cards": ["E01", "E02"],
      "proximity": "partial",
      "messages": [
        "The reality of New York 2122 and the old man's existence. A witness to the desolate future.",
        "📖 The old man's testimony contains crucial information about Chronos's 'Great Cleansing'.",
        "💭 Through the old man's testimony, you must understand Chronos's modus operandi and the altered history."
      ]
    },
    {
      "cards": ["E03", "E17"],
      "proximity": "none",
      "messages": [
        "The concept of Guardians of Time and Lee Jin-woo's resolve. Your role and determination.",
        "🔍 Your resolve is important, but it's not a clue in itself. A concrete action plan is needed.",
        "💭 As a Guardian of Time, what is the first action you should take?"
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: According to the old man's testimony, Chronos initiated the 'Great Cleansing' in 2122 New York.",
    "🚨 Scene Evidence: Kim Min-jun's and Alistair Finch's names are engraved on the Monument to Forgotten Heroes.",
    "🚨 Kim Min-jun's Journal: The latter part of the journal contains an encrypted sequence for 'time rewind'."
  ],
  "contextualHints": [
    "💡 Deduction Tip: Why would Chronos try to erase the existence of specific individuals? What is their ultimate goal?",
    "💡 Investigation Perspective: If the future has already changed, what can we do? Where is the hope?",
    "💡 Ethical Dilemma: Is it truly right to change the past? What are the potential side effects?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackDataEn5;