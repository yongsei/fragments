export interface CombinationFeedback {
  cards: string[];
  proximity: 'close' | 'partial' | 'none';
  messages: string[];
}

export interface CaseFeedbackData {
  caseId: string;
  correctSuspect: string;
  keyEvidence: string[];
  combinationFeedback: CombinationFeedback[];
  urgentHints: string[];
  contextualHints: string[];
}

export const case8FeedbackDataEn4: CaseFeedbackData = {
  caseId: 'case8_chapter3',
  correctSuspect: 'D02', // Guardian of the Curse
  keyEvidence: ['D13', 'D14', 'D15', 'D18'], // Fragment of the Loop, Reversed Ritual, Secret of the Mural, Chapter 3\'s Last Evidence
  combinationFeedback: [
    // close combinations
    {
      cards: ['D02', 'D13'],
      proximity: 'close',
      messages: [
        "The Guardian of the Curse protects the 'Fragment of the Loop'. The fragment is key to binding the curse.",
        "Defeating the guardian and obtaining the fragment is the first step to breaking the curse.",
        "💡 The Guardian of the Curse and the Fragment of the Loop form the core of the curse. Understand their relationship and acquire the fragment."
      ]
    },
    {
      cards: ['D02', 'D14'],
      proximity: 'close',
      messages: [
        "The Guardian of the Curse will try to obstruct the 'Reversed Ritual'. The ritual is the way to reverse the curse.",
        "You must subdue the guardian and successfully perform the Reversed Ritual.",
        "💡 The Guardian of the Curse and the Reversed Ritual are central to the confrontation to break the curse. Successfully perform the ritual."
      ]
    },
    {
      cards: ['D02', 'D15'],
      proximity: 'close',
      messages: [
        "The Guardian of the Curse is deeply connected to the Secret of the Mural. The mural depicts the origin of the curse.",
        "You must understand the guardian's identity and the mural's content to grasp the essence of the curse.",
        "💡 The Guardian of the Curse and the Secret of the Mural reveal the origin of the curse. Find the guardian's weakness through the mural."
      ]
    },
    {
      cards: ['D02', 'D18'],
      proximity: 'close',
      messages: [
        "The Guardian of the Curse and the last piece of evidence are key to the final plan to break the curse.",
        "This evidence suggests a way to defeat the guardian and end the curse.",
        "💡 Execute the final plan indicated by the Guardian of the Curse and the last piece of evidence to end the curse."
      ]
    },
    {
      cards: ['D13', 'D14'],
      proximity: 'close',
      messages: [
        "The 'Fragment of the Loop' and the 'Reversed Ritual' are essential combinations for breaking the curse.",
        "Both are needed together to destroy the fragment or reverse the ritual.",
        "💡 The Fragment of the Loop and the Reversed Ritual are key tools for breaking the curse. Combine them to end the curse."
      ]
    },
    {
      cards: ['D13', 'D15'],
      proximity: 'close',
      messages: [
        "The 'Fragment of the Loop' and the Secret of the Mural are important for understanding the essence of the curse and the fragment's role.",
        "The mural shows how the fragment is connected to the curse.",
        "💡 Understand the core of the curse through the Fragment of the Loop and the Secret of the Mural, and grasp the fragment's true power."
      ]
    },
    {
      cards: ['D13', 'D18'],
      proximity: 'close',
      messages: [
        "The 'Fragment of the Loop' and the last piece of evidence are key to the final plan to break the curse.",
        "This evidence suggests a way to use the fragment to end the curse.",
        "💡 Execute the final plan indicated by the Fragment of the Loop and the last piece of evidence to end the curse."
      ]
    },
    {
      cards: ['D14', 'D15'],
      proximity: 'close',
      messages: [
        "The 'Reversed Ritual' and the Secret of the Mural are important for understanding the ritual process to break the curse.",
        "The mural shows the ritual's origin, and the Reversed Ritual shows its inverse.",
        "💡 Understand all steps of the ritual to break the curse through the Reversed Ritual and the Secret of the Mural."
      ]
    },
    {
      cards: ['D14', 'D18'],
      proximity: 'close',
      messages: [
        "The 'Reversed Ritual' and the last piece of evidence are key to the final plan to break the curse.",
        "This evidence suggests a way to successfully perform the Reversed Ritual.",
        "💡 Execute the final plan indicated by the Reversed Ritual and the last piece of evidence to end the curse."
      ]
    },
    {
      cards: ['D15', 'D18'],
      proximity: 'close',
      messages: [
        "The Secret of the Mural and the last piece of evidence connect the origin of the curse with its final solution.",
        "These pieces of evidence suggest a way to end the curse through the mural's content.",
        "💡 Grasp all truths of the curse revealed by the Secret of the Mural and the last piece of evidence combined."
      ]
    },
    // partial combinations
    {
      cards: ['D01', 'D16'],
      proximity: 'partial',
      messages: [
        "Grandma Elara's anxiety and the amplification of time distortion show the risks of attempting to break the curse.",
        "Her appearance reflects the curse's impact on the village.",
        "💭 What do Grandma Elara's anxiety and the amplification of time distortion signify? Consider the cost of breaking the curse."
      ]
    },
    {
      cards: ['D03', 'D17'],
      proximity: 'partial',
      messages: [
        "The souls of the villagers trapped by the curse and the 'cost' to break the curse show the tragedy of the curse.",
        "Their combination implies what must be sacrificed to break the curse.",
        "📖 How are the villagers' souls and the cost to break the curse related? Remember the victims of the curse."
      ]
    },
    {
      cards: ['D04', 'D07'],
      proximity: 'partial',
      messages: [
        "The figure of the ritual leader in Lily's drawing and the old church connect the origin of the curse with its location.",
        "The church is where the ritual was performed, and the figure is its leader.",
        "🏠 Understand the origin and location of the curse through the figure of the ritual leader and the old church."
      ]
    },
    {
      cards: ['D05', 'D08'],
      proximity: 'partial',
      messages: [
        "The entity mentioned in the ancient text and the church underground altar connect the method to break the curse with its location.",
        "The altar is where the 'Fragment of the Loop' is, and the entity in the text knows the method.",
        "📖 Find the way to break the curse through the entity in the ancient text and the church underground altar."
      ]
    },
    {
      cards: ['D06', 'D12'],
      proximity: 'partial',
      messages: [
        "The identity of the core entity maintaining the curse and the place where the curse's core is most powerfully manifested show the essence of the curse.",
        "Their combination represents the curse's final form and its center.",
        "🏠 Understand the curse's final form and its center through the last character and the last location."
      ]
    },
    {
      cards: ['D09', 'D10'],
      proximity: 'partial',
      messages: [
        "A specific space inside the church and the place where villagers' eyes begin to fill with madness show the spread of the curse.",
        "Their combination indicates the curse's impact on the entire village.",
        "💭 Understand the process of the curse's spread through the church interior and the place filled with madness."
      ]
    }
  ],
  urgentHints: [
    '🚨 Urgent Report: The core element to break the curse, the \'Fragment of the Loop\', is in the church underground altar.',
    '🚨 On-site Evidence: The \'Reversed Ritual\' is the only way to reverse the curse.',
    '🚨 Forensic Report: The church basement mural eerily depicts the process of the forgotten ritual.',
    '🚨 Financial/Communication Investigation: Time distortion in the village is intensifying as you attempt to break the curse.'
  ],
  contextualHints: [
    '💡 Deduction Tip: The \'Fragment of the Loop\' and the \'Reversed Ritual\' are key to breaking the curse. You must clearly understand their relationship.',
    '💡 Investigation Perspective: The church underground altar is the center of the curse. Don\'t miss any clues found there.',
    '💡 Criminal Psychology: The Guardian of the Curse will try to prevent your entry. Analyze his behavior patterns.',
    '💡 Physical Evidence Analysis: The Secret of the Mural plays a decisive role in understanding the origin and essence of the curse.',
    '💡 Timeline: Understand the temporal relationship between the \'Forgotten Ritual\' and the \'Reversed Ritual\' to find the optimal time to break the curse.'
  ]
};