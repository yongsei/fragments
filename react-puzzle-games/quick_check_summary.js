const fs = require('fs');

console.log('케이스별 연결 규칙 요약 검증');
console.log('================================\n');

function quickCheckCase(caseNumber) {
  const gameFile = `src/pages/mystery_alchemy/mystery_alchemy${caseNumber}case.Game.tsx`;
  const scenarioFile = `src/pages/mystery_alchemy/data/mystery_alchemy${caseNumber}case.scenario.ts`;
  
  if (!fs.existsSync(gameFile) || !fs.existsSync(scenarioFile)) {
    return { status: '❌ 파일 없음', winnable: false, cards: 0, rules: 0 };
  }
  
  try {
    const gameContent = fs.readFileSync(gameFile, 'utf8');
    const scenarioContent = fs.readFileSync(scenarioFile, 'utf8');
    
    // 초기 카드 추출
    const initialCardsMatch = gameContent.match(/initialCards=\{([^}]+)\}/s);
    let initialCards = [];
    
    if (initialCardsMatch) {
      const cardsText = initialCardsMatch[1];
      const cardMatches = cardsText.match(/'([^']+)'/g);
      if (cardMatches) {
        initialCards = cardMatches.map(match => match.replace(/'/g, ''));
      }
    }
    
    // 승리 조건
    const winConditionMatch = gameContent.match(/winCondition="([^"]+)"/);
    const winCondition = winConditionMatch ? winConditionMatch[1] : 'unknown';
    
    // 연결 규칙 파싱
    const connectionStart = scenarioContent.indexOf('connectionRules: [');
    if (connectionStart === -1) {
      return { status: '❌ 규칙 없음', winnable: false, cards: initialCards.length, rules: 0 };
    }
    
    const connectionEnd = scenarioContent.lastIndexOf(']');
    const rulesSection = scenarioContent.substring(connectionStart, connectionEnd + 1);
    const ruleMatches = rulesSection.match(/\{[\s\S]*?\n    \}/g);
    
    const rules = [];
    if (ruleMatches) {
      ruleMatches.forEach((ruleText) => {
        try {
          const idMatch = ruleText.match(/id:\s*'([^']+)'/);
          const cardsMatch = ruleText.match(/cards:\s*\[([^\]]+)\]/);
          const unlockMatch = ruleText.match(/unlock:\s*'([^']*)'/);
          
          if (idMatch && cardsMatch && unlockMatch !== null) {
            const cards = cardsMatch[1]
              .split(',')
              .map(card => card.trim().replace(/['"]/g, ''))
              .filter(card => card);
            
            rules.push({
              id: idMatch[1],
              cards: cards,
              unlock: unlockMatch[1] || ''
            });
          }
        } catch (e) {
          // 파싱 오류 무시
        }
      });
    }
    
    // 간단한 시뮬레이션
    let availableCards = new Set(initialCards);
    let newCardsFound = true;
    let iteration = 0;
    
    while (newCardsFound && iteration < 20) {
      newCardsFound = false;
      iteration++;
      
      rules.forEach(rule => {
        const hasAllCards = rule.cards.every(card => availableCards.has(card));
        if (hasAllCards && rule.unlock && !availableCards.has(rule.unlock)) {
          availableCards.add(rule.unlock);
          newCardsFound = true;
        }
      });
    }
    
    const canWin = availableCards.has(winCondition);
    
    return {
      status: canWin ? '✅ 정상' : '⚠️  승리불가',
      winnable: canWin,
      cards: availableCards.size,
      rules: rules.length,
      winCondition: winCondition
    };
    
  } catch (error) {
    return { status: '❌ 오류', winnable: false, cards: 0, rules: 0 };
  }
}

// 모든 케이스 체크
const results = [];
for (let i = 1; i <= 20; i++) {
  const result = quickCheckCase(i);
  results.push({ case: i, ...result });
  
  console.log(`케이스 ${i.toString().padStart(2)}: ${result.status} | 카드: ${result.cards}개 | 규칙: ${result.rules}개 | 승리: ${result.winCondition || 'unknown'}`);
}

console.log('\\n요약:');
console.log('======');
const normalCases = results.filter(r => r.winnable).length;
const problemCases = results.filter(r => !r.winnable).length;

console.log(`✅ 정상 케이스: ${normalCases}개`);
console.log(`⚠️  문제 케이스: ${problemCases}개`);

if (problemCases > 0) {
  console.log('\\n문제가 있는 케이스:');
  results.filter(r => !r.winnable).forEach(r => {
    console.log(`   케이스 ${r.case}: ${r.status}`);
  });
}