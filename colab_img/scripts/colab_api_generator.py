# -*- coding: utf-8 -*-
# Stable Diffusion WebUI API Client for batch generation

import requests
import json
import base64
import os
from datetime import datetime

class StableDiffusionAPI:
    def __init__(self, api_url="https://ed0134acadd47464a7.gradio.live"):
        self.api_url = api_url.rstrip('/')
        self.txt2img_url = f"{self.api_url}/sdapi/v1/txt2img"
        
    def generate_image(self, prompt, negative_prompt="", width=512, height=768, 
                       steps=25, cfg_scale=7.5, batch_size=4):
        """Generate image using API"""
        
        payload = {
            "prompt": prompt,
            "negative_prompt": negative_prompt,
            "width": width,
            "height": height,
            "steps": steps,
            "cfg_scale": cfg_scale,
            "batch_size": batch_size,
            "sampler_name": "Euler a",
            "save_images": False,
            "send_images": True
        }
        
        try:
            print(f"Generating {batch_size} images...")
            print(f"Prompt: {prompt[:50]}...")
            
            response = requests.post(self.txt2img_url, json=payload, timeout=300)
            response.raise_for_status()
            
            result = response.json()
            images = result.get('images', [])
            
            print(f"Generated {len(images)} images")
            return images
            
        except Exception as e:
            print(f"API Error: {str(e)}")
            return []
    
    def save_images(self, images, case_num, batch_num, card_ids):
        """Save generated images to local folder"""
        
        if not images:
            print("No images to save")
            return
            
        case_path = f"colab_img/case{case_num}"
        os.makedirs(case_path, exist_ok=True)
        
        saved_count = 0
        for i, image_data in enumerate(images):
            if i >= len(card_ids):
                break
                
            try:
                # Decode base64 image
                image_bytes = base64.b64decode(image_data)
                
                # Save to file
                filename = f"case{case_num}_{card_ids[i]}.png"
                filepath = os.path.join(case_path, filename)
                
                with open(filepath, 'wb') as f:
                    f.write(image_bytes)
                
                print(f"Saved: {filename} ({len(image_bytes)} bytes)")
                saved_count += 1
                
            except Exception as e:
                print(f"Save error for {card_ids[i]}: {str(e)}")
        
        print(f"Saved {saved_count}/{len(images)} images to {case_path}/")
        return saved_count

# Initialize API client
api = StableDiffusionAPI("https://ed0134acadd47464a7.gradio.live")

def generate_case1_batch1():
    """Generate Case 1 Batch 1 - Pixel art characters"""
    
    print("=== Case 1 Batch 1: Pixel Art Characters ===")
    
    prompts = [
        "pixel art, 16bit style, hooded medieval inquisitor in dark robes, Gothic cathedral background, holding ancient scroll, dramatic pixel lighting, retro RPG character design, detailed sprite art",
        
        "pixel art, 16bit style, medieval guard in chainmail armor, worried expression, pointing towards cathedral spire, night scene, torchlight, Gothic architecture, retro game character",
        
        "pixel art, 16bit style, hooded inquisitor analyzing ancient clues, investigating miracle of slums, dark cathedral interior, medieval detective, retro RPG sprite",
        
        "pixel art, 16bit style, humble shelter manager in simple robes, speaking to inquisitor, charity worker, medieval gothic setting, retro game NPC design"
    ]
    
    negative_prompt = "realistic, smooth, blurry, 3d, photograph, anti-aliasing, high resolution, bad anatomy, extra limbs"
    
    card_ids = ["A01", "A06", "B03", "B06"]
    all_images = []
    
    # Generate each character individually for better control
    for i, prompt in enumerate(prompts):
        print(f"\nGenerating card {card_ids[i]}...")
        
        images = api.generate_image(
            prompt=prompt,
            negative_prompt=negative_prompt,
            width=512,
            height=768,
            steps=25,
            cfg_scale=8.5,
            batch_size=1  # Generate 1 at a time for precision
        )
        
        if images:
            all_images.extend(images)
        else:
            print(f"Failed to generate {card_ids[i]}")
    
    # Save all generated images
    if all_images:
        saved = api.save_images(all_images, case_num=1, batch_num=1, card_ids=card_ids)
        print(f"\nBatch 1 completed! Saved {saved} images.")
    else:
        print("No images generated")
    
    return all_images

def test_api_connection():
    """Test API connection"""
    try:
        test_url = f"{api.api_url}/sdapi/v1/options"
        response = requests.get(test_url, timeout=10)
        
        if response.status_code == 200:
            print("API connection successful!")
            return True
        else:
            print(f"API connection failed: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"API connection error: {str(e)}")
        print("Make sure Colab WebUI is running with --api flag")
        return False

if __name__ == "__main__":
    print("Stable Diffusion API Client")
    print("=" * 40)
    
    # Test connection first
    if test_api_connection():
        print("\nReady to generate!")
        print("Run: generate_case1_batch1()")
    else:
        print("\nAPI not available. Please:")
        print("1. Make sure Colab is running")
        print("2. WebUI started with --api flag")
        print("3. Check the URL is correct")