/**
 * 카드 이미지 경로를 가져오는 유틸리티 함수들
 */

// 이미지 캐시 - 메모리 사용량 제한
const imageCache = new Map<string, string | null>();
const MAX_CACHE_SIZE = 100; // 최대 100개 이미지 캐시

/**
 * 이미지 캐시 정리 함수
 */
export const clearImageCache = (): void => {
  imageCache.clear();
  console.log('🧹 Image cache cleared');
};

/**
 * LRU 방식으로 캐시 크기 관리
 */
const manageCacheSize = (): void => {
  if (imageCache.size >= MAX_CACHE_SIZE) {
    // 가장 오래된 항목들 삭제 (Map은 삽입 순서 유지)
    const keysToDelete = Array.from(imageCache.keys()).slice(0, Math.floor(MAX_CACHE_SIZE / 2));
    keysToDelete.forEach(key => imageCache.delete(key));
    console.log(`🗑️ Cache pruned: removed ${keysToDelete.length} old entries`);
  }
};

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
 * 이미지가 존재하는지 확인하는 함수 (메모리 누수 방지)
 * @param imagePath 이미지 경로
 * @returns Promise<boolean> - 이미지 존재 여부
 */
export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    
    const cleanup = () => {
      img.onload = null;
      img.onerror = null;
      img.src = '';
    };
    
    img.onload = () => {
      cleanup();
      resolve(true);
    };
    
    img.onerror = () => {
      cleanup();
      resolve(false);
    };
    
    img.src = imagePath;
    
    // 10초 타임아웃으로 메모리 누수 방지
    setTimeout(() => {
      cleanup();
      resolve(false);
    }, 10000);
  });
};

/**
 * 카드 이미지 URL을 public 폴더에서 가져오는 함수 (캐싱 적용)
 * @param caseId 케이스 ID (예: "case1-ch1", "case2" 등)
 * @param cardId 카드 ID
 * @returns Promise<string | null> - 이미지 URL 또는 null
 */
export const importCardImage = async (caseId: string, cardId: string): Promise<string | null> => {
  const cacheKey = `${caseId}-${cardId}`;
  
  // 캐시에서 먼저 확인
  if (imageCache.has(cacheKey)) {
    const cachedResult = imageCache.get(cacheKey);
    console.log(`🎯 Cache hit: ${cacheKey} -> ${cachedResult ? 'found' : 'not found'}`);
    return cachedResult || null;
  }
  
  const caseFolder = extractCaseFolder(caseId);
  
  // case1은 img 서브폴더 있음, case2,3,4,5는 직접 접근
  const imagePath = caseFolder === 'case1' 
    ? `/fragments/games/${caseFolder}/img/${cardId}.jpg`
    : `/fragments/games/${caseFolder}/${cardId}.jpg`;
  
  try {
    // 이미지 존재 여부 확인
    const exists = await checkImageExists(imagePath);
    const result = exists ? imagePath : null;
    
    // 캐시에 저장 (성공/실패 모두 캐시)
    manageCacheSize(); // 캐시 크기 관리
    imageCache.set(cacheKey, result);
    
    if (exists) {
      console.log(`✅ Image loaded and cached: ${cardId} in ${caseFolder}`);
      return imagePath;
    } else {
      console.log(`❌ Image not found for card ${cardId} in ${caseFolder} (original caseId: ${caseId})`);
      console.log(`Tried path: ${imagePath}`);
      return null;
    }
  } catch (error) {
    console.log(`Error loading image for card ${cardId} in ${caseFolder}:`, error);
    imageCache.set(cacheKey, null); // 에러도 캐시하여 반복 요청 방지
    return null;
  }
};