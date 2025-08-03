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
export const case1FeedbackData: CaseFeedbackData = {
  caseId: 'mansion_murder',
  correctSuspect: 'mary_west',
  keyEvidence: ['will_draft', 'insurance_policy', 'poison_container', 'garden_gloves'],
  
  combinationFeedback: [
    // Mary and key evidence (close - close to correct answer)
    {
      cards: ['mary_west', 'will_draft'],
      proximity: 'close',
      messages: [
        'Mary and the will... an interesting combination. Something more seems needed.',
        'Mary appears related to the will! But complete connection requires other evidence.',
        '💡 Mary and the will are key clues. Look for other evidence related to financial motive.'
      ]
    },
    {
      cards: ['mary_west', 'insurance_policy'],
      proximity: 'close',
      messages: [
        'Mary and the insurance policy... there seems to be an important connection.',
        'Mary is connected to insurance money! But more evidence about method is needed.',
        '💡 Mary\'s insurance motive is clear. Now look for physical evidence about the crime method.'
      ]
    },
    {
      cards: ['mary_west', 'garden_gloves'],
      proximity: 'close',
      messages: [
        'Mary and garden gloves... a suspicious combination.',
        'Chemical substances detected on Mary\'s gloves! Look for more poison-related evidence.',
        '💡 There are traces Mary handled poison. Look for poison source or container.'
      ]
    },
    {
      cards: ['mary_west', 'poison_container'],
      proximity: 'close',
      messages: [
        'Mary and poison container... direct connection is visible.',
        'Mary likely used the poison container! Confirm with additional evidence.',
        '💡 Mary\'s connection to poison container is almost certain. Look for more evidence about motive or opportunity.'
      ]
    },
    
    // Combinations of key evidence (close)
    {
      cards: ['will_draft', 'insurance_policy'],
      proximity: 'close',
      messages: [
        'Will and insurance policy... seem related to Mary\'s motive.',
        'Plan to exclude Mary from inheritance also affected insurance money! Try connecting directly to Mary.',
        '💡 Richard tried to exclude Mary economically. Now look for Mary\'s reaction.'
      ]
    },
    {
      cards: ['garden_gloves', 'poison_container'],
      proximity: 'close',
      messages: [
        'Garden gloves and poison container... these are crime tools.',
        'Tools used for poison handling discovered! Check who could have used them.',
        '💡 These are tools used in the crime. Look for who had access to these tools.'
      ]
    },
    {
      cards: ['tea_cup', 'poison_container'],
      proximity: 'close',
      messages: [
        'Poisoned tea cup and poison container... crime method becomes clear.',
        'Source of poison is now clear! Find who put this poison in the tea.',
        '💡 Crime method is confirmed. Now need to determine perpetrator\'s identity.'
      ]
    },
    
    // Mary\'s diary related (partial - partially correct)
    {
      cards: ['mary_west', 'diary'],
      proximity: 'partial',
      messages: [
        'Mary\'s diary is full of anger and betrayal... but emotions alone cannot prove crime.',
        '📖 "Father wants to abandon me" - Mary\'s desperate writing is visible. Look for specific reasons.',
        '💭 Mary\'s psychological motive is certain. Now find evidence she could actually act on it.'
      ]
    },
    {
      cards: ['diary', 'phone_records'],
      proximity: 'partial',
      messages: [
        'Looking at Mary\'s diary and call records, she frequently called lawyers... was she planning something?',
        '📞 Mary\'s mention of "last chance" in call content is suspicious. Last chance for what?',
        '💔 Emotional motive and action plan are visible. But need to find actual crime means for complete picture.'
      ]
    },
    
    // Butler related combinations (partial - decoy)
    {
      cards: ['james_butler', 'butler_schedule'],
      proximity: 'partial',
      messages: [
        'Butler James\'s schedule shows 30 minutes empty on incident day... but that alone doesn\'t make him guilty.',
        '📋 James recorded "personal business" time is suspicious. But crime motive is unclear.',
        '⏰ Time gap is suspicious, but did butler have reason to harm Richard? Consider other suspects too.'
      ]
    },
    {
      cards: ['james_butler', 'fake_alibi_note'],
      proximity: 'partial',
      messages: [
        'James\'s note handwriting differs from usual... hastily fabricated alibi?',
        '✍️ Butler\'s false alibi is suspected, but being at crime scene doesn\'t necessarily make him guilty.',
        '🤥 James is clearly lying, but could be for other reasons. Look for more decisive evidence.'
      ]
    },
    
    // Doctor related combinations (partial - decoy)
    {
      cards: ['dr_harrison', 'medical_records'],
      proximity: 'partial',
      messages: [
        'Dr. Harrison\'s medical records show Richard was vulnerable to toxic drugs due to heart problems...',
        '⚕️ Doctor knew poison\'s lethal effects, but that alone gives weak crime motive.',
        '🩺 Has medical knowledge but does Harrison have reason to poison Richard? Try different approach.'
      ]
    },
    
    // Completely unrelated combinations (none)
    {
      cards: ['study', 'bedroom'],
      proximity: 'none',
      messages: [
        'Study and bedroom... both Richard\'s private spaces but no direct connection visible.',
        '🏠 Rather than physical relationship between locations, how about focusing on what happened inside?',
        '🔍 Understanding building structure is important, but people\'s actions and motives seem more important clues.'
      ]
    },
    {
      cards: ['kitchen', 'garden'],
      proximity: 'none',
      messages: [
        'Kitchen and garden... both places with food and plants but not connected to incident alone.',
        '🌿 May have used garden herbs for cooking, but what relation to crime?',
        '🍽️ Functional relationship of locations less important than who did what there.'
      ]
    },
    {
      cards: ['james_butler', 'dr_harrison'],
      proximity: 'none',
      messages: [
        'James butler and Dr. Harrison... both knew Richard long but no connection between them visible.',
        '👥 Rather than conspiracy possibility, better to examine individual motives and evidence.',
        '🎯 Instead of connecting suspects to each other, try connecting them to specific crime evidence.'
      ]
    }
  ],
  
  urgentHints: [
    '🚨 Urgent tip: Witness saw Mary crying as she left lawyer\'s office. That was the day before the incident!',
    '🚨 Scene evidence: Empty poison container found in garden shed. Label removed but chemical residue remains.',
    '🚨 Forensic report: Toxic substance in Richard\'s tea matches common pesticide components. Who had access?',
    '🚨 Financial investigation: Mary\'s account had massive debts and collection notices. Economic pressure was extreme.'
  ],
  
  contextualHints: [
    '💡 Deduction tip: Family conflicts can lead to most deadly crimes. Focus on blood relations and inheritance issues.',
    '💡 Investigation perspective: Who could most naturally approach Richard\'s daily routine? Even serving tea could be suspicious.',
    '💡 Criminal psychology: Desperate people commit unimaginable acts. Focus on those under economic pressure.',
    '💡 Evidence analysis: Look at garden-related tools. Gardening supplies may have been used as crime tools.',
    '💡 Timeline: As important as who was where on incident day is who prepared what the day before.'
  ]
};

// Case 1 dedicated feedback data - for independent use
export default case1FeedbackData;