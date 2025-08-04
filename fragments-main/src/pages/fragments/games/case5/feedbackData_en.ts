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
const case5FeedbackData: CaseFeedbackData = {
  "caseId": "ashes_of_brasshelm_ch3",
  "correctSuspect": "C-C03",
  "keyEvidence": [
    "C-E05",
    "C-S11",
    "C-S12",
    "C-S16"
  ],
  "combinationFeedback": [
    {
      "cards": ["C-S11", "C-S12"],
      "proximity": "close",
      "messages": [
        "You've defeated the leader and destroyed the core. This is the best possible outcome.",
        "The source of all tragedy has finally been eliminated. Now, all that's left is to escape this hellish place.",
        "💡 With your choice, Brasshelm has been saved. But the price was far too high."
      ]
    },
    {
      "cards": ["C-C01", "C-E05"],
      "proximity": "close",
      "messages": [
        "Edwin has taken Lilia's last request to heart.",
        "This is more than just a last wish. It's the catalyst that shattered his cynicism and gave him a true reason to fight.",
        "💡 Edwin can now fight for someone other than himself. Use this emotion as fuel to confront the leader."
      ]
    },
    {
      "cards": ["C-E04", "C-S06"],
      "proximity": "close",
      "messages": [
        "The Steam-Beast and Isolde's analysis. You've pinpointed the monster's weakness.",
        "Attacking the beast itself is meaningless. All of its power is being supplied from the core.",
        "💡 You must focus on clearing a path to the core while your comrades hold off the beast."
      ]
    },
    {
      "cards": ["C-S09", "C-E05"],
      "proximity": "close",
      "messages": [
        "Lilia's sacrifice and her last words. This is the most tragic moment of the scenario.",
        "She gave her life to save a comrade and entrusted the protagonist with her final mission.",
        "💡 Don't let her sacrifice be in vain. You must honor her last wish and end this fight."
      ]
    },
    {
      "cards": ["C-S05", "C-S07"],
      "proximity": "close",
      "messages": [
        "Viktor blocks the beast, and Cassian clears the path. Perfect teamwork.",
        "Each member is performing their role to perfection. This is the path to victory.",
        "💡 All that's left is to face the leader and approach the core. Trust your team and move forward."
      ]
    },
    {
      "cards": ["C-C01", "C-S16"],
      "proximity": "close",
      "messages": [
        "Edwin walks towards a new horizon. He is no longer the man he used to be.",
        "He lost everything, but at the same time, he gained something. His inner self has clearly changed.",
        "💡 This is the end of the story you have created. You found a small glimmer of hope in tragedy."
      ]
    },
    {
      "cards": ["C-C02", "C-S02"],
      "proximity": "partial",
      "messages": [
        "You've infiltrated the fortress with your comrades. The operation is off to a good start.",
        "But this is the heart of the enemy's territory. There's no telling what dangers lie ahead.",
        "💭 You must always keep each comrade's role (tech, strength, science) in mind and make judgments appropriate to the situation."
      ]
    },
    {
      "cards": ["C-C03", "C-S03"],
      "proximity": "partial",
      "messages": [
        "You've confronted the Shadow Leader. His ideology is dangerous and fanatical.",
        "He believes in his own twisted sense of justice. It seems impossible to persuade him with words.",
        "💭 You might be able to find his weaknesses or hidden intentions by analyzing his words, but ultimately, you'll have to face him with force."
      ]
    },
    {
      "cards": ["C-E03", "C-S15"],
      "proximity": "partial",
      "messages": [
        "Edwin takes Lilia's wristwatch and leaves the city.",
        "📖 This wristwatch has become a symbol of Lilia's sacrifice and their bond. Edwin will never forget her.",
        "💭 His choice should be respected, but what will become of the remaining comrades and the ruined city?"
      ]
    },
    {
      "cards": ["C-L04", "C-E04"],
      "proximity": "partial",
      "messages": [
        "The Core Control Room and the Steam-Beast. The epicenter of the disaster.",
        "This monster is a product of the Spark's rampaging energy. If the core isn't controlled, something even more terrible could happen.",
        "💡 Instead of attacking the monster directly, you should consider how to target its power source, the core."
      ]
    },
    {
      "cards": ["C-C01", "C-S01"],
      "proximity": "partial",
      "messages": [
        "On the eve of the final battle, Edwin is strengthening his bond with his comrades.",
        "This time will be a great source of strength in the battle to come. Trust in each other is the best weapon.",
        "💡 The conversation with Lilia, in particular, will have a significant impact on the emotional arc of this chapter."
      ]
    },
    {
      "cards": ["C-L01", "C-L02"],
      "proximity": "none",
      "messages": [
        "The fortress exterior and the internal engine room. These are the locations where the operation takes place.",
        "🏠 The movement between locations shows the progression of the story, but combining these two places alone won't yield new information.",
        "🔍 It's more important to focus on 'who you met' and 'what happened' at each location. Try combining with character or event cards."
      ]
    },
    {
      "cards": ["C-E01", "C-E02"],
      "proximity": "none",
      "messages": [
        "The final plan and the security schematics. Both are important pieces of information, but the operation has already begun.",
        "This information has already served its purpose during the infiltration phase. Now, you must focus on the enemy in front of you.",
        "🔍 Making judgments based on the ever-changing battlefield situation is more necessary than reviewing the plan."
      ]
    },
    {
      "cards": ["C-C02", "C-C03"],
      "proximity": "none",
      "messages": [
        "The comrades and the Shadow Leader. A classic confrontation of good versus evil.",
        "They are irreconcilable beings. This combination only shows the obvious confrontational relationship and does not provide new hints.",
        "🔍 You need to combine specifically 'which' ability of your comrades to use and 'how' to use it against the leader."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Situation: The fortress has begun to collapse! You must hurry before the escape route is blocked!",
    "🚨 Core Instability: The core's energy wavelength is becoming increasingly unstable. There isn't much time left until it explodes!",
    "🚨 Viktor in Peril: An overload warning is blaring from Viktor's exosuit. It seems he has reached his limit.",
    "🚨 The Leader's Last Stand: Just before he falls, the Shadow Leader is trying to detonate all the surrounding steam pipes in a final, desperate act!"
  ],
  "contextualHints": [
    "💡 Final Battle Tip: In the final battle, using each comrade's unique ability at the right time and place is the key to victory.",
    "💡 Use the Environment: A head-on fight isn't the only answer when facing a powerful enemy. Use the unstable steam pipes or machinery around you.",
    "💡 The Meaning of Sacrifice: Sometimes, a comrade's sacrifice may be the only path to a greater victory. Don't let that sacrifice be in vain.",
    "💡 Emotional Choices: Rational judgment is important, but sometimes, a choice led by emotion can awaken the protagonist and open a new path.",
    "💡 Focus on the Objective: Don't be swayed by the monster in front of you or the enemy's provocations. Your final objective is only to 'destroy the core'."
  ]
}

// Case 5 dedicated feedback data - for independent use
export default case5FeedbackData;