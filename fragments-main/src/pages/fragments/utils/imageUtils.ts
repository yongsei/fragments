/**
 * 카드 이미지 경로를 가져오는 유틸리티 함수들
 */

/**
 * caseId에서 실제 케이스 폴더명을 추출
 * @param caseId 케이스 ID (예: "case1-ch1", "case2-ch3" 또는 "case1")
 * @returns 케이스 폴더명 (예: "case1", "case2")
 */
const extractCaseFolder = (caseId: string): string => {
  // case1-ch1 → case1, case2-ch3 → case2 등으로 변환
  const match = caseId.match(/^(case\d+)/);
  return match ? match[1] : caseId;
};

/**
 * 케이스와 카드 ID를 기반으로 이미지 경로를 생성
 * @param caseId 케이스 ID (예: "case1-ch1", "case2" 등)
 * @param cardId 카드 ID (예: "A01", "B03")
 * @returns 이미지 경로 또는 null (이미지가 없을 경우)
 */
export const getCardImagePath = (caseId: string, cardId: string): string => {
  const caseFolder = extractCaseFolder(caseId);
  // 이미지 경로 생성
  const imagePath = `/fragments-main/src/pages/fragments/games/${caseFolder}/img/${cardId}.jpg`;
  return imagePath;
};

/**
 * 이미지가 존재하는지 확인하는 함수
 * @param imagePath 이미지 경로
 * @returns Promise<boolean> - 이미지 존재 여부
 */
export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = imagePath;
  });
};

/**
 * 카드 이미지 URL을 public 폴더에서 가져오는 함수
 * @param caseId 케이스 ID (예: "case1-ch1", "case2" 등)
 * @param cardId 카드 ID
 * @returns Promise<string | null> - 이미지 URL 또는 null
 */
export const importCardImage = async (caseId: string, cardId: string): Promise<string | null> => {
  const caseFolder = extractCaseFolder(caseId);
  
  // case1은 img 서브폴더 있음, case2,3,4,5는 직접 접근
  const imagePath = caseFolder === 'case1' 
    ? `/fragments/games/${caseFolder}/img/${cardId}.jpg`
    : `/fragments/games/${caseFolder}/${cardId}.jpg`;
  
  try {
    // 이미지 존재 여부 확인
    const exists = await checkImageExists(imagePath);
    if (exists) {
      return imagePath;
    } else {
      console.log(`Image not found for card ${cardId} in ${caseFolder} (original caseId: ${caseId})`);
      console.log(`Tried path: ${imagePath}`);
      return null;
    }
  } catch (error) {
    console.log(`Error loading image for card ${cardId} in ${caseFolder}:`, error);
    return null;
  }
};