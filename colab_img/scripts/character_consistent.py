# -*- coding: utf-8 -*-
# Character Consistent Generator - 같은 캐릭터 다른 장면 생성

import requests
import json
import base64
import os

class CharacterConsistentAPI:
    def __init__(self, api_url="https://ed0134acadd47464a7.gradio.live"):
        self.api_url = api_url.rstrip('/')
        self.txt2img_url = f"{self.api_url}/sdapi/v1/txt2img"
        
        # 캐릭터별 상세 외형 정의
        self.characters = {
            "inquisitor": {
                "base_description": """
                hooded male figure in dark brown robes with silver trim, 
                pale angular face, sharp green eyes, black goatee beard, 
                weathered leather gloves, silver holy cross pendant, 
                stern expression, medieval fantasy character design,
                consistent character appearance
                """,
                "scenes": {
                    "A01": "receiving secret mission scroll from superior, standing in Gothic cathedral",
                    "B03": "analyzing ancient clues and documents, investigating miracle evidence, focused expression"
                }
            },
            "guard": {
                "base_description": """
                middle-aged male guard in chainmail armor and leather, 
                brown hair, worried expression, weathered face, 
                loyal soldier appearance, medieval fantasy design,
                consistent character features
                """,
                "scenes": {
                    "A06": "pointing urgently towards cathedral spire at night, torch in hand, concerned expression"
                }
            },
            "shelter_manager": {
                "base_description": """
                humble middle-aged man in simple brown robes, 
                kind face, graying hair, gentle eyes, 
                charitable worker appearance, medieval setting,
                consistent character design
                """,
                "scenes": {
                    "B06": "speaking with inquisitor, explaining charity work, humble posture"
                }
            }
        }
    
    def generate_character_scenes(self, character_name, case_num=1):
        """같은 캐릭터의 여러 장면 생성"""
        
        if character_name not in self.characters:
            print(f"Unknown character: {character_name}")
            return []
        
        character = self.characters[character_name]
        base_desc = character["base_description"]
        scenes = character["scenes"]
        
        print(f"=== Generating {character_name} scenes ===")
        
        all_images = []
        card_ids = []
        
        # 같은 시드로 외형 일관성 유지
        base_seed = 424242
        
        for card_id, scene_desc in scenes.items():
            print(f"\nGenerating {card_id}: {scene_desc[:50]}...")
            
            full_prompt = f"""
            pixel art, 16bit retro style, {base_desc}, 
            {scene_desc}, 
            Gothic cathedral background, consistent dark color palette, 
            dramatic pixel lighting, detailed sprite art, 
            retro RPG character design, same character in different scene
            """
            
            negative_prompt = """
            realistic, smooth, blurry, 3d, photograph, anti-aliasing, high resolution,
            bad anatomy, extra limbs, different character, inconsistent appearance,
            bright colors, modern elements, different face, different clothing
            """
            
            payload = {
                "prompt": full_prompt,
                "negative_prompt": negative_prompt,
                "width": 512,
                "height": 768,
                "steps": 30,
                "cfg_scale": 8.5,
                "batch_size": 1,
                "sampler_name": "Euler a",
                "seed": base_seed,  # 같은 시드로 외형 유지
                "save_images": False,
                "send_images": True
            }
            
            try:
                response = requests.post(self.txt2img_url, json=payload, timeout=300)
                response.raise_for_status()
                
                result = response.json()
                images = result.get('images', [])
                
                if images:
                    all_images.extend(images)
                    card_ids.append(card_id)
                    print(f"Generated {card_id} successfully")
                else:
                    print(f"Failed to generate {card_id}")
                    
            except Exception as e:
                print(f"Error generating {card_id}: {str(e)}")
        
        # 저장
        if all_images:
            saved = self.save_character_images(
                all_images, 
                case_num, 
                character_name,
                card_ids
            )
            print(f"\n{character_name} scenes completed! Saved {saved} images.")
        
        return all_images
    
    def save_character_images(self, images, case_num, character_name, card_ids):
        """캐릭터 이미지들 저장"""
        
        case_path = f"../case{case_num}"
        os.makedirs(case_path, exist_ok=True)
        
        saved_count = 0
        for i, image_data in enumerate(images):
            if i >= len(card_ids):
                break
                
            try:
                image_bytes = base64.b64decode(image_data)
                
                filename = f"char_{character_name}_{card_ids[i]}.png"
                filepath = os.path.join(case_path, filename)
                
                with open(filepath, 'wb') as f:
                    f.write(image_bytes)
                
                print(f"Saved: {filename} ({len(image_bytes)} bytes)")
                saved_count += 1
                
            except Exception as e:
                print(f"Save error for {card_ids[i]}: {str(e)}")
        
        return saved_count

# Initialize character API
char_api = CharacterConsistentAPI("https://ed0134acadd47464a7.gradio.live")

def generate_case1_by_characters():
    """캐릭터별로 일관성 있게 생성"""
    
    print("=== Case 1 Character-Consistent Generation ===")
    
    # 1. 이단 심문관 (A01, B03)
    inquisitor_images = char_api.generate_character_scenes("inquisitor", case_num=1)
    
    # 2. 경비병 (A06)  
    guard_images = char_api.generate_character_scenes("guard", case_num=1)
    
    # 3. 보호소 관리자 (B06)
    manager_images = char_api.generate_character_scenes("shelter_manager", case_num=1)
    
    total_images = len(inquisitor_images) + len(guard_images) + len(manager_images)
    print(f"\nAll characters completed! Total: {total_images} images")
    
    return {
        "inquisitor": inquisitor_images,
        "guard": guard_images, 
        "shelter_manager": manager_images
    }

if __name__ == "__main__":
    print("Character Consistent Generator")
    print("=" * 40)
    
    print("Available functions:")
    print("1. generate_case1_by_characters() - 캐릭터별 일관성 있게 생성")
    print("2. char_api.generate_character_scenes('inquisitor') - 특정 캐릭터만")
    
    print("\nRecommended: generate_case1_by_characters()")