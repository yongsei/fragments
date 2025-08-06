
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
const case5FeedbackDataEn8: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter8_en",
  "correctSuspect": "H01",
  "keyEvidence": ["H05", "H06", "H07", "H11"],
  "combinationFeedback": [
    {
      "cards": ["H05", "H06"],
      "proximity": "close",
      "messages": [
        "Pocket watch strike and agent's disappearance. Chronos is completely subdued.",
        "His mad logic is now silent. The shadow of time has lifted.",
        "💡 Now, ensure Sarah's lecture succeeds and present a new future to humanity."
      ]
    },
    {
      "cards": ["H07", "H11"],
      "proximity": "close",
      "messages": [
        "Time distortion phenomenon vanishes and Chronos's plan thwarted. The balance of time is restored.",
        "Sarah's lecture changed human perception and became a turning point that overturned Chronos's plan.",
        "💡 Now, humanity will embark on a new path to create its own future through its own choices."
      ]
    },
    {
      "cards": ["H01", "H04"],
      "proximity": "partial",
      "messages": [
        "Confrontation with the last agent and concentration of time distortion energy. A final desperate act.",
        "🚨 The agent gathers all energy to create a massive wave. A powerful attack.",
        "💭 You must subdue the agent by maximizing the pocket watch's power. No time to hesitate."
      ]
    },
    {
      "cards": ["H02", "H03"],
      "proximity": "none",
      "messages": [
        "Sarah's lecture (ongoing) and Alistair Finch's pocket watch. Your goal and your tool.",
        "🔍 The lecture is important, but subduing Chronos is the priority now.",
        "💭 The pocket watch is a weapon to subdue Chronos. It has no direct relation to the lecture."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: The last Chronos agent is gathering all time distortion energy to self-destruct.",
    "🚨 Scene Evidence: Sarah's passionate lecture has begun inside the museum lecture hall.",
    "🚨 Future Information: Sarah's lecture will be recorded as the most important lecture in human history."
  ],
  "contextualHints": [
    "💡 Deduction Tip: In the climax, all clues point to one goal. Focus on subduing Chronos.",
    "💡 Investigation Perspective: It's important to report the truth even after victory. Don't let Kim Min-jun's sacrifice be in vain.",
    "💡 Ethical Dilemma: Was it truly right to change the past for the future of humanity?"
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackDataEn8;