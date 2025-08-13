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

export const case8FeedbackDataEn6: CaseFeedbackData = {
  caseId: 'case8_chapter5',
  correctSuspect: 'F15', // Cleared Fog
  keyEvidence: ['F13', 'F14', 'F15', 'F16', 'F18'], // Dispersed Guardian, Ordinary Fragment, Cleared Fog, Lily\'s New Drawing, Chapter 5\'s Last Evidence
  combinationFeedback: [
    // close combinations
    {
      cards: ['F15', 'F13'],
      proximity: 'close',
      messages: [
        "The fog-cleared village and the dispersed guardian clearly show that the curse has been completely lifted.",
        "The guardian\'s disappearance is the direct cause of the fog clearing.",
        "💡 The clearing fog and the vanished guardian mean the curse has ended. Savor this victory."
      ]
    },
    {
      cards: ['F15', 'F14'],
      proximity: 'close',
      messages: [
        "The fog-cleared village and the ordinary 'Fragment of the Loop' prove that the curse\'s power has completely vanished.",
        "The fragment\'s change is decisive evidence that the curse has been broken.",
        "💡 The clearing fog and the ordinary fragment mean the curse\'s power has dissipated. Confirm the remnants of the curse."
      ]
    },
    {
      cards: ['F15', 'F16'],
      proximity: 'close',
      messages: [
        "The fog-cleared village and Lily\'s new drawing symbolize liberation from the curse and a new beginning.",
        "Lily\'s change reflects the village\'s transformation.",
        "💡 The clearing fog and Lily\'s changed drawing mean liberation from the curse. Seek new hope."
      ]
    },
    {
      cards: ['F15', 'F18'],
      proximity: 'close',
      messages: [
        "The fog-cleared village and the last piece of evidence show the scars remaining even after the curse is lifted.",
        "The curse has ended, but its impact still lingers.",
        "💡 Understand the true cost of the curse revealed by the fog-cleared village and the last piece of evidence combined."
      ]
    },
    {
      cards: ['F13', 'F14'],
      proximity: 'close',
      messages: [
        "The dispersed guardian and the ordinary 'Fragment of the Loop' prove that the core of the curse has been completely destroyed.",
        "The guardian\'s disappearance and the fragment\'s change mean the curse has ended.",
        "💡 The vanished guardian and the ordinary fragment mean the core of the curse has been destroyed. Confirm the curse\'s demise."
      ]
    },
    {
      cards: ['F13', 'F16'],
      proximity: 'close',
      messages: [
        "The dispersed guardian and Lily\'s new drawing symbolize liberation from the curse and the restoration of innocence.",
        "The guardian\'s disappearance made Lily\'s change possible.",
        "💡 The vanished guardian and Lily\'s changed drawing mean liberation from the curse. Celebrate the restoration of innocence."
      ]
    },
    {
      cards: ['F13', 'F18'],
      proximity: 'close',
      messages: [
        "The dispersed guardian and the last piece of evidence show the scars remaining even after the curse is lifted.",
        "The guardian\'s disappearance ended the curse, but the scars gained in the process cannot be erased.",
        "💡 Understand the true cost of the curse revealed by the vanished guardian and the last piece of evidence combined."
      ]
    },
    {
      cards: ['F14', 'F16'],
      proximity: 'close',
      messages: [
        "The ordinary 'Fragment of the Loop' and Lily\'s new drawing symbolize the disappearance of the curse\'s power and the beginning of new hope.",
        "The fragment\'s change made Lily\'s change possible.",
        "💡 The ordinary fragment and Lily\'s changed drawing mean the end of the curse and a new beginning. Seek hope."
      ]
    },
    {
      cards: ['F14', 'F18'],
      proximity: 'close',
      messages: [
        "The ordinary 'Fragment of the Loop' and the last piece of evidence show the scars remaining even after the curse is lifted.",
        "The fragment\'s change ended the curse, but the scars gained in the process cannot be erased.",
        "💡 Understand the true cost of the curse revealed by the ordinary fragment and the last piece of evidence combined."
      ]
    },
    {
      cards: ['F16', 'F18'],
      proximity: 'close',
      messages: [
        "Lily\'s new drawing and the last piece of evidence simultaneously show liberation from the curse and the scars gained in the process.",
        "Lily\'s change symbolizes hope, and the evidence symbolizes the cost.",
        "💡 Understand the liberation from the curse and its cost revealed by Lily\'s new drawing and the last piece of evidence combined."
      ]
    },
    // partial combinations
    {
      cards: ['F01', 'F07'],
      proximity: 'partial',
      messages: [
        "The player and Alex witnessing the fog-cleared village shows that their efforts have borne fruit.",
        "The village\'s transformation reflects their sacrifice and effort.",
        "💭 The fog has cleared thanks to your efforts. Confirm your achievement through the village\'s transformation."
      ]
    },
    {
      cards: ['F02', 'F17'],
      proximity: 'partial',
      messages: [
        "The villagers' changed gaze after the curse is lifted signifies liberation from the curse.",
        "Their eyes have regained serenity, but fatigue still remains.",
        "📖 Understand the curse\'s impact on the villagers through their eyes, and observe their recovery."
      ]
    },
    {
      cards: ['F03', 'F08'],
      proximity: 'partial',
      messages: [
        "Grandma Elara watching the players emerge from the altar shows that her prophecy has come true.",
        "The altar is where the curse was broken, and Grandma Elara witnessed the process.",
        "🏠 Reflect on the meaning of the moment the curse was broken through Grandma Elara and the altar."
      ]
    },
    {
      cards: ['F04', 'F11'],
      proximity: 'partial',
      messages: [
        "The place where Lily handed over her drawing has regained serenity, hinting at a new beginning.",
        "Lily\'s change reflects the village\'s transformation.",
        "💭 Find the meaning of a new beginning through Lily and the place where her drawing was handed over."
      ]
    },
    {
      cards: ['F05', 'F12'],
      proximity: 'partial',
      messages: [
        "The villager who cannot forget past pain even after the curse is lifted and the location symbolizing traces of the past show the remnants of the curse.",
        "Their combination indicates the indelible scars left by the curse.",
        "📖 Understand the scars left by the curse through the last character and the last location, and comfort them."
      ]
    },
    {
      cards: ['F06', 'F09'],
      proximity: 'partial',
      messages: [
        "The character symbolizing the cost of breaking the curse and the road out of the village show the lingering impact of the curse.",
        "The road signifies freedom, but the sacrifice symbolizes its cost.",
        "🚨 Reflect on the true meaning left by the curse through the last character and the road out of the village."
      ]
    }
  ],
  urgentHints: [
    '🚨 Urgent Report: The Curse Guardian has dispersed like fog and vanished.',
    '🚨 On-site Evidence: The \'Fragment of the Loop\' has turned into an ordinary stone.',
    '🚨 Forensic Report: The dense fog that covered the village has completely cleared.',
    '🚨 Financial/Communication Investigation: Lily\'s drawing is no longer eerie and has become an ordinary child\'s drawing.'
  ],
  contextualHints: [
    '💡 Deduction Tip: Observe the changes and scars remaining in the village and its residents even after the curse is lifted.',
    '💡 Investigation Perspective: Reflect on the cause of the curse being lifted and the lessons learned in the process.',
    '💡 Criminal Psychology: The disappearance of madness and fear from the villagers\' eyes signifies liberation from the curse.',
    '💡 Physical Evidence Analysis: The change in the \'Fragment of the Loop\' proves that the curse\'s power has completely vanished.',
    '💡 Timeline: Record the village\'s changes after the curse is lifted in chronological order, and compare the past and present.'
  ]
};