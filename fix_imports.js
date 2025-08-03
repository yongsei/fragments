const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/mystery_alchemy/data/mystery_alchemy12case.scenario.ts',
  'src/pages/mystery_alchemy/data/mystery_alchemy13case.scenario.ts', 
  'src/pages/mystery_alchemy/data/mystery_alchemy14case.scenario.ts',
  'src/pages/mystery_alchemy/data/mystery_alchemy15case.scenario.ts',
  'src/pages/mystery_alchemy/data/mystery_alchemy16case.scenario.ts',
  'src/pages/mystery_alchemy/data/mystery_alchemy17case.scenario.ts',
  'src/pages/mystery_alchemy/data/mystery_alchemy18case.scenario.ts',
  'src/pages/mystery_alchemy/data/mystery_alchemy19case.scenario.ts',
  'src/pages/mystery_alchemy/data/mystery_alchemy20case.scenario.ts'
];

console.log('타입 import 경로 수정 중...');

files.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = content.replace(
      'import { GameScenario } from "../types";',
      'import { GameScenario } from "../types/index";'
    );
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✅ 수정됨: ${filePath}`);
    } else {
      console.log(`⏭️  이미 올바름: ${filePath}`);
    }
  } else {
    console.log(`❌ 파일 없음: ${filePath}`);
  }
});

console.log('모든 import 경로 수정 완료!');