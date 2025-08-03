const fs = require('fs');

console.log('승리 조건 연결 문제 케이스 체크');
console.log('================================\n');

const problemCases = [];

function checkWinCondition(caseNumber) {
    const gameFile = `src/pages/mystery_alchemy/mystery_alchemy${caseNumber}case.Game.tsx`;
    const scenarioFile = `src/pages/mystery_alchemy/data/mystery_alchemy${caseNumber}case.scenario.ts`;
    
    if (fs.existsSync(gameFile) && fs.existsSync(scenarioFile)) {
        const gameContent = fs.readFileSync(gameFile, 'utf8');
        const scenarioContent = fs.readFileSync(scenarioFile, 'utf8');
        
        const winConditionMatch = gameContent.match(/winCondition="([^"]+)"/);
        if (winConditionMatch) {
            const winCondition = winConditionMatch[1];
            const hasUnlockRule = scenarioContent.includes(`unlock: '${winCondition}'`) || 
                                 scenarioContent.includes(`unlock: "${winCondition}"`);
            
            if (!hasUnlockRule) {
                console.log(`❌ 케이스 ${caseNumber}: ${winCondition}`);
                problemCases.push({
                    case: caseNumber,
                    winCondition: winCondition,
                    issue: 'unlock 규칙 없음'
                });
            } else {
                console.log(`✅ 케이스 ${caseNumber}: ${winCondition}`);
            }
        }
    }
}

// 모든 케이스 체크
for (let i = 1; i <= 20; i++) {
    checkWinCondition(i);
}

console.log('\n문제가 있는 케이스들:');
console.log('===================');
problemCases.forEach(p => {
    console.log(`케이스 ${p.case}: ${p.winCondition} (${p.issue})`);
});

console.log(`\n총 ${problemCases.length}개의 케이스에서 문제 발견`);