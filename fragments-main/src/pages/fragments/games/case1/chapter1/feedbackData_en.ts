
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
const case1FeedbackDataEn1: CaseFeedbackData = {
  "caseId": "dark_fantasy_mystery_chapter1_en",
  "correctSuspect": "A10",
  "keyEvidence": ["A04", "A05", "A07", "A09"],
  "combinationFeedback": [
    {
      "cards": ["A10", "A04"],
      "proximity": "close",
      "messages": [
        "The missing chalice and the Archbishop's body... a strong connection is felt.",
        "Why would the culprit leave behind a soulless body and a memory-viewing chalice together?",
        "💡 The culprit's goal was not the 'murder' itself, but to confirm what the Archbishop 'saw'."
      ]
    },
    {
      "cards": ["A05", "A07"],
      "proximity": "close",
      "messages": [
        "A precise wound and strange magical residue. This is no ordinary case.",
        "This is a trace of a dark, twisted power, different from the church's holy magic.",
        "💡 Who could use this magic, and why leave such a trace? It shows the culprit's technical characteristics."
      ]
    },
    {
      "cards": ["A03", "A04"],
      "proximity": "partial",
      "messages": [
        "It seems the crows desecrated the body, but something is amiss.",
        "📖 The crows are merely a result, might the cause lie elsewhere?",
        "💭 If you are distracted by the crows, you might miss the truth. Focus on more fundamental clues."
      ]
    },
    {
      "cards": ["A02", "A08"],
      "proximity": "none",
      "messages": [
        "Both locations are related to the case, but there seems to be no direct link between them.",
        "🏠 The 'evidence' found at each location is what's important. Linking places together is meaningless.",
        "🔍 Focus on the evidence from the locations and try combining them again."
      ]
    },
    {
      "cards": ["A10", "A09"],
      "proximity": "close",
      "messages": [
        "The missing chalice and the empty reliquary. This combination clearly proves the theft.",
        "The culprit specifically targeted this chalice, touching nothing else.",
        "💡 This is strong evidence that the culprit knew of the chalice's power. It confirms a premeditated crime."
      ]
    },
    {
      "cards": ["A01", "A06"],
      "proximity": "partial",
      "messages": [
        "Your mission and the guard's testimony. This is useful information for the investigation.",
        "The 'strange song' could be related to a black magic incantation.",
        "💭 However, testimony alone is not enough. Look for 'physical evidence' left by this song."
      ]
    },
    {
      "cards": ["A03", "A07"],
      "proximity": "none",
      "messages": [
        "The crows and the magical residue. Both are ominous, but they don't seem directly related.",
        "The crows are on the body, the magic is in the space. Their causes could be different.",
        "🔍 It might be more efficient to treat them as separate phenomena and trace each cause individually."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: One of the guards claims to have heard a strange song from the spire the night before the incident.",
    "🚨 Scene Evidence: Traces of fine black magic residue were found under the Archbishop's fingernails.",
    "🚨 Church Intel: There are no records of the missing chalice being taken out recently."
  ],
  "contextualHints": [
    "💡 Deduction Tip: What was the culprit's motive? Murder, theft, or something more?",
    "💡 Investigation Perspective: Why are there no signs of a break-in? Consider the possibility of an inside job.",
    "💡 Evidence Analysis: All evidence points to one fact: this was a 'planned crime'."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case1FeedbackDataEn1;