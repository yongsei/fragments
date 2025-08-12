// 게임 완료 상태 테스트용 스크립트
import { isChapterCompleted, getCompletedChapters } from './fragments-main/src/pages/fragments/utils/gameProgress.ts';

// 사용 방법 예시:

// 1. 특정 챕터 완료 확인
async function checkChapter() {
  const isCase1Ch1Completed = await isChapterCompleted('case1', 1);
  console.log('Case1 Chapter1 완료 여부:', isCase1Ch1Completed);
}

// 2. 케이스별 완료된 모든 챕터 확인
async function checkAllChapters() {
  const case1Chapters = await getCompletedChapters('case1');
  console.log('Case1 완료된 챕터들:', case1Chapters);
  
  const case2Chapters = await getCompletedChapters('case2');
  console.log('Case2 완료된 챕터들:', case2Chapters);
  
  const case5Chapters = await getCompletedChapters('case5');
  console.log('Case5 완료된 챕터들:', case5Chapters);
}

// 3. 전체 케이스 완료율 계산
async function calculateProgress() {
  const totalChapters = {
    'case1': 4, // Case1은 4개 챕터
    'case2': 4, // Case2는 4개 챕터  
    'case3': 4, // Case3은 4개 챕터
    'case4': 4, // Case4는 4개 챕터
    'case5': 8  // Case5는 8개 챕터
  };
  
  for (const [caseId, totalCount] of Object.entries(totalChapters)) {
    const completed = await getCompletedChapters(caseId);
    const progress = (completed.length / totalCount * 100).toFixed(1);
    
    console.log(`${caseId.toUpperCase()} 진행률: ${progress}% (${completed.length}/${totalCount})`);
  }
}

// 브라우저 콘솔에서 실행할 함수들
window.checkGameProgress = {
  checkChapter,
  checkAllChapters, 
  calculateProgress
};