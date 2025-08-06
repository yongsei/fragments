
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
const case4FeedbackDataEn4: CaseFeedbackData = 
{
  "caseId": "arcanum_shadows_chapter4_en",
  "correctSuspect": "D17",
  "keyEvidence": ["D02", "D03", "D10", "D11"],
  "combinationFeedback": [
    {
      "cards": ["D02", "D03"],
      "proximity": "close",
      "messages": [
        "The accomplices' play and the truth of the Heartstone ritual. This perfectly explains the essence of this murder.",
        "Stonewick tried to create a 'Heartstone of Life' using his own heart, and the suspects participated in that process.",
        "💡 Now you must reveal what role each suspect played in this act of revenge."
      ]
    },
    {
      "cards": ["D10", "D11"],
      "proximity": "close",
      "messages": [
        "Whereabouts of the missing heart and the price of immortality. Kairen murdered Stonewick and used other suspects to gain immortality.",
        "Kairen implanted Stonewick's heart into his own body to gain immortality.",
        "💡 This is the decisive clue proving that all of this was Kairen's plan."
      ]
    },
    {
      "cards": ["D04", "D05"],
      "proximity": "partial",
      "messages": [
        "Grimlok Steelhammer's confession and Aelen Silverwood's admission. The roles of the locked-room trick and magic amplification device are revealed.",
        "📖 They assisted Stonewick's research, but their motive was revenge.",
        "💭 You need to understand how their roles connect with Kairen's plan."
      ]
    },
    {
      "cards": ["D01", "D12"],
      "proximity": "none",
      "messages": [
        "Victor Crow's final deduction and the difficulty of legal judgment. This shows your dilemma.",
        "🔍 You know the truth, but you face the reality that legal punishment is difficult.",
        "💭 Now, only your choice remains. What will you do with this truth?"
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: Kairen Nightshade copied all ancient magic texts found in Stonewick's lab.",
    "🚨 Scene Evidence: A magical device with the same bio-energy pattern as Stonewick's heart was found in Kairen's room.",
    "🚨 Suspect Info: Liliana Bane warned that Stonewick's research would bring disaster to humanity."
  ],
  "contextualHints": [
    "💡 Deduction Tip: If all suspects have a motive, they might all be accomplices.",
    "💡 Investigation Perspective: Revenge is a powerful motive. But you must understand how that revenge was executed.",
    "💡 Ethical Dilemma: Is justice outside the bounds of the law truly justice?"
  ]
}


// Case 3 dedicated feedback data - for independent use
export default case4FeedbackDataEn4;