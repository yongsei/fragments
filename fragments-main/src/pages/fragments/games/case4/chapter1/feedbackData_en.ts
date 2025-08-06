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
const case4FeedbackDataEn1: CaseFeedbackData = {
  "caseId": "arcanum_shadows_chapter1_en",
  "correctSuspect": "A04",
  "keyEvidence": ["A04", "A05", "A06", "A07"],
  "combinationFeedback": [
    {
      "cards": ["A02", "A04"],
      "proximity": "close",
      "messages": [
        "Elijah Stonewick's body and the missing heart. The core of the case and the culprit's objective.",
        "The heart's mysterious disappearance means this is no ordinary murder.",
        "💡 The culprit targeted Stonewick's heart. Why did they take it?"
      ]
    },
    {
      "cards": ["A05", "A06"],
      "proximity": "close",
      "messages": [
        "The cracked magic staff and the faintly glowing crystal shard. Proves a magical murder.",
        "The crystal shard is a fragment of a magic amplification device. It must have amplified the staff's power to extract the heart.",
        "💡 Who used this device, and why did they use such a precise method?"
      ]
    },
    {
      "cards": ["A08", "A09"],
      "proximity": "partial",
      "messages": [
        "A dried red petal and a silver coin with an unknown emblem. Traces of ancient magic and Dwarven lore.",
        "📖 The Blood Rose is used in life energy absorption rituals, and the coin symbolizes a heart-destroying weapon.",
        "💭 Deduce how these clues connect to the missing heart."
      ]
    },
    {
      "cards": ["A10", "A11"],
      "proximity": "none",
      "messages": [
        "Aelen Silverwood, Elf Sorceress, and Grimlok Steelhammer, Dwarf Engineer. They are suspects.",
        "🔍 They were rivals of Stonewick, but there's no direct evidence of murder yet.",
        "💭 You need to delve deeper into their alibis and their relationship with Stonewick."
      ]
    }
  ],
  "urgentHints": [
    "🚨 Urgent Tip: Stonewick's lab's magic barrier perfectly blocked external intrusion.",
    "🚨 Scene Evidence: The worn leather pouch clutched in Stonewick's hand is not his personal item.",
    "🚨 Suspect Info: Kairen Nightshade is the only one who knows all of Stonewick's research and secrets."
  ],
  "contextualHints": [
    "💡 Deduction Tip: In a locked-room murder, how the culprit exited the room is key.",
    "💡 Investigation Perspective: Magic doesn't leave evidence is a misconception. Magical traces are also clues.",
    "💡 Psychological Analysis: The missing heart is not just an organ. It hints at the culprit's motive."
  ]
}

// Case 3 dedicated feedback data - for independent use
export default case4FeedbackDataEn1;