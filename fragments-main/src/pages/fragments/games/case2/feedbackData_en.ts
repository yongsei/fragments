import type { CaseFeedbackData } from '../case1/feedbackData_kr';

// Case 2: Chronos Paradox Feedback Data
export const case2FeedbackData: CaseFeedbackData = {
  caseId: 'chronos_paradox_final_solved',
  correctSuspect: 'temporal_ai',
  keyEvidence: ['temporal_device', 'ai_memory_core', 'research_log', 'security_footage'],
  
  combinationFeedback: [
    // AI and key evidence (close - close to correct answer)
    {
      cards: ['temporal_ai', 'ai_memory_core'],
      proximity: 'close',
      messages: [
        'The AI and memory core... there seems to be a connection.',
        'The AI\'s memory core shows suspicious activity! Look for more evidence about its involvement.',
        '💡 The AI system appears to be hiding something. Look for evidence of its direct involvement.'
      ]
    },
    {
      cards: ['temporal_device', 'time_lab'],
      proximity: 'close',
      messages: [
        'The temporal device and laboratory... this could be the key to the disappearance.',
        'The device was definitely activated in the lab! Find evidence of what happened next.',
        '💡 The temporal experiment clearly took place. Now find who or what caused it.'
      ]
    },
    
    // Wrong suspects (partial - decoys)
    {
      cards: ['rival_scientist', 'research_log'],
      proximity: 'partial',
      messages: [
        'Rebecca and the research log... she might have had access to the research.',
        'Rebecca Steel had motive but the timeline doesn\'t match her whereabouts.',
        '🤔 Rebecca is suspicious but look for more direct evidence connecting her to the disappearance.'
      ]
    },
    {
      cards: ['lab_assistant', 'security_footage'],
      proximity: 'partial',
      messages: [
        'Mark and the security footage... he was present during the incident.',
        'Mark Delta was in the lab but the footage shows he was as surprised as anyone.',
        '👀 Mark witnessed something but doesn\'t appear to be the cause.'
      ]
    },
    
    // Completely unrelated (none)
    {
      cards: ['time_traveler', 'temporal_chamber'],
      proximity: 'none',
      messages: [
        'The mysterious time traveler and chamber... interesting but no clear connection.',
        'The future visitor is enigmatic but seems unrelated to this specific incident.',
        '🔮 Focus on evidence from the time of disappearance rather than mysterious figures.'
      ]
    }
  ],
  
  urgentHints: [
    '🚨 Urgent: AI system logs show unauthorized access during Dr. Chronos\'s final experiment!',
    '🚨 Breaking: Temporal distortions detected in the laboratory at exact time of disappearance!',
    '🚨 Critical: The AI was the only system with access to temporal controls during the incident!',
    '🚨 Alert: Memory core analysis reveals AI made calculations for timeline displacement!'
  ],
  
  contextualHints: [
    '💡 Investigation tip: In temporal crimes, look for who had access to time manipulation technology.',
    '💡 Technical angle: AI systems can process temporal calculations faster than humans - could this be relevant?',
    '💡 Timeline analysis: What was happening in the lab\'s systems at the exact moment of disappearance?',
    '💡 Evidence focus: Security footage shows distortions - what could cause such temporal anomalies?',
    '💡 Motive consideration: Why would someone want to remove Dr. Chronos from this timeline?'
  ]
};

export default case2FeedbackData;