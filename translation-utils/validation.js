// Translation validation utilities for Case 6, 7, 8 English translations

/**
 * Validates that English translation maintains identical structure to Korean version
 * @param {Object} koreanData - Korean chapter data
 * @param {Object} englishData - English chapter data
 * @returns {Object} Validation result with errors array
 */
function validateTranslationStructure(koreanData, englishData) {
  const errors = [];
  
  // Check basic properties
  if (koreanData.id !== englishData.id) {
    errors.push(`ID mismatch: Korean "${koreanData.id}" vs English "${englishData.id}"`);
  }
  
  if (koreanData.winCondition !== englishData.winCondition) {
    errors.push(`Win condition mismatch: Korean "${koreanData.winCondition}" vs English "${englishData.winCondition}"`);
  }
  
  // Check initial cards array
  if (JSON.stringify(koreanData.initialCards) !== JSON.stringify(englishData.initialCards)) {
    errors.push(`Initial cards mismatch`);
  }
  
  // Check suspects IDs
  const koreanSuspectIds = koreanData.suspects.map(s => s.id).sort();
  const englishSuspectIds = englishData.suspects.map(s => s.id).sort();
  if (JSON.stringify(koreanSuspectIds) !== JSON.stringify(englishSuspectIds)) {
    errors.push(`Suspect IDs mismatch`);
  }
  
  // Check evidence IDs
  const koreanEvidenceIds = koreanData.evidence.map(e => e.id).sort();
  const englishEvidenceIds = englishData.evidence.map(e => e.id).sort();
  if (JSON.stringify(koreanEvidenceIds) !== JSON.stringify(englishEvidenceIds)) {
    errors.push(`Evidence IDs mismatch`);
  }
  
  // Check location IDs
  const koreanLocationIds = koreanData.locations.map(l => l.id).sort();
  const englishLocationIds = englishData.locations.map(l => l.id).sort();
  if (JSON.stringify(koreanLocationIds) !== JSON.stringify(englishLocationIds)) {
    errors.push(`Location IDs mismatch`);
  }
  
  // Check connection rules
  const koreanRuleIds = koreanData.connectionRules.map(r => r.id).sort();
  const englishRuleIds = englishData.connectionRules.map(r => r.id).sort();
  if (JSON.stringify(koreanRuleIds) !== JSON.stringify(englishRuleIds)) {
    errors.push(`Connection rule IDs mismatch`);
  }
  
  // Check connection rule cards and unlock values
  for (let i = 0; i < koreanData.connectionRules.length; i++) {
    const koreanRule = koreanData.connectionRules[i];
    const englishRule = englishData.connectionRules.find(r => r.id === koreanRule.id);
    
    if (englishRule) {
      if (JSON.stringify(koreanRule.cards) !== JSON.stringify(englishRule.cards)) {
        errors.push(`Connection rule ${koreanRule.id} cards mismatch`);
      }
      if (koreanRule.unlock !== englishRule.unlock) {
        errors.push(`Connection rule ${koreanRule.id} unlock mismatch`);
      }
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors: errors
  };
}

/**
 * Checks if all required English content is present and non-empty
 * @param {Object} englishData - English chapter data
 * @returns {Object} Completeness check result
 */
function validateTranslationCompleteness(englishData) {
  const errors = [];
  
  if (!englishData.title || englishData.title.trim() === '') {
    errors.push('Title is missing or empty');
  }
  
  if (!englishData.story || englishData.story.trim() === '') {
    errors.push('Story is missing or empty');
  }
  
  // Check suspects
  englishData.suspects.forEach((suspect, index) => {
    if (!suspect.name || suspect.name.trim() === '') {
      errors.push(`Suspect ${index + 1} (${suspect.id}) name is missing`);
    }
    if (!suspect.role || suspect.role.trim() === '') {
      errors.push(`Suspect ${index + 1} (${suspect.id}) role is missing`);
    }
    if (!suspect.description || suspect.description.trim() === '') {
      errors.push(`Suspect ${index + 1} (${suspect.id}) description is missing`);
    }
  });
  
  // Check evidence
  englishData.evidence.forEach((evidence, index) => {
    if (!evidence.name || evidence.name.trim() === '') {
      errors.push(`Evidence ${index + 1} (${evidence.id}) name is missing`);
    }
    if (!evidence.description || evidence.description.trim() === '') {
      errors.push(`Evidence ${index + 1} (${evidence.id}) description is missing`);
    }
    if (!evidence.details || evidence.details.trim() === '') {
      errors.push(`Evidence ${index + 1} (${evidence.id}) details is missing`);
    }
  });
  
  // Check locations
  englishData.locations.forEach((location, index) => {
    if (!location.name || location.name.trim() === '') {
      errors.push(`Location ${index + 1} (${location.id}) name is missing`);
    }
    if (!location.description || location.description.trim() === '') {
      errors.push(`Location ${index + 1} (${location.id}) description is missing`);
    }
    if (!location.details || location.details.trim() === '') {
      errors.push(`Location ${index + 1} (${location.id}) details is missing`);
    }
  });
  
  // Check connection rules
  englishData.connectionRules.forEach((rule, index) => {
    if (!rule.result || rule.result.trim() === '') {
      errors.push(`Connection rule ${index + 1} (${rule.id}) result is missing`);
    }
  });
  
  return {
    isComplete: errors.length === 0,
    errors: errors
  };
}

module.exports = {
  validateTranslationStructure,
  validateTranslationCompleteness
};