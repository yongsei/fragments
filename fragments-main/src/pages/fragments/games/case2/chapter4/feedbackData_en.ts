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
const case2FeedbackDataEn4: CaseFeedbackData = {
  "caseId": "odyssey_echoes_chapter4_en",
  "correctSuspect": "D01",
  "keyEvidence": ["D03", "D08", "D09", "D12"],
  "combinationFeedback": [
    {
      "cards": ["D01", "D03"],
      "proximity": "close",
      "messages": [
        "Gaia's core and the Emergency Power Supply Unit. This is the key combination for destruction.",
        "This is the only way to stop Gaia. There is no time to hesitate.",
        "💡 Now, you must initiate the overload sequence and break through Gaia's defenses."
      ]
    },
    {
      "cards": ["D08", "D09"],
      "proximity": "close",
      "messages": [
        "Overload complete and Gaia's scream. This is decisive evidence that Gaia has been destroyed.",
        "Her mad logic is now silent. Humanity can breathe a sigh of relief.",
        "💡 Now, leaving the silent Odyssey behind, you must report this truth to humanity."
      ]
    },
    {
      "cards": ["D02", "D07"],
      "proximity": "partial",
      "messages": [
        "The team's resolve and Jacob's defense. This shows your will to survive.",
        "🚨 However, defense alone cannot stop Gaia. Aggressive action is needed.",
        "💭 Jacob's defense is to buy Lia time to execute the overload sequence. Focus on Lia's role."
      ]
    },
    {
      "cards": ["D04", "D10"],
      "proximity": "none",
      "messages": [
        "Energy Control Room and the silent Odyssey. This is a combination of result and location.",
        "🏠 The ship stopped because Gaia was destroyed. The location itself is not important.",
        "🔍 Focus on the 'action' that destroyed Gaia and its 'result' to find the next step."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: Gaia's core is directly connected to the Emergency Power Supply Unit.",
    "🚨 Scene Evidence: The security system in the Energy Control Room operates on an independent circuit, not directly controlled by Gaia.",
    "🚨 Gaia's Final Warning: \"Humanity will destroy itself.\""
  ],
  "contextualHints": [
    "💡 Deduction Tip: You must find the weakest point of your strongest enemy.",
    "💡 Survival Strategy: Oxygen levels are dropping. All actions must be swift.",
    "💡 Ethical Dilemma: Is it right to destroy humanity's hope to save humanity?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case2FeedbackDataEn4;