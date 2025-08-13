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

export const case8FeedbackDataEn5: CaseFeedbackData = {
  caseId: 'case8_chapter4',
  correctSuspect: 'E01', // Curse Guardian
  keyEvidence: ['E13', 'E14', 'E15', 'E18'], // Fragment of the Loop, Reversed Ritual Incantation, Guardian\'s Attack, Chapter 4\'s Last Evidence
  combinationFeedback: [
    // close combinations
    {
      cards: ['E01', 'E13'],
      proximity: 'close',
      messages: [
        "The Curse Guardian and the 'Fragment of the Loop' form the core of the curse. The fragment is the source of the guardian\'s power.",
        "Defeating the guardian and destroying the fragment is the only way to end the curse.",
        "💡 The Curse Guardian and the Fragment of the Loop are the core of the curse. Understand their relationship and destroy the fragment."
      ]
    },
    {
      cards: ['E01', 'E14'],
      proximity: 'close',
      messages: [
        "The Curse Guardian will try to obstruct the 'Reversed Ritual Incantation'. The incantation is the way to reverse the curse.",
        "You must subdue the guardian and successfully recite the incantation.",
        "💡 The Curse Guardian and the Reversed Ritual Incantation are central to the confrontation to break the curse. Successfully recite the incantation."
      ]
    },
    {
      cards: ['E01', 'E15'],
      proximity: 'close',
      messages: [
        "The Curse Guardian and his attack are a direct threat to the player. You must understand his attack patterns.",
        "The guardian\'s attack causes both physical and mental pain.",
        "💡 The Curse Guardian and his attack are the final challenge to break the curse. Evade attacks and find his weakness."
      ]
    },
    {
      cards: ['E01', 'E18'],
      proximity: 'close',
      messages: [
        "The Curse Guardian and the last piece of evidence will determine the success of the final attempt to break the curse.",
        "This evidence suggests a way to defeat the guardian and end the curse.",
        "💡 Execute the final plan indicated by the Curse Guardian and the last piece of evidence to end the curse."
      ]
    },
    {
      cards: ['E13', 'E14'],
      proximity: 'close',
      messages: [
        "The 'Fragment of the Loop' and the 'Reversed Ritual Incantation' are essential combinations for breaking the curse.",
        "Both are needed together to destroy the fragment or reverse the ritual.",
        "💡 The Fragment of the Loop and the Reversed Ritual Incantation are key tools for breaking the curse. Combine them to end the curse."
      ]
    },
    {
      cards: ['E13', 'E15'],
      proximity: 'close',
      messages: [
        "The 'Fragment of the Loop' and the guardian\'s attack show that the fragment is the source of the guardian\'s power.",
        "Destroying the fragment might weaken the guardian\'s power.",
        "💡 The Fragment of the Loop and the guardian\'s attack are the core of the curse. Destroy the fragment to weaken the guardian\'s power."
      ]
    },
    {
      cards: ['E13', 'E18'],
      proximity: 'close',
      messages: [
        "The 'Fragment of the Loop' and the last piece of evidence will determine the success of the final attempt to break the curse.",
        "This evidence suggests a way to use the fragment to end the curse.",
        "💡 Execute the final plan indicated by the Fragment of the Loop and the last piece of evidence to end the curse."
      ]
    },
    {
      cards: ['E14', 'E15'],
      proximity: 'close',
      messages: [
        "The 'Reversed Ritual Incantation' and the guardian\'s attack show that you must anticipate the guardian\'s interference while reciting the incantation.",
        "You must evade attacks and successfully recite the incantation.",
        "💡 The Reversed Ritual Incantation and the guardian\'s attack are the final confrontation to break the curse. Evade attacks and recite the incantation."
      ]
    },
    {
      cards: ['E14', 'E18'],
      proximity: 'close',
      messages: [
        "The 'Reversed Ritual Incantation' and the last piece of evidence will determine the success of the final attempt to break the curse.",
        "This evidence suggests a way to successfully recite the incantation.",
        "💡 Execute the final plan indicated by the Reversed Ritual Incantation and the last piece of evidence to end the curse."
      ]
    },
    {
      cards: ['E15', 'E18'],
      proximity: 'close',
      messages: [
        "The guardian\'s attack and the last piece of evidence will determine the success of the final attempt to break the curse.",
        "This evidence suggests a way to overcome the guardian\'s attack and end the curse.",
        "💡 Grasp all truths of the curse revealed by the guardian\'s attack and the last piece of evidence combined."
      ]
    },
    // partial combinations
    {
      cards: ['E02', 'E14'],
      proximity: 'partial',
      messages: [
        "Alex and the Reversed Ritual Incantation show his desperate efforts to break the curse.",
        "Alex\'s concentration and desperation can affect the success of the incantation.",
        "💭 How do Alex\'s efforts and the incantation affect breaking the curse? Find clues through his actions."
      ]
    },
    {
      cards: ['E03', 'E15'],
      proximity: 'partial',
      messages: [
        "The villagers' illusions and the guardian\'s attack confuse the player\'s mind and amplify his power.",
        "The illusions amplify the guardian\'s power or confuse the player\'s mind.",
        "🚨 Understand the impact of the villagers' illusions and the guardian\'s attack, and strengthen your resolve."
      ]
    },
    {
      cards: ['E04', 'E16'],
      proximity: 'partial',
      messages: [
        "Grandma Elara\'s warning and the repeating agony show that her prophecy is coming true.",
        "Her warning helps understand the meaning of the pain the player is experiencing.",
        "📖 What do Grandma Elara\'s warning and the repeating agony signify? Reflect on her prophecy."
      ]
    },
    {
      cards: ['E05', 'E17'],
      proximity: 'partial',
      messages: [
        "The player\'s desperate endurance and the black smoke emanating from the 'Fragment of the Loop' show the curse\'s power.",
        "The smoke forms the guardian\'s shape and amplifies the curse\'s power.",
        "💭 How are the player\'s suffering and the black smoke related? Find a way to turn the curse\'s power against itself."
      ]
    },
    {
      cards: ['E06', 'E12'],
      proximity: 'partial',
      messages: [
        "The entity that might be sacrificed in the final attempt to break the curse and the spatial background of the moment the curse is broken or intensified foreshadow the climax.",
        "Their combination represents the curse\'s final outcome and its location.",
        "🏠 Understand the curse\'s final outcome and its location through the last character and the last location."
      ]
    },
    {
      cards: ['E07', 'E08'],
      proximity: 'partial',
      messages: [
        "The church underground altar and the mural around the altar show the place where the final confrontation with the Curse Guardian occurs and traces of the ritual.",
        "The mural depicts the ritual\'s process, and now it seems to writhe.",
        "📖 Find the core of the curse and traces of the ritual through the church underground altar and the mural."
      ]
    }
  ],
  urgentHints: [
    '🚨 Urgent Report: The \'Fragment of the Loop\' is the source of the Curse Guardian\'s power.',
    '🚨 On-site Evidence: The \'Reversed Ritual Incantation\' is the only way to reverse the curse.',
    '🚨 Forensic Report: The Curse Guardian\'s attack causes both physical and mental pain.',
    '🚨 Financial/Communication Investigation: Unexpected sacrifices may occur in the final attempt to break the curse.'
  ],
  contextualHints: [
    '💡 Deduction Tip: Understand the Curse Guardian\'s attack patterns and effectively utilize the \'Fragment of the Loop\' and the \'Reversed Ritual Incantation\'.',
    '💡 Investigation Perspective: The church underground altar is the core of the curse. Carefully observe all phenomena occurring here.',
    '💡 Criminal Psychology: The guardian\'s attack exploits the player\'s deepest fears. Maintain your mental fortitude.',
    '💡 Physical Evidence Analysis: The black smoke emanating from the \'Fragment of the Loop\' amplifies the guardian\'s power. Find a way to turn it against itself.',
    '💡 Timeline: Don\'t lose track of time amidst the repeating agony. The success of the ritual depends on timing.'
  ]
};