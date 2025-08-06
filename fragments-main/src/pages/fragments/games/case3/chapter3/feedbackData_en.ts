
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
const case3FeedbackDataEn3: CaseFeedbackData = {
  "caseId": "orient_express_chapter3_en",
  "correctSuspect": "C12",
  "keyEvidence": ["C04", "C09", "C10", "C11"],
  "combinationFeedback": [
    {
      "cards": ["C04", "C09"],
      "proximity": "close",
      "messages": [
        "The pulley device and the motive for revenge. The locked-room trick and the culprit's motive are connected.",
        "This device was not merely a tool, but a 'machine' for revenge.",
        "💡 Deduce how the cogwheel pattern on the dagger's hilt relates to this 'machine'."
      ]
    },
    {
      "cards": ["C10", "C11"],
      "proximity": "close",
      "messages": [
        "The meaning of the cogwheel pattern and the roles of the accomplices. This murder is a planned act of revenge.",
        "Their individual grudges combined to form a grand act of revenge.",
        "💡 All the truth has now been revealed. Who orchestrated this orchestra of revenge?"
      ]
    },
    {
      "cards": ["C05", "C08"],
      "proximity": "partial",
      "messages": [
        "The Schmidt family's bankruptcy and the sacrifice of Colonel Smith's son. These are individuals with grudges against Volkov.",
        "📖 Their grudges go beyond simple personal feelings. They are connected to Volkov's past misdeeds.",
        "💭 You must find the link that explains how their grudges led to murder."
      ]
    },
    {
      "cards": ["C01", "C02"],
      "proximity": "none",
      "messages": [
        "Hastings' insight and the secret of the metal fiber thread. Your deduction skills and a clue.",
        "🔍 While this clue itself is important, you need to combine it with other clues to form a larger picture.",
        "💭 Use your insight to deduce how this thread was used, and by whom."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: Volkov's financial scandal ruined countless families, including Dr. Schmidt's.",
    "🚨 Scene Evidence: The cogwheel pattern on the dagger's hilt matches the emblem of a specific mechanical engineering society.",
    "🚨 Suspect Info: Maria Ivanova knew of Volkov's insomnia and provided him with sleeping pills."
  ],
  "contextualHints": [
    "💡 Deduction Tip: If all suspects have a motive, the culprit might not be just one person.",
    "💡 Investigation Perspective: You must understand how past events influenced the current murder.",
    "💡 Psychological Analysis: How far can revenge drive a human being?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case3FeedbackDataEn3;