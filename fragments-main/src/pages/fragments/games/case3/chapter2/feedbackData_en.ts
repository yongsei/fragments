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
const case4FeedbackData: CaseFeedbackData = {
  "caseId": "ashes_of_brasshelm_ch2",
  "correctSuspect": "B-C05",
  "keyEvidence": [
    "B-E07",
    "B-E12",
    "B-S04",
    "B-S07"
  ],
  "combinationFeedback": [
    {
      "cards": ["B-C05", "B-E12"],
      "proximity": "close",
      "messages": [
        "Lilia and the fortress security schematics she possesses. This is the final piece of the puzzle.",
        "With these schematics, the seemingly impossible infiltration of the fortress can become a reality. Persuading her is paramount.",
        "💡 You must earn Lilia's trust. Prove that this fight is not just for revenge or profit, but for a greater cause."
      ]
    },
    {
      "cards": ["B-C03", "B-E07"],
      "proximity": "close",
      "messages": [
        "Dr. Isolde and the horrific report she revealed. This is the core evidence proving the Spark's danger.",
        "This report shows more than just a technical flaw; it reveals the inhumanity of the 'Shadow of Steam'.",
        "💡 This evidence will be crucial in persuading other allies and uniting the team's purpose."
      ]
    },
    {
      "cards": ["B-C04", "B-S04"],
      "proximity": "close",
      "messages": [
        "Viktor has joined the alliance for vengeance. You have gained a powerful ally.",
        "His strength and rage are essential for confronting the Shadow's forces head-on. He will be the team's shield.",
        "💡 Now, you must find the next ally to solve the technical problems that strength alone cannot overcome."
      ]
    },
    {
      "cards": ["B-E07", "B-E12"],
      "proximity": "close",
      "messages": [
        "The report on the Spark's danger and the fortress's security schematics. A perfect combination of information.",
        "One tells you 'Why' you must fight, and the other tells you 'How' to fight.",
        "💡 All the information is gathered. It is time to recruit the final member and establish the final plan based on this information."
      ]
    },
    {
      "cards": ["B-C03", "B-S02"],
      "proximity": "close",
      "messages": [
        "You have successfully earned Isolde's trust. You can now fully utilize her knowledge.",
        "She is the one who knows the Spark's weaknesses best. Her analysis will determine the success or failure of the operation.",
        "💡 Ask her everything about the Spark. More in-depth information, like schematics and reports, may be available."
      ]
    },
    {
      "cards": ["B-C01", "B-S04"],
      "proximity": "close",
      "messages": [
        "Edwin has persuaded Viktor to form an alliance. A significant force has been added to the team.",
        "It wasn't simple persuasion; you guided his vengeance towards a greater cause by presenting a common goal.",
        "💡 Try to see if you can use the information or connections Viktor has to move to the next step."
      ]
    },
    {
      "cards": ["B-C01", "B-S05"],
      "proximity": "partial",
      "messages": [
        "Edwin's and Lilia's ideals are clashing.",
        "Although they have different values, their goal is the same. You must resolve this conflict to move forward.",
        "💭 What Lilia values are 'the greater good' and 'sacrifice'. Show respect for her beliefs."
      ]
    },
    {
      "cards": ["B-C04", "B-E09"],
      "proximity": "partial",
      "messages": [
        "Viktor and his sister's locket. This is an important clue to understanding his motivations.",
        "All his anger stems from this small locket. He is not just a thug, but a wounded victim.",
        "💭 Rather than exploiting his desire for revenge, understanding and empathizing with his pain is the way to win his heart."
      ]
    },
    {
      "cards": ["B-C03", "B-E05"],
      "proximity": "partial",
      "messages": [
        "The rare energy crystal requested by Isolde. It's a test to earn her trust.",
        "⚕️ This crystal is a key material in Spark research. Obtaining it proves you have the courage to confront the Shadow directly.",
        "💡 Succeeding in this mission will allow you to get more from Isolde. But it is a very dangerous task, so be careful."
      ]
    },
    {
      "cards": ["B-C02", "B-E03"],
      "proximity": "partial",
      "messages": [
        "You've obtained information about Isolde's hideout through the informant. This is significant progress.",
        "However, you can't be 100% sure the information is accurate. You should consider the possibility of a trap.",
        "💡 Head to the location with the information, but always stay on your guard."
      ]
    },
    {
      "cards": ["B-E01", "B-L01"],
      "proximity": "partial",
      "messages": [
        "You are investigating the slums to find the defector scientist. This is the right direction.",
        "Searching aimlessly in these vast slums is inefficient. You need an ally who knows the lay of the land here.",
        "💡 You should narrow down the search area by using Cassian's information network or another informant here."
      ]
    },
    {
      "cards": ["B-L01", "B-L02"],
      "proximity": "none",
      "messages": [
        "The slums and the docks. Both are places that show the dark side of Brasshelm.",
        "🏠 Both places are under the influence of the Shadow, but it seems difficult to find a direct link.",
        "🔍 It's more effective to focus on the 'people' associated with or 'incidents' that occurred at each location."
      ]
    },
    {
      "cards": ["B-C01", "B-C02"],
      "proximity": "none",
      "messages": [
        "The investigation team and the slum informant. A typical relationship of trading information.",
        "The informant moves for money. It's hard to expect loyalty or conviction from him.",
        "🔍 The 'information' you get from him is important, not the relationship itself."
      ]
    },
    {
      "cards": ["B-L04", "B-L05"],
      "proximity": "none",
      "messages": [
        "The underground fighting pit and the resistance secret base. Both are spaces for forces opposing the Shadow, but they are different in nature.",
        "🏠 One symbolizes the venting of anger, the other an organized resistance. There seems to be no direct clue connecting the two places.",
        "🔍 A better approach might be to connect the 'people' belonging to these places with each other."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: A rumor is circulating that the Shadow has almost found the whereabouts of the defector scientist. You must hurry.",
    "🚨 Dock Trends: The Shadow has recently tightened security at the docks and significantly increased security at the warehouse where the 'energy crystals' are stored.",
    "🚨 Resistance News: One of the resistance's secret bases has reportedly been discovered by the Shadow, suffering heavy damage. Lilia may be more cautious.",
    "🚨 Viktor in Danger: Information suggests that assassins sent by the Shadow have appeared at the underground fighting pit. Viktor is in danger."
  ],
  "contextualHints": [
    "💡 Persuasion Tip: Everyone has values they hold dear. Identify your counterpart's motivation (revenge, atonement, conviction) and appeal to it.",
    "💡 Earning Trust: Sometimes, a single act of risk-taking builds more trust than a hundred words.",
    "💡 Importance of Teamwork: It's important to gather allies with different skills. Look for comrades who can fill in the gaps, such as science, strength, or technology.",
    "💡 The Value of Information: Information is important in itself, but its value changes depending on who you get it from and how you use it.",
    "💡 Conflict Management: Internal team conflict is the greatest threat to your goal. Resolve conflicts by reminding everyone of the common objective."
  ]
}

// Case 4 dedicated feedback data - for independent use
export default case4FeedbackData;