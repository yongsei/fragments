# -*- coding: utf-8 -*-
# Batch Manager - 모든 배치 관리 및 진행 상황 추적

import os
import json
from datetime import datetime

class BatchManager:
    def __init__(self):
        self.progress_file = "../batch_progress.json"
        self.load_progress()
    
    def load_progress(self):
        """배치 진행 상황 로드"""
        if os.path.exists(self.progress_file):
            with open(self.progress_file, 'r', encoding='utf-8') as f:
                self.progress = json.load(f)
        else:
            self.progress = {
                "current_batch": 1,
                "completed_batches": [],
                "total_images": 0,
                "start_time": datetime.now().isoformat(),
                "cases": {
                    "case1": {"total": 48, "completed": 0},
                    "case2": {"total": 47, "completed": 0}, 
                    "case3": {"total": 49, "completed": 0},
                    "case4": {"total": 65, "completed": 0},
                    "case5": {"total": 146, "completed": 0}
                }
            }
    
    def save_progress(self):
        """진행 상황 저장"""
        with open(self.progress_file, 'w', encoding='utf-8') as f:
            json.dump(self.progress, f, indent=2, ensure_ascii=False)
        print(f"Progress saved: {self.progress_file}")
    
    def mark_batch_completed(self, case_num, batch_num, image_count):
        """배치 완료 표시"""
        batch_info = {
            "case": case_num,
            "batch": batch_num,
            "images": image_count,
            "timestamp": datetime.now().isoformat()
        }
        
        self.progress["completed_batches"].append(batch_info)
        self.progress["total_images"] += image_count
        self.progress["cases"][f"case{case_num}"]["completed"] += image_count
        
        self.save_progress()
        print(f"Batch Case{case_num}-{batch_num} completed: {image_count} images")
    
    def show_progress(self):
        """현재 진행 상황 출력"""
        print("\n" + "="*50)
        print("BATCH PROGRESS SUMMARY")
        print("="*50)
        
        total_target = sum(case["total"] for case in self.progress["cases"].values())
        total_completed = self.progress["total_images"]
        progress_percent = (total_completed / total_target) * 100 if total_target > 0 else 0
        
        print(f"Overall Progress: {total_completed}/{total_target} images ({progress_percent:.1f}%)")
        print(f"Completed Batches: {len(self.progress['completed_batches'])}")
        
        print("\nCase Progress:")
        for case_id, info in self.progress["cases"].items():
            case_percent = (info["completed"] / info["total"]) * 100 if info["total"] > 0 else 0
            print(f"  {case_id.upper()}: {info['completed']}/{info['total']} ({case_percent:.1f}%)")
        
        if self.progress["completed_batches"]:
            print("\nRecent Batches:")
            for batch in self.progress["completed_batches"][-3:]:
                print(f"  - Case{batch['case']} Batch{batch['batch']}: {batch['images']} images")
        
        print("="*50)
    
    def get_next_batch(self):
        """다음 생성할 배치 추천"""
        print("\nNext Recommended Batch:")
        
        # Case 1부터 순서대로 확인
        case_targets = [
            ("case1", 8, "Case 1 Batch 2 (B09, C03, C04, C10)"),
            ("case2", 4, "Case 2 Batch 1 (A01, A04, A05, B03)"),
            ("case3", 6, "Case 3 Batch 1 (A01, A07, A08, A09, A10, A11)"),
            ("case4", 6, "Case 4 Batch 1 (A01, A10, A11, A12, A13, A14)"),
            ("case5", 8, "Case 5 Batch 1 (A01, A04, A17, B16, C07, E02, G01, H12)")
        ]
        
        for case_id, batch_size, description in case_targets:
            completed = self.progress["cases"][case_id]["completed"]
            if completed == 0:
                print(f"START: {description}")
                return case_id, 1, batch_size
            elif completed < self.progress["cases"][case_id]["total"]:
                next_batch = (completed // 8) + 1
                print(f"CONTINUE: {case_id} Batch {next_batch}")
                return case_id, next_batch, min(8, self.progress["cases"][case_id]["total"] - completed)
        
        print("ALL BATCHES COMPLETED!")
        return None, None, None

def show_folder_structure():
    """폴더 구조 확인"""
    print("\nFolder Structure:")
    print("colab_img/")
    
    for case_num in range(1, 6):
        case_path = f"../case{case_num}"
        if os.path.exists(case_path):
            files = [f for f in os.listdir(case_path) if f.endswith('.png')]
            print(f"├── case{case_num}/ ({len(files)} images)")
            for file in files[:3]:  # Show first 3 files
                print(f"│   ├── {file}")
            if len(files) > 3:
                print(f"│   └── ... and {len(files)-3} more")
        else:
            print(f"├── case{case_num}/ (empty)")
    
    print("└── scripts/")
    print("    ├── unified_generator.py")
    print("    └── batch_manager.py")

if __name__ == "__main__":
    manager = BatchManager()
    
    print("Batch Manager v2.0")
    manager.show_progress()
    manager.get_next_batch()
    show_folder_structure()
    
    print("\nAvailable functions:")
    print("- manager.show_progress()")
    print("- manager.get_next_batch()")
    print("- manager.mark_batch_completed(case_num, batch_num, count)")