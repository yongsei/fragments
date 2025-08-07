# 🚀 빠른 배치 저장 스크립트
# Colab에서 이미지 생성 후 즉시 저장용

from colab_img_batch_downloader import ColabImageDownloader

# 초기화
downloader = ColabImageDownloader()

# ===== 배치 1: Case 1 주인공/수사관 (8장) =====
def save_case1_batch1():
    """Case 1 배치 1 저장 - 주인공/수사관 카드들"""
    
    print("🎴 Case 1 배치 1: 주인공/수사관 카드 저장")
    
    # Colab에서 생성한 이미지 URL들을 여기 붙여넣기
    urls = """
    # 여기에 Colab에서 복사한 이미지 URL들을 붙여넣으세요
    # 예시:
    # https://ed0134acadd47464a7.gradio.live/file=...
    # https://ed0134acadd47464a7.gradio.live/file=...
    """
    
    # 카드 ID 순서 (AI_Image_Generation_Batch_Request.md 참조)
    card_ids = ["A01", "A06", "B03", "B06", "B09", "C03", "C04", "C10"]
    
    if "https://" in urls:
        # URL 목록 저장
        url_list = [url.strip() for url in urls.strip().split('\n') if url.strip() and 'https://' in url]
        
        print(f"📥 {len(url_list)}개 이미지 다운로드 시작...")
        
        # 배치 다운로드 실행
        result = downloader.download_batch_images(
            case_num=1,
            batch_num=1, 
            image_urls=url_list,
            card_ids=card_ids[:len(url_list)]
        )
        
        return result
    else:
        print("❌ URL을 찾을 수 없습니다. urls 변수에 Colab 이미지 URL들을 붙여넣으세요.")
        return None

# ===== 배치 2: Case 2 우주선 크루 (4장) =====
def save_case2_batch1():
    """Case 2 배치 1 저장 - 우주선 크루 카드들"""
    
    print("🎴 Case 2 배치 1: 우주선 크루 카드 저장")
    
    urls = """
    # 여기에 Case 2 이미지 URL들을 붙여넣으세요
    """
    
    card_ids = ["A01", "A04", "A05", "B03"]
    
    if "https://" in urls:
        url_list = [url.strip() for url in urls.strip().split('\n') if url.strip() and 'https://' in url]
        
        result = downloader.download_batch_images(
            case_num=2,
            batch_num=1,
            image_urls=url_list,
            card_ids=card_ids[:len(url_list)]
        )
        
        return result
    else:
        print("❌ Case 2 URL을 추가해주세요.")
        return None

# ===== 긴급 저장 함수 =====
def emergency_save(urls_text, case_num, batch_num):
    """긴급 저장 - Colab 세션이 끊어지기 전 빠른 저장"""
    
    print(f"🚨 긴급 저장: Case {case_num} 배치 {batch_num}")
    
    # URL 목록만 먼저 저장
    downloader.manual_save_urls(case_num, batch_num, urls_text)
    
    print("💾 URL 목록 저장 완료! 나중에 다운로드할 수 있습니다.")

# ===== 실행 영역 =====
if __name__ == "__main__":
    print("🎴 빠른 배치 저장 도구")
    print("=" * 40)
    
    # 현재 진행 상황
    downloader.show_progress()
    
    print("\n📋 사용 가능한 함수들:")
    print("1. save_case1_batch1() - Case 1 주인공/수사관 저장")
    print("2. save_case2_batch1() - Case 2 우주선 크루 저장") 
    print("3. emergency_save(urls, case, batch) - 긴급 저장")
    
    print("\n⚡ 빠른 실행:")
    print("save_case1_batch1()  # Case 1 배치 1 저장")