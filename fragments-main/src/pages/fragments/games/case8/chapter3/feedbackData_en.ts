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

export const case8FeedbackDataEn3: CaseFeedbackData = {
  caseId: 'case8_chapter2',
  correctSuspect: 'C05', // Ritual Leader in Lily\'s Drawing
  keyEvidence: ['C14', 'C18', 'C17', 'C15'], // Lily\'s Drawing, Chapter 2\'s Last Evidence, Chapter 2\'s Additional Evidence, Déjà Vu Phenomenon
  combinationFeedback: [
    // close combinations
    {
      cards: ['C05', 'C14'],
      proximity: 'close',
      messages: [
        "The figure leading the ritual in Lily\'s drawing and the drawing itself are the core of the forgotten truth.",
        "The drawing shows the ritual\'s appearance, and the figure shows its leader.",
        "💡 Grasp the essence of the forgotten ritual indicated by Lily\'s drawing and the figure within it."
      ]
    },
    {
      cards: ['C05', 'C18'],
      proximity: 'close',
      messages: [
        "The figure who led the ritual and the last piece of evidence are directly connected to the origin of the curse.",
        "This evidence is decisive in revealing the figure\'s identity and the ritual\'s outcome.",
        "💡 Understand the beginning of the curse revealed by the figure who led the ritual and the last piece of evidence combined."
      ]
    },
    {
      cards: ['C05', 'C17'],
      proximity: 'close',
      messages: [
        "Symbols or patterns related to the figure who led the ritual are important clues to uncovering the origin of the curse.",
        "These pieces of evidence help understand the figure\'s role and the ritual\'s purpose.",
        "💡 Find the hidden meaning of the curse through the symbols related to the figure who led the ritual."
      ]
    },
    {
      cards: ['C05', 'C15'],
      proximity: 'close',
      messages: [
        "The figure who led the ritual and the déjà vu phenomenon imply that the village\'s time distortion is a result of the ritual.",
        "The figure\'s actions might have caused the repetition of time.",
        "💡 How is the figure who led the ritual related to time distortion? Explore his role\'s impact on the curse."
      ]
    },
    {
      cards: ['C14', 'C18'],
      proximity: 'close',
      messages: [
        "Lily\'s drawing and the last piece of evidence clearly show the essence of the forgotten ritual and the resulting curse.",
        "The drawing depicts the ritual\'s appearance, and the evidence proves its outcome.",
        "💡 Grasp the truth of the forgotten ritual revealed by Lily\'s drawing and the last piece of evidence combined."
      ]
    },
    {
      cards: ['C14', 'C17'],
      proximity: 'close',
      messages: [
        "Lily\'s drawing and ritual-related symbols are crucial clues for reconstructing the past ritual.",
        "The drawing provides scenes of the ritual, and the symbols complement its meaning.",
        "💡 Reconstruct the full picture of the forgotten ritual through Lily\'s drawing and the symbols."
      ]
    },
    {
      cards: ['C14', 'C15'],
      proximity: 'close',
      messages: [
        "The depiction in Lily\'s drawing and the déjà vu phenomenon imply that the village\'s time distortion is related to the past ritual.",
        "The drawing shows the ritual\'s cause, and déjà vu shows its result.",
        "💡 Find the cause of time distortion indicated by Lily\'s drawing and the déjà vu phenomenon."
      ]
    },
    {
      cards: ['C18', 'C17'],
      proximity: 'close',
      messages: [
        "The last piece of evidence and additional evidence are essential for uncovering the essence of the forgotten ritual and the origin of the curse.",
        "These pieces of evidence clarify the ritual\'s purpose and its consequences.",
        "💡 Combine all clues of the forgotten ritual revealed by the last piece of evidence and additional evidence."
      ]
    },
    {
      cards: ['C18', 'C15'],
      proximity: 'close',
      messages: [
        "The last piece of evidence and the déjà vu phenomenon prove that the forgotten ritual caused the village\'s time distortion.",
        "These pieces of evidence show the ritual\'s powerful influence.",
        "💡 Understand the outcome of the ritual indicated by the last piece of evidence and the déjà vu phenomenon."
      ]
    },
    {
      cards: ['C17', 'C15'],
      proximity: 'close',
      messages: [
        "Ritual-related symbols and the déjà vu phenomenon show the past ritual\'s impact on the current village.",
        "The symbols represent the ritual\'s traces, and déjà vu represents its ongoing effects.",
        "💡 Understand how the past ritual affects the present through ritual-related symbols and the déjà vu phenomenon."
      ]
    },
    // partial combinations
    {
      cards: ['C01', 'C13'],
      proximity: 'partial',
      messages: [
        "Journalist Alex and his notebook show the importance of external information and logical deduction.",
        "The notebook contains Alex\'s observations and records of missing persons cases.",
        "📖 Gain insights into Alex\'s investigation and the village\'s strange phenomena through his notebook."
      ]
    },
    {
      cards: ['C01', 'C16'],
      proximity: 'partial',
      messages: [
        "Alex and the missing persons record imply that external events are connected to the village\'s curse.",
        "Alex\'s investigation plays an important role in uncovering the village\'s secret.",
        "🚨 Understand how the village\'s curse is connected to the outside world through Alex\'s investigation and the missing persons record."
      ]
    },
    {
      cards: ['C02', 'C08'],
      proximity: 'partial',
      messages: [
        "Lily and the old school building show the place where her drawings were found and her communication method.",
        "The school is where Lily\'s drawings were made and holds traces of the past.",
        "🏠 Find the meaning of Lily\'s drawings and traces of the past through Lily and the old school building."
      ]
    },
    {
      cards: ['C03', 'C07'],
      proximity: 'partial',
      messages: [
        "The character Alex encountered at the grocery store seems to vaguely know the village\'s secret.",
        "The grocery store is an everyday space in the village, but secrets can be revealed within it.",
        "💭 Find clues about the village\'s hidden secrets through the character at the grocery store and the location itself."
      ]
    },
    {
      cards: ['C04', 'C09'],
      proximity: 'partial',
      messages: [
        "Traces of a character found in the old school building and a hidden location imply artifacts related to the past ritual.",
        "Their combination plays an important role in uncovering the origin of the curse.",
        "📖 Find artifacts of the past ritual through the traces of the additional character and the hidden location."
      ]
    },
    {
      cards: ['C06', 'C12'],
      proximity: 'partial',
      messages: [
        "The last character and the last location imply the key figure of the 'forgotten ritual' and the place where it was performed.",
        "Their combination becomes a decisive clue to understanding the essence of the curse.",
        "🏠 Understand the core of the forgotten ritual and its location through the last character and the last location."
      ]
    }
  ],
  urgentHints: [
    '🚨 Urgent Report: Lily\'s drawings depict a terrible past ritual.',
    '🚨 On-site Evidence: Symbols or patterns related to the forgotten ritual are found throughout the village.',
    '🚨 Forensic Report: Alex\'s notebook contains records of missing persons cases and the village\'s strange phenomena.',
    '🚨 Financial/Communication Investigation: The déjà vu phenomenon is an important clue proving the village\'s time distortion.'
  ],
  contextualHints: [
    '💡 Deduction Tip: Lily\'s drawings are not mere scribbles. Analyze the symbols and patterns in the drawings to infer the truth of the past.',
    '💡 Investigation Perspective: Collaborating with journalist Alex will help you gain external information and make logical deductions.',
    '💡 Criminal Psychology: It\'s important to understand why the villagers are trying to forget or hide the past ritual.',
    '💡 Physical Evidence Analysis: Artifacts, traces, and symbols play a decisive role in reconstructing past events.',
    '💡 Timeline: Reconstruct when and how the forgotten ritual began in chronological order.'
  ]
};
