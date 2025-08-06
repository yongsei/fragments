
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
const case5FeedbackDataEn2: CaseFeedbackData = {
  "caseId": "shadows_of_time_chapter2_en",
  "correctSuspect": "B04",
  "keyEvidence": ["B05", "B06", "B10", "B12"],
  "combinationFeedback": [
    {
      "cards": ["B05", "B06"],
      "proximity": "close",
      "messages": [
        "'Temporal Resonance' theory and 'Echoes of Time'. Alistair Finch's research is key.",
        "The theory states that certain objects can resonate with points in time, creating echoes.",
        "💡 If you can detect and manipulate these echoes, you can get closer to the secret of time travel."
      ]
    },
    {
      "cards": ["B10", "B11"],
      "proximity": "close",
      "messages": [
        "A perfectly preserved dried rose and the rose's vision. This rose is not just a flower.",
        "The vision that flashed upon touching the rose is a memory from the Echoes of Time.",
        "💡 You must find out whose rose this is, and why it holds such powerful echoes of time."
      ]
    },
    {
      "cards": ["B01", "B07"],
      "proximity": "partial",
      "messages": [
        "Professor Alistair Finch and his disappearance. Hints at Chronos's intervention.",
        "📖 Finch was a pioneer in time dynamics. His disappearance might not be a simple missing person case.",
        "💭 Why did Chronos eliminate Finch? Was his research a threat to them?"
      ]
    },
    {
      "cards": ["B03", "B08"],
      "proximity": "none",
      "messages": [
        "Time Anomaly Detector and localized time distortion phenomenon. Detecting the phenomenon is important, but not the truth itself.",
        "🔍 You need to understand where this phenomenon occurred and what caused it.",
        "💭 You must find the 'cause' hidden behind the phenomenon. That cause will be the next clue."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: Notes found in Alistair Finch's lab mention the concept of a 'temporal anchor'.",
    "🚨 Scene Evidence: The time distortion energy detected from the dried rose matches a specific individual's bio-energy pattern.",
    "🚨 Future Information: One of the individuals scheduled to disappear in 2122 New York is a scientist named 'Sarah'."
  ],
  "contextualHints": [
    "💡 Deduction Tip: In time-travel murders, why the victim existed at a specific point in time is crucial.",
    "💡 Investigation Perspective: Why would Chronos try to 'optimize' history? What is their ultimate goal?",
    "💡 Time Paradox: A small change in the past can cause a massive butterfly effect in the future."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case5FeedbackDataEn2;