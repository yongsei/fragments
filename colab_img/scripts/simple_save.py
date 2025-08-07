# -*- coding: utf-8 -*-
# Simple batch save script without unicode issues

import os
import requests
import json
from datetime import datetime

class SimpleImageSaver:
    def __init__(self):
        self.base_path = "colab_img"
        if not os.path.exists(self.base_path):
            os.makedirs(self.base_path)
    
    def save_batch(self, case_num, batch_num, urls_text, card_ids):
        """Save batch images"""
        case_path = os.path.join(self.base_path, f"case{case_num}")
        os.makedirs(case_path, exist_ok=True)
        
        # Parse URLs
        urls = [url.strip() for url in urls_text.strip().split('\n') if url.strip() and 'https://' in url]
        
        if not urls:
            print("No URLs found. Please paste image URLs.")
            return
        
        print(f"Starting Case {case_num} Batch {batch_num} download...")
        print(f"Found {len(urls)} URLs")
        
        downloaded = 0
        for i, url in enumerate(urls):
            if i >= len(card_ids):
                break
                
            try:
                print(f"Downloading {card_ids[i]} ({i+1}/{len(urls)})...")
                
                response = requests.get(url, timeout=30)
                response.raise_for_status()
                
                filename = f"case{case_num}_{card_ids[i]}.png"
                filepath = os.path.join(case_path, filename)
                
                with open(filepath, 'wb') as f:
                    f.write(response.content)
                
                print(f"Saved: {filename}")
                downloaded += 1
                
            except Exception as e:
                print(f"Failed: {card_ids[i]} - {str(e)}")
        
        print(f"\nBatch {batch_num} completed!")
        print(f"Downloaded: {downloaded}/{len(urls)} images")
        
        return downloaded

# Initialize saver
saver = SimpleImageSaver()

def save_case1_batch1():
    """Save Case 1 Batch 1 - Main characters"""
    print("Case 1 Batch 1: Main characters")
    
    urls = """
# Paste your Colab image URLs here
# Example:
# https://ed0134acadd47464a7.gradio.live/file=...
# https://ed0134acadd47464a7.gradio.live/file=...
"""
    
    card_ids = ["A01", "A06", "B03", "B06", "B09", "C03", "C04", "C10"]
    
    if "gradio.live" in urls:
        return saver.save_batch(1, 1, urls, card_ids)
    else:
        print("Please paste image URLs in the urls variable")
        return None

def emergency_save(urls_text, case_num, batch_num):
    """Emergency save function"""
    print(f"Emergency save: Case {case_num} Batch {batch_num}")
    
    # Save URLs to file
    save_file = f"case{case_num}_batch{batch_num}_urls.txt"
    with open(save_file, 'w') as f:
        f.write(urls_text)
    
    print(f"URLs saved to: {save_file}")
    return save_file

if __name__ == "__main__":
    print("Simple Image Batch Saver")
    print("=" * 30)
    print("Available functions:")
    print("1. save_case1_batch1()")
    print("2. emergency_save(urls, case, batch)")
    print("\nTo save Case 1 Batch 1:")
    print("save_case1_batch1()")