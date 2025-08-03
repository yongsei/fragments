const fs = require('fs');
const path = require('path');

console.log('초기 카드로 승리 조건 도달 가능성 검사');
console.log('==========================================\n');

function checkCase(caseNumber) {
    console.log(`=== 케이스 ${caseNumber} ===`);
    
    const gameFile = `src/pages/mystery_alchemy/mystery_alchemy${caseNumber}case.Game.tsx`;
    const scenarioFile = `src/pages/mystery_alchemy/data/mystery_alchemy${caseNumber}case.scenario.ts`;
    
    if (fs.existsSync(gameFile)) {
        if (fs.existsSync(scenarioFile)) {
            console.log('파일 존재: 게임 + 시나리오');
            
            // 게임 파일에서 초기 카드와 승리 조건 추출
            const gameContent = fs.readFileSync(gameFile, 'utf8');
            
            const initialCardsMatch = gameContent.match(/initialCards=\{([^}]+)\}/s) || 
                                      gameContent.match(/initialCards:\s*\[([^\]]+)\]/s);
            if (initialCardsMatch) {
                console.log('초기 카드:');
                const cards = initialCardsMatch[1]
                    .split(/[,\n]/)
                    .map(line => line.trim().replace(/[',"\s]/g, ''))
                    .filter(card => card && !card.startsWith('//'));
                cards.forEach(card => console.log(`  - ${card}`));
                console.log(`  총 ${cards.length}개 카드`);
            } else {
                console.log('초기 카드: 파싱 실패');
            }
            
            const winConditionMatch = gameContent.match(/winCondition="([^"]+)"/);
            if (winConditionMatch) {
                console.log(`승리 조건: ${winConditionMatch[1]}`);
            }
            
            // 시나리오 파일에서 연결 규칙 수 확인
            const scenarioContent = fs.readFileSync(scenarioFile, 'utf8');
            const cardRules = scenarioContent.match(/cards:\s*\[/g);
            if (cardRules) {
                console.log(`연결 규칙 개수: ${cardRules.length}개`);
            }
            
            // 승리 조건으로 이어지는 규칙 찾기
            const winRules = scenarioContent.match(new RegExp(`unlock:\\s*['"]${winConditionMatch?.[1] || 'unknown'}['"]`, 'g'));
            if (winRules) {
                console.log(`승리 조건으로 이어지는 규칙: ${winRules.length}개`);
            }
            
        } else {
            console.log(`시나리오 파일 없음: ${scenarioFile}`);
        }
    } else {
        console.log(`게임 파일 없음: ${gameFile}`);
    }
    console.log('');
}

// 케이스 1-20 체크
for (let i = 1; i <= 20; i++) {
    checkCase(i);
}

console.log('검사 완료');