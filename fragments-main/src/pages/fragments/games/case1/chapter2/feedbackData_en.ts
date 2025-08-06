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
const case1FeedbackDataEn2: CaseFeedbackData = {
  "caseId": "dark_fantasy_mystery_chapter2_en",
  "correctSuspect": "B07",
  "keyEvidence": ["B01", "B06", "B10", "B12"],
  "combinationFeedback": [
    {
      "cards": ["B07", "B01"],
      "proximity": "close",
      "messages": [
        "The bizarre rumor and the Archbishop's secret research. The case is finally starting to unravel.",
        "Why was the Archbishop researching this dangerous rumor alone?",
        "💡 Uncovering the truth of the rumor was likely the last thing the Archbishop tried to do before he died."
      ]
    },
    {
      "cards": ["B10", "B12"],
      "proximity": "close",
      "messages": [
        "Spiderweb Alley and the source of the rumor. The objective is now clear.",
        "The 'Ashen Orphanage' pointed out by the informant. All secrets are hidden there.",
        "💡 The next step is clear. Go to the orphanage and see for yourself."
      ]
    },
    {
      "cards": ["B04", "B05"],
      "proximity": "partial",
      "messages": [
        "The slums and the shelter are important places, but not the core of the case.",
        "🏠 Think again about what 'information' you obtained from these places.",
        "💭 Don't get tied down by the location. Follow the intangible clue of the 'rumor' you obtained there."
      ]
    },
    {
      "cards": ["B02", "B03"],
      "proximity": "none",
      "messages": [
        "The whereabouts of the chalice and your deduction. There is not enough information to connect them yet.",
        "A hasty conclusion is dangerous. More concrete evidence is needed.",
        "🔍 Focus on concrete testimony or locations obtained on foot, rather than abstract concepts."
      ]
    },
    {
      "cards": ["B06", "B07"],
      "proximity": "close",
      "messages": [
        "The rumor is confirmed by the shelter manager's testimony.",
        "This shows how seriously the Archbishop was taking this rumor.",
        "💡 Now you need to find an expert who treats this rumor as 'information'. This cannot be solved through official channels."
      ]
    },
    {
      "cards": ["B01", "B02"],
      "proximity": "partial",
      "messages": [
        "The Archbishop's research and the missing chalice. Both are important facts, but a direct link is not yet visible.",
        "📖 Did the Archbishop use the chalice for his research? Or was the chalice stolen because of his research?",
        "💭 You need to figure out the sequence of events. What is the cause and what is the effect?"
      ]
    },
    {
      "cards": ["B03", "B08"],
      "proximity": "none",
      "messages": [
        "Your deduction and the terror of the rumor. This is merely an impression for now.",
        "Fear as an emotion cannot be evidence. You must find the 'cause' of that fear.",
        "🔍 A rational approach to trace the source of the rumor is needed, rather than an emotional one."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: There have been frequent cases of missing children in the slums recently.",
    "🚨 Church Intel: Records show the Archbishop donated a large sum of money to the 'Ashen Orphanage'.",
    "🚨 Back-Alley Rumor: The informant in Spiderweb Alley never leaks information that isn't profitable."
  ],
  "contextualHints": [
    "💡 Deduction Tip: Sometimes, the most absurd rumors hold the truth.",
    "💡 Investigation Perspective: Why did the Archbishop act alone, without the church's help?",
    "💡 Criminal Psychology: The culprit may be an arrogant individual who believes they can erase their tracks perfectly."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case1FeedbackDataEn2;