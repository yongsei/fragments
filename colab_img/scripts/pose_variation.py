# -*- coding: utf-8 -*-
# Pose & Mood Variation - 같은 캐릭터, 다른 포즈/분위기

import requests
import json
import base64
import os

class PoseVariationAPI:
    def __init__(self, api_url="https://ed0134acadd47464a7.gradio.live"):
        self.api_url = api_url.rstrip('/')
        self.txt2img_url = f"{self.api_url}/sdapi/v1/txt2img"
        self.img2img_url = f"{self.api_url}/sdapi/v1/img2img"
    
    def generate_character_with_pose(self, base_appearance, pose_description, mood_description, card_id):
        """같은 외형, 다른 포즈/분위기로 생성"""
        
        # 포즈와 분위기를 강조한 프롬프트
        full_prompt = f"""
        {base_appearance}, 
        {pose_description}, 
        {mood_description},
        pixel art, 16bit style, character portrait,
        clean simple composition, plain dark background,
        no UI elements, no interface, centered character,
        detailed facial expression, dynamic pose
        """
        
        # UI 요소 완전 차단
        negative_prompt = """
        UI, interface, status bar, health bar, map, grid, buttons,
        text boxes, inventory, game menu, multiple characters,
        same pose, static pose, boring composition, realistic,
        3d, blurry, extra limbs, bad anatomy, cluttered background
        """
        
        payload = {
            "prompt": full_prompt,
            "negative_prompt": negative_prompt,
            "width": 512,
            "height": 768,
            "steps": 30,
            "cfg_scale": 8.0,
            "batch_size": 1,
            "sampler_name": "Euler a",
            "seed": 424242,  # 기본 외형 유지
            "subseed": hash(card_id) % 1000000,  # 포즈 변화를 위한 서브시드
            "save_images": False,
            "send_images": True
        }
        
        try:
            print(f"Generating {card_id}...")
            print(f"Pose: {pose_description}")
            print(f"Mood: {mood_description}")
            
            response = requests.post(self.txt2img_url, json=payload, timeout=300)
            response.raise_for_status()
            
            result = response.json()
            images = result.get('images', [])
            
            if images:
                print(f"{card_id} generated successfully")
                return images[0]
            else:
                print(f"Failed to generate {card_id}")
                return None
                
        except Exception as e:
            print(f"Error generating {card_id}: {str(e)}")
            return None
    
    def save_pose_images(self, images_data, case_num, card_ids):
        """포즈 바리에이션 이미지들 저장"""
        
        case_path = f"../case{case_num}"
        os.makedirs(case_path, exist_ok=True)
        
        saved_count = 0
        for image_data, card_id in zip(images_data, card_ids):
            if image_data:
                try:
                    image_bytes = base64.b64decode(image_data)
                    
                    filename = f"pose_{card_id}_final.png"
                    filepath = os.path.join(case_path, filename)
                    
                    with open(filepath, 'wb') as f:
                        f.write(image_bytes)
                    
                    print(f"Saved: {filename} ({len(image_bytes)} bytes)")
                    saved_count += 1
                    
                except Exception as e:
                    print(f"Save error for {card_id}: {str(e)}")
        
        print(f"Saved {saved_count} pose variation images")
        return saved_count

# Initialize API
pose_api = PoseVariationAPI("https://ed0134acadd47464a7.gradio.live")

def generate_inquisitor_mood_variations():
    """이단 심문관 - 임무 vs 추리 분위기 구분"""
    
    print("=== Inquisitor Mood Variations ===")
    
    # 공통 외형 (얼굴, 옷은 동일하게)
    base_appearance = """
    hooded medieval inquisitor with pale angular face, 
    black goatee beard, sharp green eyes, 
    dark brown robes with silver trim, 
    leather gloves, silver cross pendant,
    same character consistent appearance
    """
    
    # 카드별 포즈와 분위기
    card_variations = {
        "A01": {
            "pose": "standing upright, formally receiving ancient scroll from superior, official ceremony pose, hands extended to accept mission",
            "mood": "serious determined expression, sense of duty, formal atmosphere, sacred mission beginning, dramatic lighting from above"
        },
        "B03": {
            "pose": "leaning forward over ancient documents, pointing at clues, investigative crouch, examining evidence closely", 
            "mood": "focused concentrated expression, detective mode, analytical thinking, surrounded by mystery clues, investigative atmosphere"
        }
    }
    
    generated_images = []
    card_ids = []
    
    for card_id, variation in card_variations.items():
        image = pose_api.generate_character_with_pose(
            base_appearance=base_appearance,
            pose_description=variation["pose"],
            mood_description=variation["mood"],
            card_id=card_id
        )
        
        if image:
            generated_images.append(image)
            card_ids.append(card_id)
        else:
            generated_images.append(None)
            card_ids.append(card_id)
    
    # 저장
    if any(generated_images):
        saved = pose_api.save_pose_images(generated_images, case_num=1, card_ids=card_ids)
        print(f"\nInquisitor mood variations completed! Saved {saved} images.")
        
        # 결과 분석
        print("\nGenerated variations:")
        print("- A01: 임무 받는 공식적이고 비장한 느낌")
        print("- B03: 추리하는 집중적이고 분석적인 느낌")
        
        return generated_images
    else:
        print("All generation failed")
        return None

def generate_all_case1_characters():
    """Case 1 모든 캐릭터를 포즈/분위기로 구분하여 생성"""
    
    print("=== All Case 1 Characters with Distinct Moods ===")
    
    characters = {
        "A01": {
            "appearance": "hooded medieval inquisitor, pale face, black beard, green eyes, dark robes, silver cross",
            "pose": "standing formally, receiving sacred scroll, official ceremony pose",
            "mood": "serious determined expression, sense of duty, sacred mission"
        },
        "A06": {
            "appearance": "middle-aged guard in chainmail armor, weathered face, brown hair, loyal soldier",
            "pose": "pointing urgently towards cathedral spire, alarm gesture, warning stance",
            "mood": "worried concerned expression, urgency, protective instinct"
        },
        "B03": {
            "appearance": "same hooded inquisitor as A01, identical face and clothing",
            "pose": "leaning over documents, examining clues, detective crouch position",
            "mood": "focused analytical expression, deep thinking, investigative concentration"
        },
        "B06": {
            "appearance": "humble man in simple brown robes, kind face, graying hair, gentle eyes",
            "pose": "explaining with open hands, humble speaking gesture, charitable stance",
            "mood": "kind compassionate expression, helping others, gentle demeanor"
        }
    }
    
    all_images = []
    all_ids = []
    
    for card_id, char_data in characters.items():
        print(f"\n--- Generating {card_id} ---")
        
        image = pose_api.generate_character_with_pose(
            base_appearance=char_data["appearance"],
            pose_description=char_data["pose"], 
            mood_description=char_data["mood"],
            card_id=card_id
        )
        
        all_images.append(image)
        all_ids.append(card_id)
    
    # 저장
    saved = pose_api.save_pose_images(all_images, case_num=1, card_ids=all_ids)
    print(f"\nAll Case 1 characters completed! Saved {saved} images.")
    
    return all_images

if __name__ == "__main__":
    print("Pose & Mood Variation Generator")
    print("=" * 40)
    
    print("Available functions:")
    print("1. generate_inquisitor_mood_variations() - A01 vs B03 분위기 구분")
    print("2. generate_all_case1_characters() - Case1 전체 캐릭터")
    
    print("\nRecommended: generate_inquisitor_mood_variations()")