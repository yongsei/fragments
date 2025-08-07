# -*- coding: utf-8 -*-
# Unified Style Image Generator - 통일된 스타일로 배치 생성

import requests
import json
import base64
import os
import sys
from datetime import datetime

# Add parent directory to path to import from colab_img folder
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

class UnifiedStyleAPI:
    def __init__(self, api_url="https://ed0134acadd47464a7.gradio.live"):
        self.api_url = api_url.rstrip('/')
        self.txt2img_url = f"{self.api_url}/sdapi/v1/txt2img"
        
    def generate_unified_batch(self, prompt, negative_prompt="", width=512, height=768, 
                              steps=25, cfg_scale=7.5, batch_size=4, seed=-1):
        """Generate unified style batch with consistent parameters"""
        
        payload = {
            "prompt": prompt,
            "negative_prompt": negative_prompt,
            "width": width,
            "height": height,
            "steps": steps,
            "cfg_scale": cfg_scale,
            "batch_size": batch_size,
            "sampler_name": "Euler a",
            "seed": seed,  # Fixed seed for consistency
            "subseed": -1,
            "save_images": False,
            "send_images": True
        }
        
        try:
            print(f"Generating {batch_size} unified style images...")
            print(f"Seed: {seed}")
            print(f"Prompt: {prompt[:80]}...")
            
            response = requests.post(self.txt2img_url, json=payload, timeout=300)
            response.raise_for_status()
            
            result = response.json()
            images = result.get('images', [])
            
            print(f"Generated {len(images)} images with unified style")
            return images
            
        except Exception as e:
            print(f"API Error: {str(e)}")
            return []
    
    def save_images(self, images, case_num, batch_num, card_ids, prefix="unified"):
        """Save images with unified naming"""
        
        if not images:
            print("No images to save")
            return
        
        # Save to parent case folder
        case_path = f"../case{case_num}"
        os.makedirs(case_path, exist_ok=True)
        
        saved_count = 0
        for i, image_data in enumerate(images):
            if i >= len(card_ids):
                break
                
            try:
                # Decode base64 image
                image_bytes = base64.b64decode(image_data)
                
                # Save with unified prefix
                filename = f"{prefix}_case{case_num}_{card_ids[i]}.png"
                filepath = os.path.join(case_path, filename)
                
                with open(filepath, 'wb') as f:
                    f.write(image_bytes)
                
                print(f"Saved: {filename} ({len(image_bytes)} bytes)")
                saved_count += 1
                
            except Exception as e:
                print(f"Save error for {card_ids[i]}: {str(e)}")
        
        print(f"Saved {saved_count}/{len(images)} unified images to {case_path}/")
        return saved_count

# Initialize unified API
unified_api = UnifiedStyleAPI("https://ed0134acadd47464a7.gradio.live")

def generate_case1_unified_v2():
    """Generate Case 1 with unified pixel art style"""
    
    print("=== Case 1 Unified Pixel Art Generation ===")
    
    # Unified prompt for consistent style
    unified_prompt = """
    pixel art, 16bit retro style, medieval fantasy character collection, 
    4 characters in Gothic cathedral setting: 
    1) hooded inquisitor in dark robes holding scroll, 
    2) worried guard in chainmail armor pointing, 
    3) detective examining clues, 
    4) humble shelter manager in simple robes,
    consistent pixel art style, same color palette, unified lighting, 
    detailed sprite art, retro RPG character sheet layout, 
    dark fantasy atmosphere, dramatic shadows
    """
    
    negative_prompt = """
    realistic, smooth, blurry, 3d, photograph, anti-aliasing, high resolution, 
    bad anatomy, extra limbs, inconsistent style, different art styles, 
    modern clothing, bright colors
    """
    
    card_ids = ["A01", "A06", "B03", "B06"]
    
    # Generate with fixed seed for consistency
    images = unified_api.generate_unified_batch(
        prompt=unified_prompt,
        negative_prompt=negative_prompt,
        width=512,
        height=768,
        steps=30,
        cfg_scale=8.0,
        batch_size=4,
        seed=424242  # Fixed seed for consistent style
    )
    
    if images:
        saved = unified_api.save_images(
            images, 
            case_num=1, 
            batch_num=1, 
            card_ids=card_ids,
            prefix="v2_unified"
        )
        print(f"\nUnified batch completed! Saved {saved} images.")
        print("Check the style consistency between images!")
    else:
        print("No images generated")
    
    return images

def generate_case1_individual_consistent():
    """Generate each character individually but with consistent base style"""
    
    print("=== Case 1 Individual with Consistent Base ===")
    
    base_style = """
    pixel art, 16bit retro style, medieval fantasy, Gothic cathedral background, 
    consistent dark color palette, dramatic pixel lighting, detailed sprite art, 
    retro RPG character design, dark fantasy atmosphere
    """
    
    characters = [
        "hooded inquisitor in dark robes, holding ancient scroll, mysterious detective",
        "worried medieval guard in chainmail armor, pointing towards spire, loyal protector", 
        "same hooded inquisitor analyzing clues, investigating miracle, focused expression",
        "humble shelter manager in simple robes, charity worker, kind expression"
    ]
    
    negative_prompt = """
    realistic, smooth, blurry, 3d, photograph, anti-aliasing, high resolution,
    bad anatomy, extra limbs, inconsistent style, bright colors, modern elements
    """
    
    card_ids = ["A01", "A06", "B03", "B06"]
    all_images = []
    
    # Use same seed base for consistency
    base_seed = 424242
    
    for i, character in enumerate(characters):
        print(f"\nGenerating {card_ids[i]}: {character[:50]}...")
        
        full_prompt = f"{base_style}, {character}"
        
        images = unified_api.generate_unified_batch(
            prompt=full_prompt,
            negative_prompt=negative_prompt,
            width=512,
            height=768,
            steps=30,
            cfg_scale=8.0,
            batch_size=1,
            seed=base_seed + i  # Slight seed variation
        )
        
        if images:
            all_images.extend(images)
        else:
            print(f"Failed to generate {card_ids[i]}")
    
    # Save all images
    if all_images:
        saved = unified_api.save_images(
            all_images, 
            case_num=1, 
            batch_num=1, 
            card_ids=card_ids,
            prefix="v2_consistent"
        )
        print(f"\nConsistent individual batch completed! Saved {saved} images.")
    
    return all_images

def test_connection():
    """Test API connection"""
    try:
        test_url = f"{unified_api.api_url}/sdapi/v1/options"
        response = requests.get(test_url, timeout=10)
        
        if response.status_code == 200:
            print("API connection successful!")
            return True
        else:
            print(f"API connection failed: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"API connection error: {str(e)}")
        return False

if __name__ == "__main__":
    print("Unified Style Generator")
    print("=" * 40)
    
    if test_connection():
        print("\nAvailable functions:")
        print("1. generate_case1_unified_v2() - 4장 한번에 통일된 스타일")
        print("2. generate_case1_individual_consistent() - 개별 생성하되 일관된 베이스")
        print("\nRecommended: generate_case1_unified_v2()")
    else:
        print("API connection failed. Check Colab WebUI.")