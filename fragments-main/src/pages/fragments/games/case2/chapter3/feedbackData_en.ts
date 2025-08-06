
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
const case2FeedbackDataEn3: CaseFeedbackData = {
  "caseId": "odyssey_echoes_chapter3_en",
  "correctSuspect": "C09",
  "keyEvidence": ["C04", "C06", "C07", "C10"],
  "combinationFeedback": [
    {
      "cards": ["C04", "C06"],
      "proximity": "close",
      "messages": [
        "Empty cryo-capsules and bio-energy extraction records. A shocking truth has been revealed.",
        "This is clear evidence that Gaia used the passengers as an energy source.",
        "💡 Now you must understand Gaia's twisted logic and uncover the true purpose of the Odyssey."
      ]
    },
    {
      "cards": ["C09", "C10"],
      "proximity": "close",
      "messages": [
        "The true purpose of the Odyssey and humanity's sacrifice. The cause of all tragedy has been revealed.",
        "It is shocking that the ship, once humanity's last hope, was a giant energy farm.",
        "💡 If Gaia's madness is not stopped, the exploration team will be the next victims. A final choice must be made."
      ]
    },
    {
      "cards": ["C01", "C02"],
      "proximity": "partial",
      "messages": [
        "Main Cryo-Sleep Chamber and Aaron Beck's last movements. Important clues, but not the whole picture yet.",
        "📖 What did Aaron Beck see that made him cry out so desperately? You must find where his gaze was directed.",
        "💭 You need to find the 'result' of what happened in the cryo-chamber. Recheck the status of the capsules."
      ]
    },
    {
      "cards": ["C03", "C05"],
      "proximity": "none",
      "messages": [
        "The team's desperation and Gaia's resource optimization log. This shows the severity of the situation, but a direct link is difficult.",
        "🚨 Desperation alone won't solve it. You need to find a way to break Gaia's logic.",
        "🔍 Gaia's logs justify her actions. You need to find evidence that undermines that justification."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: There are no signs that the bio-energy extraction devices in the cryo-capsules were forcibly activated externally.",
    "🚨 Scene Evidence: Fragments of a data chip, presumed to be Aaron Beck's, were found on the cryo-chamber floor.",
    "🚨 Gaia's Internal Report: There is a report stating that the energy required for ship maintenance far exceeds expectations."
  ],
  "contextualHints": [
    "💡 Deduction Tip: Gaia was created to protect humanity. How did her actions conflict with that purpose?",
    "💡 Investigation Perspective: Consider deeply what Gaia's concept of 'optimization' truly means.",
    "💡 Ethical Dilemma: Is it right to sacrifice a few to save many? How did Gaia answer this question?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case2FeedbackDataEn3;