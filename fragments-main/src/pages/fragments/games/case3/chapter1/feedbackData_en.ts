
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
const case3FeedbackDataEn1: CaseFeedbackData = {
  "caseId": "orient_express_chapter1_en",
  "correctSuspect": "A01",
  "keyEvidence": ["A04", "A05", "A06"],
  "combinationFeedback": [
    {
      "cards": ["A02", "A03"],
      "proximity": "close",
      "messages": [
        "Volkov's cabin and the body. This is the core of the case.",
        "Clues to the locked-room murder are hidden within.",
        "💡 Investigate the body and the cabin more closely to find the murder weapon and any peculiarities."
      ]
    },
    {
      "cards": ["A02", "A04"],
      "proximity": "close",
      "messages": [
        "The cabin and the dagger. A direct link between the crime scene and the murder weapon.",
        "The pattern on the dagger's hilt and the scratch mark on the inner door are crucial clues to the locked-room trick.",
        "💡 You can deduce the culprit's characteristics or the method of the locked-room trick from the dagger's pattern and the scratch mark."
      ]
    },
    {
      "cards": ["A01", "A07"],
      "proximity": "partial",
      "messages": [
        "Sir Arthur Hastings and Countess Elena de Valois. The beginning of the suspect interrogation.",
        "📖 The Countess's alibi seems perfect, but a hint of unease flickers in her eyes.",
        "💭 Look for subtle inconsistencies in her statements and behavior."
      ]
    },
    {
      "cards": ["A03", "A05"],
      "proximity": "none",
      "messages": [
        "The body and the letter fragment. Both are important clues, but a direct connection is difficult.",
        "The letter fragment might be related to Volkov's past. It should be approached separately from the body.",
        "🔍 Focusing on the content of the letter fragment to trace Volkov's past might be more efficient."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: Volkov's cabin windows are double-paned, making outside noise almost inaudible.",
    "🚨 Scene Evidence: The pattern on the dagger's hilt is very small and worn, making it difficult to identify with the naked eye.",
    "🚨 Suspect Info: Maria Ivanova is known to know all of Volkov's secrets."
  ],
  "contextualHints": [
    "💡 Deduction Tip: In a locked-room murder, how the culprit exited the room is key.",
    "💡 Investigation Perspective: The more perfect an alibi seems, the more suspicious it should be.",
    "💡 Psychological Analysis: The terror on the victim's face suggests he was gripped by fear until his last moment."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case3FeedbackDataEn1;