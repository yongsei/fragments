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
const case3FeedbackData: CaseFeedbackData = {
  "caseId": "ashes_of_brasshelm_ch1",
  "correctSuspect": "A-C05",
  "keyEvidence": [
    "A-E02",
    "A-E10",
    "A-E11",
    "A-E12"
  ],
  "combinationFeedback": [
    {
      "cards": ["A-C05", "A-E10"],
      "proximity": "close",
      "messages": [
        "There's a clear connection between the henchman and the uniform scrap he dropped.",
        "This uniform scrap is direct proof that the henchman was at the scene. Why was he there?",
        "💡 Focus on identifying the henchman and the organization he belongs to. It's worth comparing this with the victim's belongings."
      ]
    },
    {
      "cards": ["A-C05", "A-E02"],
      "proximity": "close",
      "messages": [
        "The henchman seems obsessed with this glowing cog.",
        "Why would he risk his life to retrieve this cog? It doesn't seem to be just a simple component.",
        "💡 Try to connect the special value of the cog to the identity of the organization that wants it. Cassian might know something."
      ]
    },
    {
      "cards": ["A-C05", "A-E11"],
      "proximity": "close",
      "messages": [
        "The henchman and the proof of an 'inside job'. The perpetrator's outline is becoming clear.",
        "He is likely just an enforcer acting on orders, not the mastermind of this incident.",
        "💡 Now you must uncover the truth about the organization the henchman belongs to, the 'Shadow of Steam'."
      ]
    },
    {
      "cards": ["A-C05", "A-E12"],
      "proximity": "close",
      "messages": [
        "You've confirmed that the henchman is a member of the 'Shadow of Steam'.",
        "He murdered a fellow researcher to protect the organization's secret. But what was the secret?",
        "💡 Think back to the victim's last words and the nature of the cog. The 'Spark' is the beginning of everything."
      ]
    },
    {
      "cards": ["A-E10", "A-E11"],
      "proximity": "close",
      "messages": [
        "Both pieces of evidence point to the same organization. This is a crucial discovery.",
        "The fact that the victim and the perpetrator belong to the same organization suggests this is an internal matter, not a simple murder.",
        "💡 You are very close to the truth of the 'Shadow of Steam'. You must find out what this organization really does."
      ]
    },
    {
      "cards": ["A-E11", "A-E12"],
      "proximity": "close",
      "messages": [
        "The full picture of the incident is coming into view. The name of the secret society and the evidence of an inside job are connected.",
        "Now you need to find out why the 'Shadow of Steam' would go as far as to kill a fellow researcher to hide something.",
        "💡 What is the organization's goal? The victim's last words, 'Spark', is the main keyword."
      ]
    },
    {
      "cards": ["A-E02", "A-E12"],
      "proximity": "close",
      "messages": [
        "The glowing cog and the 'Shadow of Steam'. The core elements of the case are linked.",
        "This secret society committed murder just to retrieve this small cog. That must mean it's incredibly important.",
        "💡 It seems you'll need an expert who can advise on the technical value or purpose of this cog."
      ]
    },
    {
      "cards": ["A-E07", "A-E11"],
      "proximity": "close",
      "messages": [
        "The victim and the perpetrator are from the same factory. A perfect connection of evidence.",
        "This confirms that the 'Alpha Steam-Works' factory is not just a company, but a den for a criminal organization.",
        "💡 Now you need to find out the true name and purpose of this organization. It's time to ask for Cassian's help."
      ]
    },
    {
      "cards": ["A-C04", "A-E09"],
      "proximity": "partial",
      "messages": [
        "Cassian certainly sees the value in the cog. What is his motive?",
        "📖 He's the type of person who would get involved in any dangerous business for money. But is he the culprit, or just an opportunist?",
        "💭 You can use his information network, but you shouldn't trust everything he says. Don't forget his motive is money."
      ]
    },
    {
      "cards": ["A-C01", "A-E05"],
      "proximity": "partial",
      "messages": [
        "Edwin is carefully examining the scene with his journalistic instincts.",
        "There must be more information hidden than what is immediately visible. You must suspect and investigate everything at the scene.",
        "💡 Through crime scene investigation, you might be able to find more of the victim's belongings or traces left by the perpetrator."
      ]
    },
    {
      "cards": ["A-C03", "A-E08"],
      "proximity": "partial",
      "messages": [
        "The bystander's testimony is helpful in understanding the circumstances of the incident.",
        "However, the witness is too frightened, so it's hard to fully trust the testimony's credibility. Is there a chance he saw something wrong?",
        "💭 You need to cross-verify the testimony with other physical evidence to clarify the facts."
      ]
    },
    {
      "cards": ["A-E01", "A-E03"],
      "proximity": "partial",
      "messages": [
        "The murder and the victim's last words. This is the starting point of the case.",
        "Just before he died, the victim left an important clue: 'Spark'. This must be the core of the case.",
        "💡 Finding out what the 'Spark' is is the first step of the investigation. Ask around."
      ]
    },
    {
      "cards": ["A-C04", "A-E12"],
      "proximity": "partial",
      "messages": [
        "Cassian seems to know a lot about the 'Shadow of Steam'.",
        "What is his relationship with this organization? Is he a simple informant, or is he more deeply involved?",
        "💭 He is a dangerous man, but for now, he is your only source of information. Use his information, but always be wary."
      ]
    },
    {
      "cards": ["A-E06", "A-E07"],
      "proximity": "partial",
      "messages": [
        "These are pieces of information about the victim's identity.",
        "To know why he was targeted by the organization, you need to find out what he was doing at the factory.",
        "💡 Focus on the fact that he was a 'researcher'. He might have been developing something important."
      ]
    },
    {
      "cards": ["A-L01", "A-L02"],
      "proximity": "none",
      "messages": [
        "The city of Brasshelm and the shabby inn. These are the settings for the incident.",
        "🏠 This inn is like a microcosm of the city. Various people come and go, creating rumors.",
        "🔍 Try to focus more on the 'events' or 'testimonies' that happened at the location, rather than the location itself."
      ]
    },
    {
      "cards": ["A-C01", "A-C02"],
      "proximity": "none",
      "messages": [
        "Edwin and the innkeeper. The meeting of the person who first encountered the case and the person with information.",
        "The innkeeper seems to know a lot, but he's playing it safe. It seems difficult to get a direct answer from him.",
        "🔍 It would be more effective to deduce the truth by connecting the 'rumors' he knows with other clues."
      ]
    },
    {
      "cards": ["A-L03", "A-L04"],
      "proximity": "none",
      "messages": [
        "The crime scene and the informant's hideout. Both are places that show the dark side of the city.",
        "🏠 The two places are not directly related, but it implies that there are many such dangerous places on the other side of Brasshelm.",
        "🔍 Focusing on the relationships between people and evidence will be more helpful in finding a breakthrough."
      ]
    },
    {
      "cards": ["A-C02", "A-C03"],
      "proximity": "none",
      "messages": [
        "The innkeeper and the bystander. Both are ordinary citizens who don't want to get involved in the incident.",
        "They won't be willing to say more than they know. It's hard to expect any more information.",
        "🔍 Now you should focus on the people at the center of the case, not ordinary citizens."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: An additional witness report has come in, stating they saw large men chasing someone in the alley.",
    "🚨 Crime Scene Evidence: Multiple sets of footprints, besides the victim's, have been found at the scene. There were at least two assailants.",
    "🚨 Organization's Movement: Intel suggests the 'Shadow of Steam' has recently significantly increased security at the 'Alpha Steam-Works' factory.",
    "🚨 Black Market Trends: Demand for unidentified, high-efficiency machine parts (similar to the cog) has recently surged on the black market."
  ],
  "contextualHints": [
    "💡 Deduction Tip: Every crime has a motive. Think about what the culprit tried to gain, or what they tried to hide.",
    "💡 Investigation Perspective: Clues that seem coincidental might actually be pointing to a single big picture. Try connecting the clues.",
    "💡 Character Analysis: Every character acts with their own purpose. Doubt whether their words are true or false.",
    "💡 Importance of Physical Evidence: Testimonies can be false, but physical evidence left at the scene does not lie.",
    "💡 Reconstruct the Timeline: If you organize the characters' actions before and after the incident in chronological order, you might find new contradictions."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case3FeedbackData;