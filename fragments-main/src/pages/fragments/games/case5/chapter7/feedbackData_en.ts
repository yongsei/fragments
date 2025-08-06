
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
const case5FeedbackDataEn7: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter7_en",
  "correctSuspect": "G11",
  "keyEvidence": ["G07", "G08", "G12", "G15"],
  "combinationFeedback": [
    {
      "cards": ["G07", "G08"],
      "proximity": "close",
      "messages": [
        "Suit's weakness and Alistair Finch's pocket watch. The key combination to subdue Chronos agents.",
        "You can overload the agent's suit by injecting the pocket watch's time energy.",
        "💡 Attack without hesitation now. Time is not on your side."
      ]
    },
    {
      "cards": ["G12", "G15"],
      "proximity": "close",
      "messages": [
        "Data chip discovered and the importance of Sarah's lecture. The core of the Chronos Protocol is revealed.",
        "You realize Sarah's lecture will change human perception and overturn Chronos's plan.",
        "💡 Now you must instruct Sarah to go to the lecture hall and begin her lecture. She is humanity's hope."
      ]
    },
    {
      "cards": ["G01", "G05"],
      "proximity": "partial",
      "messages": [
        "Confrontation with Chronos agents and time distortion attack. A dangerous situation.",
        "🚨 Agents manipulate the flow of surrounding time to accelerate or decelerate movements. You must understand their attack patterns.",
        "💭 The stun gun is useless. You need to find another way. There must be a weakness in their suits."
      ]
    },
    {
      "cards": ["G02", "G03"],
      "proximity": "none",
      "messages": [
        "Sarah's safety and time distortion energy analysis. Your role and Lia's role.",
        "🔍 Lia's analysis is important, but it alone cannot subdue the agents. A concrete action plan is needed.",
        "💭 While protecting Sarah, you must find a way to subdue the agents by exploiting their weaknesses."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: A small data chip was found in the fallen Chronos agent's suit.",
    "🚨 Scene Evidence: Chronos agents' suits have a cogwheel pattern engraved on them.",
    "🚨 Future Information: Sarah's lecture is scheduled to take place at the Museum of Future Technology in New York 2122."
  ],
  "contextualHints": [
    "💡 Deduction Tip: A culprit's weakness often stems from their greatest strength.",
    "💡 Investigation Perspective: Why would Chronos try to stop Sarah's lecture? What is their ultimate goal?",
    "💡 Survival Strategy: To counter time distortion attacks, you must understand the flow of time."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackDataEn7;