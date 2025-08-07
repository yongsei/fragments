# -*- coding: utf-8 -*-
# Reference-based Character Generator - 첫 이미지를 참조로 같은 캐릭터 생성

import requests
import json
import base64
import os

class ReferenceBasedAPI:
    def __init__(self, api_url="https://ed0134acadd47464a7.gradio.live"):
        self.api_url = api_url.rstrip('/')
        self.txt2img_url = f"{self.api_url}/sdapi/v1/txt2img"
        self.img2img_url = f"{self.api_url}/sdapi/v1/img2img"
    
    def generate_base_character(self, character_prompt):
        """기준 캐릭터 이미지 생성"""
        
        # 매우 구체적이고 깔끔한 프롬프트
        clean_prompt = f"""
        {character_prompt},
        clean simple pixel art, single character portrait, 
        plain dark background, no UI elements, no status bars, 
        no maps, no grids, no game interface, 
        centered character, simple composition,
        16bit pixel art style, retro RPG character portrait
        """
        
        # 강력한 네거티브 프롬프트
        strong_negative = """
        UI, interface, status bar, health bar, map, minimap, grid, 
        game menu, buttons, text boxes, inventory, multiple characters,
        complex background, modern elements, realistic, 3d, blurry,
        extra limbs, bad anatomy, cluttered, busy composition,
        bright colors, multiple scenes, split screen, panels
        """
        
        payload = {
            "prompt": clean_prompt,
            "negative_prompt": strong_negative,
            "width": 512,
            "height": 768,
            "steps": 25,
            "cfg_scale": 7.5,
            "batch_size": 1,
            "sampler_name": "Euler a",
            "seed": 424242,
            "save_images": False,
            "send_images": True
        }
        
        try:
            print(f"Generating base character...")
            print(f"Prompt: {character_prompt}")
            
            response = requests.post(self.txt2img_url, json=payload, timeout=300)
            response.raise_for_status()
            
            result = response.json()
            images = result.get('images', [])
            
            if images:
                print("Base character generated successfully")
                return images[0]  # Return first image
            else:
                print("Failed to generate base character")
                return None
                
        except Exception as e:
            print(f"Error: {str(e)}")
            return None
    
    def generate_same_character_variation(self, base_image, scene_description, strength=0.3):
        """같은 캐릭터로 다른 장면 생성 (img2img 사용)"""
        
        variation_prompt = f"""
        same character as reference, {scene_description},
        keep exact same face, same clothing, same appearance,
        only change pose and action, pixel art style,
        clean simple composition, no UI elements,
        16bit retro style, character consistency
        """
        
        strong_negative = """
        different character, different face, different clothing,
        UI, interface, status bar, health bar, map, grid,
        game menu, buttons, text boxes, multiple characters,
        complex background, realistic, 3d, blurry, extra limbs
        """
        
        payload = {
            "init_images": [base_image],
            "prompt": variation_prompt,
            "negative_prompt": strong_negative,
            "width": 512,
            "height": 768,
            "steps": 25,
            "cfg_scale": 7.5,
            "batch_size": 1,
            "sampler_name": "Euler a",
            "seed": 424242,
            "denoising_strength": strength,  # 얼마나 변경할지 (0.3 = 30% 변경)
            "save_images": False,
            "send_images": True
        }
        
        try:
            print(f"Generating character variation...")
            print(f"Scene: {scene_description}")
            print(f"Strength: {strength}")
            
            response = requests.post(self.img2img_url, json=payload, timeout=300)
            response.raise_for_status()
            
            result = response.json()
            images = result.get('images', [])
            
            if images:
                print("Character variation generated successfully")
                return images[0]
            else:
                print("Failed to generate variation")
                return None
                
        except Exception as e:
            print(f"Error: {str(e)}")
            return None
    
    def save_reference_images(self, images_data, case_num, card_ids):
        """참조 방식으로 생성된 이미지들 저장"""
        
        case_path = f"../case{case_num}"
        os.makedirs(case_path, exist_ok=True)
        
        saved_count = 0
        for i, (image_data, card_id) in enumerate(zip(images_data, card_ids)):
            try:
                image_bytes = base64.b64decode(image_data)
                
                filename = f"ref_{card_id}_clean.png"
                filepath = os.path.join(case_path, filename)
                
                with open(filepath, 'wb') as f:
                    f.write(image_bytes)
                
                print(f"Saved: {filename} ({len(image_bytes)} bytes)")
                saved_count += 1
                
            except Exception as e:
                print(f"Save error for {card_id}: {str(e)}")
        
        print(f"Saved {saved_count} reference-based images")
        return saved_count

# Initialize API
ref_api = ReferenceBasedAPI("https://ed0134acadd47464a7.gradio.live")

def generate_inquisitor_reference():
    """이단 심문관 참조 기반 생성"""
    
    print("=== Inquisitor Reference-Based Generation ===")
    
    # 1단계: 기준 캐릭터 생성 (A01)
    base_character_prompt = """
    hooded medieval inquisitor in dark robes, 
    holding ancient scroll, stern expression,
    pale face with black beard, green eyes
    """
    
    base_image = ref_api.generate_base_character(base_character_prompt)
    
    if not base_image:
        print("Failed to generate base character")
        return None
    
    # 2단계: 같은 캐릭터로 다른 장면 생성 (B03)
    scene_description = "analyzing ancient clues, reading documents, focused investigation"
    
    variation_image = ref_api.generate_same_character_variation(
        base_image, 
        scene_description, 
        strength=0.2  # 20%만 변경 (매우 보수적)
    )
    
    if variation_image:
        # 3단계: 저장
        images_data = [base_image, variation_image]
        card_ids = ["A01", "B03"]
        
        saved = ref_api.save_reference_images(images_data, case_num=1, card_ids=card_ids)
        print(f"\nInquisitor reference generation completed! Saved {saved} images.")
        
        return images_data
    else:
        print("Failed to generate variation")
        return None

def test_clean_generation():
    """깔끔한 단일 캐릭터 테스트"""
    
    print("=== Clean Character Test ===")
    
    test_prompt = """
    single pixel art character portrait, 
    hooded medieval inquisitor in dark robes,
    centered on plain dark background,
    no UI, no interface, no status bars,
    clean simple 16bit pixel art
    """
    
    base_image = ref_api.generate_base_character(test_prompt)
    
    if base_image:
        # 테스트 이미지 저장
        image_bytes = base64.b64decode(base_image)
        
        with open("../case1/test_clean_character.png", 'wb') as f:
            f.write(image_bytes)
        
        print("Clean test character saved: test_clean_character.png")
        return True
    else:
        print("Clean test failed")
        return False

if __name__ == "__main__":
    print("Reference-Based Character Generator")
    print("=" * 45)
    
    print("Available functions:")
    print("1. test_clean_generation() - 깔끔한 캐릭터 테스트")
    print("2. generate_inquisitor_reference() - 심문관 참조 기반 생성")
    
    print("\nFirst try: test_clean_generation()")