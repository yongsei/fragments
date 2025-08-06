
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
const case5FeedbackDataEn4: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter4_en",
  "correctSuspect": "D01",
  "keyEvidence": ["D04", "D05", "D06", "D13"],
  "combinationFeedback": [
    {
      "cards": ["D04", "D05"],
      "proximity": "close",
      "messages": [
        "Time tunnel generation and its instability. A risky but the only way.",
        "The probability of reaching the exact destination is low, but you must try.",
        "💡 Now, you must take the risk of a time paradox and begin your leap into the future."
      ]
    },
    {
      "cards": ["D07", "D13"],
      "proximity": "close",
      "messages": [
        "Arrival in New York 2122 and the appearance of Chronos. This future is different from what was expected.",
        "They have already 'corrected' something here. And they are waiting for you.",
        "💡 You must identify Chronos's true nature and find their weakness. The clue might be in their suits."
      ]
    },
    {
      "cards": ["D08", "D09"],
      "proximity": "partial",
      "messages": [
        "Desolate future New York and the giant monument. A tragic result of Chronos's intervention.",
        "📖 The names engraved on the monument are those whose history was erased by Chronos.",
        "💭 You must find out why this monument was erected, and who remembers this tragedy."
      ]
    },
    {
      "cards": ["D01", "D02"],
      "proximity": "none",
      "messages": [
        "Preparing for the leap of faith and the unfinished time travel device. Your will and your tool.",
        "🔍 The device itself is important, but you must focus on the 'energy' and 'catalyst' that power it.",
        "💭 You need to consider how to utilize the rose's energy and how to stabilize the time tunnel."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: A subtle time distortion energy is continuously emitted from Chronos agents' suits.",
    "🚨 Scene Evidence: A small data chip was found in the fallen Chronos agent's suit.",
    "🚨 Future Information: Sarah's lecture is scheduled to take place at the Museum of Future Technology in New York 2122."
  ],
  "contextualHints": [
    "💡 Deduction Tip: The culprit always leaves traces. Look for clues in Chronos agents' suits.",
    "💡 Investigation Perspective: If the future has changed, your goal must also change. Saving Sarah is the top priority.",
    "💡 Survival Strategy: Oxygen levels are dropping. All actions must be swift."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackDataEn4;