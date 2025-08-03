const fs = require('fs');

function checkCase(caseNumber) {
  console.log(`🔍 케이스 ${caseNumber} 연결 규칙 검증`);
  console.log('='.repeat(40));
  
  const gameFile = `src/pages/mystery_alchemy/mystery_alchemy${caseNumber}case.Game.tsx`;
  const scenarioFile = `src/pages/mystery_alchemy/data/mystery_alchemy${caseNumber}case.scenario.ts`;
  
  // 파일 존재 확인
  if (!fs.existsSync(gameFile)) {
    console.log(`❌ 게임 파일이 없습니다: ${gameFile}`);
    return;
  }
  
  if (!fs.existsSync(scenarioFile)) {
    console.log(`❌ 시나리오 파일이 없습니다: ${scenarioFile}`);
    return;
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
    
    // 승리 조건 추출
    const winConditionMatch = gameContent.match(/winCondition="([^"]+)"/);
    const winCondition = winConditionMatch ? winConditionMatch[1] : 'unknown';
    
    console.log(`📋 초기 카드 (${initialCards.length}개):`);
    initialCards.forEach(card => console.log(`   - ${card}`));
    console.log(`🎯 승리 조건: ${winCondition}`);
    console.log('');
    
    // 연결 규칙 파싱
    const connectionStart = scenarioContent.indexOf('connectionRules: [');
    if (connectionStart === -1) {
      console.log('❌ 연결 규칙을 찾을 수 없습니다.');
      return;
    }
    
    const connectionEnd = scenarioContent.lastIndexOf(']');
    const rulesSection = scenarioContent.substring(connectionStart, connectionEnd + 1);
    const ruleMatches = rulesSection.match(/\{[\s\S]*?\n    \}/g);
    
    const rules = [];
    if (ruleMatches) {
      ruleMatches.forEach((ruleText, index) => {
        try {
          const idMatch = ruleText.match(/id:\s*'([^']+)'/);
          const cardsMatch = ruleText.match(/cards:\s*\[([^\]]+)\]/);
          const unlockMatch = ruleText.match(/unlock:\s*'([^']*)'/);
          const resultMatch = ruleText.match(/result:\s*'([^']+)'/);
          
          if (idMatch && cardsMatch && unlockMatch !== null && resultMatch) {
            const cards = cardsMatch[1]
              .split(',')
              .map(card => card.trim().replace(/['"]/g, ''))
              .filter(card => card);
            
            rules.push({
              id: idMatch[1],
              cards: cards,
              unlock: unlockMatch[1] || '',
              result: resultMatch[1]
            });
          }
        } catch (e) {
          // 파싱 오류는 무시
        }
      });
    }
    
    console.log(`🔗 연결 규칙 (${rules.length}개)`);
    console.log('');
    
    // 게임 시뮬레이션
    let availableCards = new Set(initialCards);
    let newCardsFound = true;
    let iteration = 0;
    let totalUnlocked = 0;
    
    while (newCardsFound && iteration < 20) {
      newCardsFound = false;
      iteration++;
      
      const currentIterationUnlocks = [];
      
      rules.forEach(rule => {
        const hasAllCards = rule.cards.every(card => availableCards.has(card));
        
        if (hasAllCards && rule.unlock && !availableCards.has(rule.unlock)) {
          availableCards.add(rule.unlock);
          newCardsFound = true;
          totalUnlocked++;
          currentIterationUnlocks.push({
            rule: rule.id,
            cards: rule.cards,
            unlock: rule.unlock,
            result: rule.result
          });
        }
      });
      
      if (currentIterationUnlocks.length > 0) {
        console.log(`🔄 반복 ${iteration}: ${currentIterationUnlocks.length}개 카드 발견`);
        currentIterationUnlocks.forEach(unlock => {
          console.log(`   ✅ ${unlock.rule}: [${unlock.cards.join(' + ')}] → ${unlock.unlock}`);
        });
        console.log('');
      }
    }
    
    // 결과 요약
    const canWin = availableCards.has(winCondition);
    console.log('📊 검증 결과:');
    console.log(`   총 접근 가능한 카드: ${availableCards.size}개`);
    console.log(`   새로 발견한 카드: ${totalUnlocked}개`);
    console.log(`   승리 조건 달성: ${canWin ? '✅ 가능' : '❌ 불가능'}`);
    
    // 문제가 있는 규칙들
    const problematicRules = [];
    rules.forEach(rule => {
      const hasAllCards = rule.cards.every(card => availableCards.has(card));
      if (!hasAllCards) {
        const missingCards = rule.cards.filter(card => !availableCards.has(card));
        problematicRules.push({
          id: rule.id,
          missingCards: missingCards
        });
      }
    });
    
    if (problematicRules.length > 0) {
      console.log('');
      console.log('⚠️  접근 불가능한 규칙들:');
      problematicRules.forEach(rule => {
        console.log(`   ${rule.id}: [${rule.missingCards.join(', ')}] 카드 없음`);
      });
    }
    
    // 최종 상태
    if (canWin) {
      console.log('');
      console.log('🎉 이 케이스는 정상적으로 플레이 가능합니다!');
    } else {
      console.log('');
      console.log('🚨 이 케이스는 승리 조건에 도달할 수 없습니다!');
    }
    
  } catch (error) {
    console.log(`❌ 오류 발생: ${error.message}`);
  }
}

// 명령행 인수 처리
const caseNumber = process.argv[2];
if (!caseNumber) {
  console.log('사용법: node check_single_case.js [케이스번호]');
  console.log('예시: node check_single_case.js 4');
  process.exit(1);
}

checkCase(caseNumber);