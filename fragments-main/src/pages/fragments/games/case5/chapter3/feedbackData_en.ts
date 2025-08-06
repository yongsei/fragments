
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
const case5FeedbackDataEn3: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter3_en",
  "correctSuspect": "C07",
  "keyEvidence": ["C05", "C08", "C09", "C12"],
  "combinationFeedback": [
    {
      "cards": ["C05", "C07"],
      "proximity": "close",
      "messages": [
        "The rose's vision and Sarah's identity. She is the 'Guardian of Time' Chronos tried to stop.",
        "Her very existence threatens Chronos's plan.",
        "💡 You must find out what Sarah's lecture is about, and why Chronos tried so hard to stop it."
      ]
    },
    {
      "cards": ["C08", "C09"],
      "proximity": "close",
      "messages": [
        "Sarah's lecture and Chronos's reason for eliminating Sarah. Everything is clear now.",
        "They didn't kill Sarah; they tried to erase her very existence from history.",
        "💡 Now we must save Sarah and protect her lecture. We need to find a way to 'rewind time'."
      ]
    },
    {
      "cards": ["C01", "C04"],
      "proximity": "partial",
      "messages": [
        "Sarah's Rose and the rose's time distortion energy. This shows the rose's special ability.",
        "📖 This rose is not just a catalyst. It contains Sarah's strong will.",
        "💭 You need to consider how to use this energy to reverse the flow of time."
      ]
    },
    {
      "cards": ["C02", "C03"],
      "proximity": "none",
      "messages": [
        "Alistair Finch's Temporal Resonance Theory and Kim Min-jun's journal. The theoretical background is important, but not a direct clue.",
        "🔍 Theory is just theory. You need to connect it to actual phenomena to find a concrete method.",
        "💭 Think about how these theories can be connected to 'time rewind'."
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
export default case5FeedbackDataEn3;