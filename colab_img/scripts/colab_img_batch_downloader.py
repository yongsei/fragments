# 🎴 Colab 이미지 배치 다운로드 도구
# Colab 무료 계정용 - 중간 중간 저장 기능

import os
import requests
from urllib.parse import urlparse
import json
from datetime import datetime

class ColabImageDownloader:
    def __init__(self, base_path="C:/workspace/cloude/fragments/colab_img"):
        self.base_path = base_path
        self.progress_file = os.path.join(base_path, "download_progress.json")
        self.load_progress()
    
    def load_progress(self):
        """진행 상황 불러오기"""
        if os.path.exists(self.progress_file):
            with open(self.progress_file, 'r', encoding='utf-8') as f:
                self.progress = json.load(f)
        else:
            self.progress = {
                "current_batch": 1,
                "completed_batches": [],
                "failed_downloads": [],
                "total_downloaded": 0
            }
    
    def save_progress(self):
        """진행 상황 저장"""
        with open(self.progress_file, 'w', encoding='utf-8') as f:
            json.dump(self.progress, f, indent=2, ensure_ascii=False)
        print(f"✅ 진행 상황 저장됨: {self.progress_file}")
    
    def download_batch_images(self, case_num, batch_num, image_urls, card_ids):
        """배치 이미지 다운로드"""
        case_path = os.path.join(self.base_path, f"case{case_num}")
        os.makedirs(case_path, exist_ok=True)
        
        batch_info = {
            "case": case_num,
            "batch": batch_num,
            "timestamp": datetime.now().isoformat(),
            "downloaded": [],
            "failed": []
        }
        
        print(f"\n🎨 Case {case_num} - 배치 {batch_num} 다운로드 시작...")
        
        for i, (url, card_id) in enumerate(zip(image_urls, card_ids)):
            try:
                print(f"📥 다운로드 중... {card_id} ({i+1}/{len(image_urls)})")
                
                response = requests.get(url, timeout=30)
                response.raise_for_status()
                
                # 파일명: case1_A01.png
                filename = f"case{case_num}_{card_id}.png"
                filepath = os.path.join(case_path, filename)
                
                with open(filepath, 'wb') as f:
                    f.write(response.content)
                
                batch_info["downloaded"].append({
                    "card_id": card_id,
                    "filename": filename,
                    "size": len(response.content)
                })
                
                print(f"✅ 저장됨: {filename}")
                
            except Exception as e:
                print(f"❌ 실패: {card_id} - {str(e)}")
                batch_info["failed"].append({
                    "card_id": card_id,
                    "error": str(e)
                })
        
        # 배치 완료 기록
        self.progress["completed_batches"].append(batch_info)
        self.progress["total_downloaded"] += len(batch_info["downloaded"])
        self.progress["current_batch"] = batch_num + 1
        
        if batch_info["failed"]:
            self.progress["failed_downloads"].extend(batch_info["failed"])
        
        self.save_progress()
        
        print(f"\n🎯 배치 {batch_num} 완료!")
        print(f"✅ 성공: {len(batch_info['downloaded'])}장")
        if batch_info["failed"]:
            print(f"❌ 실패: {len(batch_info['failed'])}장")
        
        return batch_info
    
    def manual_save_urls(self, case_num, batch_num, urls_text):
        """수동으로 URL 목록 저장 (Colab에서 복사한 URL들)"""
        urls = [url.strip() for url in urls_text.split('\n') if url.strip()]
        
        save_data = {
            "case": case_num,
            "batch": batch_num,
            "timestamp": datetime.now().isoformat(),
            "urls": urls,
            "count": len(urls)
        }
        
        save_file = os.path.join(self.base_path, f"case{case_num}_batch{batch_num}_urls.json")
        with open(save_file, 'w', encoding='utf-8') as f:
            json.dump(save_data, f, indent=2, ensure_ascii=False)
        
        print(f"💾 URL 목록 저장됨: {save_file}")
        print(f"📊 총 {len(urls)}개 URL 저장")
        
        return save_data
    
    def show_progress(self):
        """현재 진행 상황 출력"""
        print("\n📊 현재 진행 상황:")
        print(f"현재 배치: {self.progress['current_batch']}")
        print(f"완료된 배치: {len(self.progress['completed_batches'])}")
        print(f"총 다운로드: {self.progress['total_downloaded']}장")
        
        if self.progress['failed_downloads']:
            print(f"실패한 다운로드: {len(self.progress['failed_downloads'])}장")
        
        if self.progress['completed_batches']:
            print("\n✅ 완료된 배치들:")
            for batch in self.progress['completed_batches']:
                print(f"  - Case {batch['case']} 배치 {batch['batch']}: {len(batch['downloaded'])}장")

# 사용 예시
if __name__ == "__main__":
    downloader = ColabImageDownloader()
    
    print("🎴 Colab 이미지 배치 다운로더")
    print("=" * 50)
    
    # 진행 상황 확인
    downloader.show_progress()
    
    print("\n사용법:")
    print("1. Colab에서 이미지 생성 완료")
    print("2. 이미지 URL들을 복사")
    print("3. downloader.manual_save_urls(case_num, batch_num, urls_text) 실행")
    print("4. downloader.download_batch_images() 실행")