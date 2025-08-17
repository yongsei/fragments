// Template generator for English translations

/**
 * Generates English translation template from Korean chapter data
 * @param {Object} koreanData - Korean chapter data
 * @param {string} exportName - Export name for English version (e.g., 'case6_chapter1_en')
 * @returns {string} TypeScript file content template
 */
function generateEnglishTemplate(koreanData, exportName) {
  const template = `export const ${exportName} = {
  id: '${koreanData.id}',
  title: '${koreanData.title}', // TODO: Translate to English
  story: '${koreanData.story}', // TODO: Translate to English
  victim: '${koreanData.victim}',
  suspects: [${koreanData.suspects.map(suspect => `
    {
      id: '${suspect.id}',
      name: '${suspect.name}', // TODO: Translate to English
      role: '${suspect.role}', // TODO: Translate to English
      description: '${suspect.description}', // TODO: Translate to English
      alibi: '${suspect.alibi}',
      motive: '${suspect.motive}'
    }`).join(',')}
  ],
  evidence: [${koreanData.evidence.map(evidence => `
    {
      id: '${evidence.id}',
      name: '${evidence.name}', // TODO: Translate to English
      description: '${evidence.description}', // TODO: Translate to English
      details: '${evidence.details}', // TODO: Translate to English
      location: '${evidence.location}'
    }`).join(',')}
  ],
  locations: [${koreanData.locations.map(location => `
    {
      id: '${location.id}',
      name: '${location.name}', // TODO: Translate to English
      description: '${location.description}', // TODO: Translate to English
      details: '${location.details}' // TODO: Translate to English
    }`).join(',')}
  ],
  connectionRules: [${koreanData.connectionRules.map(rule => `
    {
      id: '${rule.id}',
      cards: ${JSON.stringify(rule.cards)},
      result: '${rule.result}', // TODO: Translate to English
      unlock: '${rule.unlock}'
    }`).join(',')}
  ],
  fragments: [],
  winCondition: '${koreanData.winCondition}',
  initialCards: ${JSON.stringify(koreanData.initialCards)}
};`;

  return template;
}

/**
 * Translation guidelines for different case types
 */
const translationGuidelines = {
  case6: {
    atmosphere: 'Detective/Mystery',
    tone: 'Investigative, logical, methodical',
    keyElements: ['clues', 'deduction', 'evidence analysis', 'suspect interrogation'],
    characterTypes: ['detective', 'suspect', 'witness', 'victim'],
    commonTerms: {
      '단서': 'clue',
      '증거': 'evidence', 
      '용의자': 'suspect',
      '목격자': 'witness',
      '조사': 'investigation',
      '추리': 'deduction'
    }
  },
  case7: {
    atmosphere: 'Supernatural/Gothic',
    tone: 'Mysterious, eerie, supernatural',
    keyElements: ['ghosts', 'curses', 'supernatural phenomena', 'ancient secrets'],
    characterTypes: ['spirit', 'medium', 'investigator', 'cursed individual'],
    commonTerms: {
      '유령': 'ghost',
      '저주': 'curse',
      '영혼': 'spirit',
      '초자연적': 'supernatural',
      '신비로운': 'mysterious',
      '오컬트': 'occult'
    }
  },
  case8: {
    atmosphere: 'Horror/Psychological Thriller',
    tone: 'Dark, unsettling, psychological',
    keyElements: ['psychological horror', 'mind games', 'reality distortion', 'fear'],
    characterTypes: ['victim', 'tormentor', 'survivor', 'witness'],
    commonTerms: {
      '공포': 'horror',
      '악몽': 'nightmare',
      '광기': 'madness',
      '환상': 'illusion',
      '정신적': 'psychological',
      '불안': 'anxiety'
    }
  }
};

module.exports = {
  generateEnglishTemplate,
  translationGuidelines
};