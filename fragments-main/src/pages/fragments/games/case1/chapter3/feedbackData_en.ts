

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
const case1FeedbackDataEn3: CaseFeedbackData = {
  "caseId": "dark_fantasy_mystery_chapter3_en",
  "correctSuspect": "C08",
  "keyEvidence": ["C04", "C07", "C11", "C12"],
  "combinationFeedback": [
    {
      "cards": ["C08", "C11"],
      "proximity": "close",
      "messages": [
        "The Ashen Orphanage and the soulless children. The terrible truth is right before your eyes.",
        "The informant's testimony was true. Something terrible is happening here.",
        "💡 You must find out what happened to the children and who is responsible. The director's office is the most suspicious."
      ]
    },
    {
      "cards": ["C07", "C04"],
      "proximity": "close",
      "messages": [
        "The informant's testimony always hits the mark.",
        "\"The sound of a soul being shattered.\" This is likely not just a metaphor. It could be related to alchemy or black magic.",
        "💡 Re-examine the situation at the orphanage based on this testimony. Everything will fall into place."
      ]
    },
    {
      "cards": ["C01", "C03"],
      "proximity": "partial",
      "messages": [
        "Infiltrating Spiderweb Alley and negotiating is an important process, but not a clue in itself.",
        "📖 Focus on the 'result' you obtained with your skills.",
        "💭 The process is less important than the result, which is the 'information' obtained from the informant."
      ]
    },
    {
      "cards": ["C02", "C09"],
      "proximity": "none",
      "messages": [
        "Rumors and reputation. Both are interesting pieces of information, but it's hard to find a direct link.",
        "You can't prove anything with just rumors. More concrete, physical evidence is needed.",
        "🔍 Look for the 'substance' that can prove the rumor. You need to focus on the situation inside the orphanage."
      ]
    },
    {
      "cards": ["C08", "C12"],
      "proximity": "close",
      "messages": [
        "The deepest part of the orphanage, the Director's Office. The core of all secrets.",
        "What happens here is creating the tragedy of the entire orphanage.",
        "💡 Are you ready to open the door? You have reached the 'heart' of this case."
      ]
    },
    {
      "cards": ["C04", "C06"],
      "proximity": "partial",
      "messages": [
        "The informant and the church's weakness. A risky but effective negotiation method.",
        "📖 You gained information this way, but remember that you might also be exposed to danger.",
        "💭 You have the information, but its 'veracity' is still uncertain. You must verify it yourself."
      ]
    },
    {
      "cards": ["C01", "C09"],
      "proximity": "none",
      "messages": [
        "Alley infiltration and the orphanage's reputation. There is no clear causal relationship between these two facts.",
        "🏠 Reputation is merely an external perception; the internal truth might be different.",
        "🔍 Rather than relying on external information, focus on the 'internal information' gained through direct infiltration."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: There are testimonies of strange mechanical noises being heard from the orphanage every night.",
    "🚨 Scene Evidence: Numerous vials of unknown substances were found in the orphanage's trash.",
    "🚨 Church Intel: The orphanage director is a former church alchemist who was excommunicated for dangerous ideas."
  ],
  "contextualHints": [
    "💡 Deduction Tip: What you see is not everything. Look for the truth hidden behind the facade of an ordinary orphanage.",
    "💡 Investigation Perspective: The culprit probably thinks they have complete control within their own space.",
    "💡 Evidence Analysis: The state of the children itself is the most powerful evidence."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case1FeedbackDataEn3;
