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

export const case8FeedbackDataEn7: CaseFeedbackData = {
  caseId: 'case8_chapter6',
  correctSuspect: 'G18', // Finale\'s Last Evidence
  keyEvidence: ['G13', 'G14', 'G15', 'G18'], // Alex\'s Notebook, Vibration of the Fragment of the Loop, Memory of Echowood Village, Finale\'s Last Evidence
  combinationFeedback: [
    // close combinations
    {
      cards: ['G18', 'G13'],
      proximity: 'close',
      messages: [
        "The finale's last piece of evidence and Alex's notebook show the indelible mark left by the Echowood Village experience and the collapse of his logical worldview.",
        "Their combination proves that mental scars remain even after the curse ends.",
        "?í° Understand the true cost of the Echowood Village experience revealed by the last piece of evidence and Alex's notebook combined."
      ]
    },
    {
      cards: ['G18', 'G14'],
      proximity: 'close',
      messages: [
        "The finale's last piece of evidence and the vibration of the 'Fragment of the Loop' show that physical remnants remain even after the curse is lifted.",
        "Their combination proves that the curse's influence still affects the player.",
        "?í° Confirm the physical remnants of the curse revealed by the last piece of evidence and the vibration of the Fragment of the Loop combined."
      ]
    },
    {
      cards: ['G18', 'G15'],
      proximity: 'close',
      messages: [
        "The finale's last piece of evidence and the memory of Echowood Village show that deep mental scars remain even after the curse is lifted.",
        "Their combination proves that the village's nightmare is deeply embedded in the player's life.",
        "?í° Understand the mental scars of the curse revealed by the last piece of evidence and the memory of Echowood Village combined."
      ]
    },
    {
      cards: ['G13', 'G14'],
      proximity: 'close',
      messages: [
        "Alex's notebook and the vibration of the 'Fragment of the Loop' show that the collapse of his logical worldview and physical remnants remain even after the curse ends.",
        "Their combination proves that the curse's influence affects both Alex and the player.",
        "?í° Confirm the remnants of the curse revealed by Alex's notebook and the vibration of the Fragment of the Loop combined."
      ]
    },
    {
      cards: ['G13', 'G15'],
      proximity: 'close',
      messages: [
        "Alex's notebook and the memory of Echowood Village show that the collapse of his logical worldview and deep mental scars remain even after the curse ends.",
        "Their combination proves that the curse's influence is deeply embedded in Alex's mind.",
        "?í° Understand the mental scars of the curse revealed by Alex's notebook and the memory of Echowood Village combined."
      ]
    },
    {
      cards: ['G14', 'G15'],
      proximity: 'close',
      messages: [
        "The vibration of the 'Fragment of the Loop' and the memory of Echowood Village show that deep physical remnants and mental scars remain even after the curse is lifted.",
        "Their combination proves that the curse's influence affects both the player's body and mind.",
        "?í° Confirm the physical and mental remnants of the curse revealed by the vibration of the Fragment of the Loop and the memory of Echowood Village combined."
      ]
    },
    {
      cards: ['G01', 'G13'],
      proximity: 'close',
      messages: [
        "Alex, returned to civilization, and his notebook show that the curse has shattered his logical worldview.",
        "The notebook is no longer being written in and lies blankly open.",
        "?í° Understand the impact the curse has had on Alex's life through him and his notebook."
      ]
    },
    {
      cards: ['G02', 'G14'],
      proximity: 'close',
      messages: [
        "The player, having left Echowood Village, and the vibration of the 'Fragment of the Loop' show that the curse has left physical remnants on his body.",
        "A deeper mental scar, more profound than physical fatigue, weighs him down.",
        "?í° Confirm the impact the curse has had on your body through the player and the vibration of the Fragment of the Loop."
      ]
    },
    {
      cards: ['G03', 'G15'],
      proximity: 'close',
      messages: [
        "The player seeing shadows of Echowood Village in his ordinary life and the village's memory show that the curse is deeply embedded in his mind.",
        "He reads the fear of the villagers in the faces of passersby.",
        "?í° Understand the impact the curse has had on your mind through the player's illusions and the memory of Echowood Village."
      ]
    },
    {
      cards: ['G04', 'G16'],
      proximity: 'close',
      messages: [
        "The player hearing Grandma Elara's warning even in the bleak wind and the lingering presence of the curse show that the curse continues to follow him.",
        "The memory of the village continues to torment him.",
        "?í° Confirm the lasting impact the curse has had on your life through the player's auditory hallucinations and Grandma Elara's warning."
      ]
    },
    {
      cards: ['G01', 'G08'],
      proximity: 'partial',
      messages: [
        "Alex, returned to civilization, and the cityscape show that he is not the same as before.",
        "It shows that his logical worldview has collapsed.",
        "?í≠ Understand the impact the curse has had on Alex's life through him and the cityscape."
      ]
    },
    {
      cards: ['G02', 'G07'],
      proximity: 'partial',
      messages: [
        "The road leaving Echowood Village and the player show the scars remaining despite the curse being lifted.",
        "A deeper mental scar, more profound than physical fatigue, weighs him down.",
        "?ìñ Confirm the impact the curse has had on your life through the player and the road leaving the village."
      ]
    },
    {
      cards: ['G05', 'G17'],
      proximity: 'partial',
      messages: [
        "The player seeing Lily's drawings repeatedly in his dreams and the village's nightmare show that the curse is deeply embedded in his subconscious.",
        "Their combination proves the lasting impact the curse has had on the player's mind.",
        "?í≠ Understand the impact the curse has had on your subconscious through the player's dreams and Lily's drawings."
      ]
    },
    {
      cards: ['G06', 'G12'],
      proximity: 'partial',
      messages: [
        "The player's inner self, forever changed by the Echowood Village experience, and the space symbolizing a new kind of 'fog' show the indelible mark left by the curse.",
        "Their combination leaves a lingering impression that the player might wander in a new kind of 'fog'.",
        "?è† Confirm the indelible mark the curse has left on your life through the last character and the new fog space."
      ]
    },
    {
      cards: ['G09', 'G10'],
      proximity: 'partial',
      messages: [
        "A specific place in Echowood Village repeating in the player's dreams and Echowood Village remaining unmapped show the mental remnants left by the curse.",
        "Their combination proves that the village's nightmare remains vivid in the player's memory.",
        "?í≠ Understand the impact the curse has had on your memory through Echowood in dreams and unmapped Echowood."
      ]
    },
    {
      cards: ['G11', 'G12'],
      proximity: 'partial',
      messages: [
        "The place where the player sees shadows of Echowood Village in his daily life and the space symbolizing a new kind of 'fog' show the indelible mark left by the curse.",
        "Ordinary spaces feel ominous.",
        "?îç Confirm the lasting impact the curse has had on your life through the Echowood shadow in daily life and the new fog space."
      ]
    },  
    {
      cards: ['G07', 'G08'],
      proximity: 'none',
      messages: [
        "The road leaving Echowood Village and the cityscape of returning to civilization represent the player's travel path.",
        "This combination shows the player's current location but is not a direct clue.",
        "?è† These locations show your travel path, but are not core clues."
      ]
    },
    {
      cards: ['G09', 'G11'],
      proximity: 'none',
      messages: [
        "A specific place in Echowood Village repeating in the player's dreams and the place where the player sees shadows of Echowood Village in his daily life show the mental remnants left by the curse.",
        "This combination shows the lasting impact the curse has had on the player's mind, but is not a direct clue.",
        "?í≠ These locations show the impact the curse has had on your mind, but are not core clues."
      ]
    },
    {
      cards: ['G01', 'G07'],
      proximity: 'none',
      messages: [
        "Alex, returned to civilization, and the road leaving Echowood Village show that he has left the village.",
        "This combination shows Alex's location but is not a direct clue.",
        "?îç These locations help identify Alex's location, but are not core clues for solving the case."
      ]
    },
    {
      cards: ['G02', 'G08'],
      proximity: 'none',
      messages: [
        "The player, having left Echowood Village, and the cityscape of returning to civilization show that he is trying to adapt to a new environment.",
        "This combination shows the player's current situation but is not a direct clue.",
        "?ö® These locations show your current situation, but are not core clues."
      ]
    },
    {
      cards: ['G03', 'G10'],
      proximity: 'none',
      messages: [
        "The player seeing shadows of Echowood Village in his ordinary life and Echowood Village remaining unmapped have little direct relevance.",
        "The shadows are illusions, and the village remains in memory.",
        "?í≠ This combination describes the current situation, but is not a core clue."
      ]
    }
  ],
  urgentHints: [
    '?ö® Urgent Report: Alex\'s notebook is no longer being written in, showing the collapse of his logical worldview.',
    '?ö® On-site Evidence: The vibration of the \'Fragment of the Loop\' still remains at the player\'s fingertips.',
    '?ö® Forensic Report: The memory of Echowood Village suddenly comes to mind even in ordinary daily life.',
    '?ö® Financial/Communication Investigation: Lily\'s drawings repeating in dreams show that the village\'s nightmare is deeply embedded in the subconscious.'
  ],
  contextualHints: [
    '?í° Deduction Tip: Even though the curse is lifted, not everything is over. It\'s important to accept the remaining scars and changes.',
    '?í° Investigation Perspective: Reflect on how the Echowood Village experience has affected your life.',
    '?í° Criminal Psychology: Nightmares and illusions show that past trauma continues to affect the present.',
    '?í° Physical Evidence Analysis: Physical evidence has disappeared, but mental remnants still remain.',
    '?í° Timeline: Organize how the Echowood Village experience has changed your life in chronological order.'
  ]
};
