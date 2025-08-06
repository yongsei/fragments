
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
const case3FeedbackDataEn2: CaseFeedbackData = {
  "caseId": "orient_express_chapter2_en",
  "correctSuspect": "B01",
  "keyEvidence": ["B09", "B10", "B11", "B12"],
  "combinationFeedback": [
    {
      "cards": ["B10", "B11"],
      "proximity": "close",
      "messages": [
        "The thin thread fragment and the scratch mark on the inner door. The core of the locked-room trick is revealed.",
        "The culprit used this thread to lock the door from the inside, exited, and then retrieved the thread.",
        "💡 Look for other clues related to this thread. It is likely part of the murder weapon."
      ]
    },
    {
      "cards": ["B09", "B12"],
      "proximity": "close",
      "messages": [
        "The small metal piece and the dagger's cogwheel pattern. Pointing to a specific suspect.",
        "This metal piece is part of the device used in the locked-room trick, and it connects to the dagger's pattern.",
        "💡 These clues suggest the culprit is skilled in mechanics. Which suspect is mechanically inclined?"
      ]
    },
    {
      "cards": ["B04", "B07"],
      "proximity": "partial",
      "messages": [
        "Elena's exotic perfume and Maria's medicine scent. There might be some connection between the two female suspects.",
        "📖 Remember that both scents were present in Volkov's cabin. Is it a coincidence?",
        "💭 You cannot rule out the possibility that the two confirmed each other's alibis at the time of the incident."
      ]
    },
    {
      "cards": ["B02", "B08"],
      "proximity": "none",
      "messages": [
        "Train corridor and Colonel Smith's old map. There is no direct connection.",
        "🏠 The map shows the Colonel's past and Volkov's grudge. It has no relation to the corridor.",
        "🔍 It's more important to focus on the map's content to understand the Colonel's hidden motive."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: The thread fragment clutched in Volkov's hand is made of a very thin and tough metal fiber.",
    "🚨 Scene Evidence: A small gap, just wide enough for a thread to pass through, was found directly below the doorknob of Volkov's cabin.",
    "🚨 Suspect Info: Samuel Goldberg had a hobby of repairing intricate watches in the past."
  ],
  "contextualHints": [
    "💡 Deduction Tip: Locked-room tricks always involve a device that can be manipulated from the outside.",
    "💡 Investigation Perspective: Clues found in the suspects' cabins hint at their hidden motives.",
    "💡 Psychological Analysis: A perfect alibi often hides the biggest lie."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case3FeedbackDataEn2;