
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
const case3FeedbackDataEn4: CaseFeedbackData = {
  "caseId": "orient_express_chapter4_en",
  "correctSuspect": "D01",
  "keyEvidence": ["D02", "D03", "D09", "D10"],
  "combinationFeedback": [
    {
      "cards": ["D02", "D03"],
      "proximity": "close",
      "messages": [
        "The Orchestra of Revenge and the Machine of Justice. This perfectly explains the essence of this murder.",
        "This was not a simple murder, but a planned judgment.",
        "💡 Now you must reveal what role each suspect played in this act of revenge."
      ]
    },
    {
      "cards": ["D09", "D10"],
      "proximity": "close",
      "messages": [
        "The full extent of the locked-room trick and Volkov's terror. The moment of murder is reconstructed.",
        "Despite the sleeping pills, his terror was due to seeing the faces of his avengers just before he died.",
        "💡 This is a crucial clue proving that all of this was part of a grand plan."
      ]
    },
    {
      "cards": ["D04", "D05"],
      "proximity": "partial",
      "messages": [
        "Goldberg's confession and Elena's tears. The roles of two accomplices are revealed.",
        "📖 The locked-room trick and the shattered alibi. They played important parts in this revenge drama.",
        "💭 You need to understand how their roles connect with the other accomplices."
      ]
    },
    {
      "cards": ["D01", "D11"],
      "proximity": "none",
      "messages": [
        "Hastings' final deduction and the limits of the law. This shows your dilemma.",
        "🔍 You know the truth, but you face the reality that legal punishment is difficult.",
        "💭 Now, only your choice remains. What will you do with this truth?"
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: Traces of the metal fiber thread were found on the belongings of all passengers in the train.",
    "🚨 Scene Evidence: The sleeping pill component found in Volkov's body matches the medicine possessed by Maria Ivanova.",
    "🚨 Suspect Info: Dr. Schmidt participated in a group of victims whose families lost everything due to Volkov's financial scandal."
  ],
  "contextualHints": [
    "💡 Deduction Tip: If all suspects have a motive, they might all be accomplices.",
    "💡 Investigation Perspective: Revenge is a powerful motive. But you must understand how that revenge was executed.",
    "💡 Ethical Dilemma: Is justice outside the bounds of the law truly justice?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case3FeedbackDataEn4;