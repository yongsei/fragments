const fs = require('fs');

console.log('케이스 4 연결 규칙 전체 검증');
console.log('=========================\n');

// 케이스 4 파일 읽기
const gameContent = fs.readFileSync('src/pages/mystery_alchemy/mystery_alchemy4case.Game.tsx', 'utf8');
const scenarioContent = fs.readFileSync('src/pages/mystery_alchemy/data/mystery_alchemy4case.scenario.ts', 'utf8');

// 초기 카드 (업데이트됨)
const initialCards = [
  'alchemy_lab', 'library', 'storage_room',
  'alchemical_symbols', 'distilled_memories', 'failed_experiments',
  'jealous_apprentice', 'rival_alchemist', 'mysterious_collector'
];

console.log('초기 카드:', initialCards);
console.log('');

// unlock 맵 추출
const unlockMapMatch = gameContent.match(/unlockMap:\s*Record<string,\s*string\[\]>\s*=\s*\{([^}]+)\}/s);
let unlockMap = {};
if (unlockMapMatch) {
  const mapContent = unlockMapMatch[1];
  const matches = mapContent.match(/'([^']+)':\s*\['([^']+)'\]/g);
  if (matches) {
    matches.forEach(match => {
      const [, key, value] = match.match(/'([^']+)':\s*\['([^']+)'\]/);
      unlockMap[key] = [value];
    });
  }
}

console.log('Unlock 맵:', unlockMap);
console.log('');

// 연결 규칙들 파싱 - 더 정확한 방법
const connectionStart = scenarioContent.indexOf('connectionRules: [');
const connectionEnd = scenarioContent.lastIndexOf(']');
const rulesSection = scenarioContent.substring(connectionStart, connectionEnd + 1);

if (connectionStart === -1) {
  console.log('연결 규칙을 찾을 수 없습니다.');
  return;
}

// 규칙별로 파싱 - 중첩된 객체를 고려한 정규식
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
      console.log(`규칙 ${index + 1} 파싱 오류:`, e.message);
    }
  });
}

console.log(`총 ${rules.length}개의 연결 규칙 발견\n`);

// 초기 카드로 시작하여 도달 가능한 모든 카드들 찾기
let availableCards = new Set(initialCards);
let newCardsFound = true;
let iteration = 0;

console.log('카드 발견 시뮬레이션:');
console.log('초기 카드:', Array.from(availableCards).join(', '));

while (newCardsFound && iteration < 20) {
  newCardsFound = false;
  iteration++;
  
  console.log(`\n--- 반복 ${iteration} ---`);
  
  rules.forEach(rule => {
    // 모든 필요한 카드가 있는지 확인
    const hasAllCards = rule.cards.every(card => availableCards.has(card));
    
    if (hasAllCards && rule.unlock) {
      // unlock 카드가 아직 없다면 추가
      if (!availableCards.has(rule.unlock)) {
        availableCards.add(rule.unlock);
        newCardsFound = true;
        console.log(`✅ ${rule.id}: [${rule.cards.join(' + ')}] → ${rule.unlock}`);
        console.log(`   결과: ${rule.result}`);
      }
    }
  });
  
  if (!newCardsFound) {
    console.log('더 이상 새로운 카드를 발견할 수 없습니다.');
  }
}

console.log('\n최종 도달 가능한 카드들:');
console.log(Array.from(availableCards).sort().join(', '));

// 승리 조건 체크
const winCondition = 'ultimate_truth';
console.log(`\n승리 조건 "${winCondition}" 도달 가능 여부:`, availableCards.has(winCondition) ? '✅ 가능' : '❌ 불가능');

// 문제가 있는 규칙들 찾기
console.log('\n문제가 있을 수 있는 규칙들:');
rules.forEach(rule => {
  const hasAllCards = rule.cards.every(card => availableCards.has(card));
  if (!hasAllCards) {
    const missingCards = rule.cards.filter(card => !availableCards.has(card));
    console.log(`⚠️  ${rule.id}: 필요한 카드 [${missingCards.join(', ')}]가 도달 불가능`);
  }
});

console.log('\n검증 완료!');