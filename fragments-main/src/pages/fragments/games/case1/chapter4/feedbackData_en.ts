
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
const case1FeedbackDataEn4: CaseFeedbackData = {
  "caseId": "dark_fantasy_mystery_chapter4_en",
  "correctSuspect": "D05",
  "keyEvidence": ["D04", "D08", "D10", "D12"],
  "combinationFeedback": [
    {
      "cards": ["D05", "D10"],
      "proximity": "close",
      "messages": [
        "Valerius the Alchemist and the shattered souls. This is the definitive proof of his crimes.",
        "The soul fragments in his lab are a clear testament to the atrocities he committed.",
        "💡 Now, if you can uncover his motive and the reason for the Archbishop's murder, the whole truth will be revealed."
      ]
    },
    {
      "cards": ["D04", "D08"],
      "proximity": "close",
      "messages": [
        "The secret research journal and the reason for the Archbishop's murder. This is the starting point of all the tragedy.",
        "When his research was threatened, he murdered even his own patron, the Archbishop.",
        "💡 This is a crucial link that shows the extent of his twisted desires."
      ]
    },
    {
      "cards": ["D05", "D07"],
      "proximity": "close",
      "messages": [
        "Valerius the Alchemist and his motive for the crime. The root of all tragedy.",
        "His twisted desires sacrificed countless souls.",
        "💡 Now you must find the physical evidence to prove his crime. It will be in his laboratory."
      ]
    },
    {
      "cards": ["D09", "D11"],
      "proximity": "partial",
      "messages": [
        "The shadow's identity and its final struggle. It's threatening, but not the heart of the matter.",
        "⚕️ The shadow is merely the culprit's tool. You must defeat the master who controls it.",
        "💭 Don't be deceived by the phenomenon. Focus on the 'alchemist' who created the shadow."
      ]
    },
    {
      "cards": ["D02", "D04"],
      "proximity": "partial",
      "messages": [
        "The secret of the vacant children and the research journal. Important clues, but not yet a direct link to the culprit.",
        "📖 The journal tells you the 'method' of the crime, but not clearly 'who' did it.",
        "💭 Connect the contents of the journal with the children's condition to find evidence that confirms the culprit's identity."
      ]
    },
    {
      "cards": ["D01", "D03"],
      "proximity": "none",
      "messages": [
        "The director's office and your interrogation. It's not time yet.",
        "You cannot pressure the culprit without solid physical evidence.",
        "🔍 Search the room more thoroughly to find the decisive evidence that will put him in shackles."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: When Valerius was excommunicated, he published a heretical thesis on the 'weight of the soul'.",
    "🚨 Scene Evidence: An alchemical tool stained with the Archbishop's blood was found in the secret lab.",
    "🚨 Final Words: A subdued Valerius mutters, \"It was all a sacrifice for greater knowledge.\""
  ],
  "contextualHints": [
    "💡 Deduction Tip: The culprit likely sees his actions not as 'crimes', but as 'research'.",
    "💡 Investigation Perspective: Never confront the culprit directly until you have all the evidence.",
    "💡 Criminal Psychology: Extreme narcissists do not admit failure and will resist until the very end."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case1FeedbackDataEn4;