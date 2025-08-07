# -*- coding: utf-8 -*-
# Pure Pixel Art Generator - 확실한 픽셀아트 스타일

import requests
import json
import base64
import os

class PurePixelAPI:
    def __init__(self, api_url="https://ed0134acadd47464a7.gradio.live"):
        self.api_url = api_url.rstrip('/')
        self.txt2img_url = f"{self.api_url}/sdapi/v1/txt2img"
    
    def generate_pure_pixel_character(self, character_desc, pose_desc, mood_desc, card_id):
        """순수 픽셀아트 스타일로 생성"""
        
        # 픽셀아트 키워드 강화
        pixel_prompt = f"""
        pixel art, 8bit style, retro sprite art, video game character,
        pixelated, blocky pixels, retro gaming, classic arcade style,
        16bit era graphics, pixel perfect, old school video game,
        {character_desc}, {pose_desc}, {mood_desc},
        simple pixel background, clean pixel composition,
        no fire, no flames, no burning, medieval fantasy pixel sprite
        """
        
        # 리얼리스틱 요소와 불 완전 차단
        strong_negative = """
        realistic, photorealistic, photograph, 3d render, detailed shading,
        fire, flames, burning, torch fire, candle flame, explosion,
        smooth, anti-aliasing, high resolution, detailed textures,
        modern graphics, cinematic lighting, ray tracing, HDR,
        UI elements, interface, status bars, game menu,
        blurry, extra limbs, bad anatomy, cluttered
        """
        
        payload = {
            "prompt": pixel_prompt,
            "negative_prompt": strong_negative,
            "width": 512,
            "height": 768,
            "steps": 20,  # 픽셀아트는 적은 스텝
            "cfg_scale": 6.0,  # 낮은 CFG로 간단하게
            "batch_size": 1,
            "sampler_name": "Euler a",
            "seed": 424242,
            "subseed": hash(card_id) % 1000000,
            "save_images": False,
            "send_images": True
        }
        
        try:
            print(f"Generating pure pixel {card_id}...")
            print(f"Character: {character_desc}")
            print(f"Pose: {pose_desc}")
            
            response = requests.post(self.txt2img_url, json=payload, timeout=300)
            response.raise_for_status()
            
            result = response.json()
            images = result.get('images', [])
            
            if images:
                print(f"Pure pixel {card_id} generated successfully")
                return images[0]
            else:
                print(f"Failed to generate {card_id}")
                return None
                
        except Exception as e:
            print(f"Error generating {card_id}: {str(e)}")
            return None
    
    def save_pixel_images(self, images_data, case_num, card_ids):
        """픽셀아트 이미지들 저장"""
        
        case_path = f"../case{case_num}"
        os.makedirs(case_path, exist_ok=True)
        
        saved_count = 0
        for image_data, card_id in zip(images_data, card_ids):
            if image_data:
                try:
                    image_bytes = base64.b64decode(image_data)
                    
                    filename = f"pixel_{card_id}_clean.png"
                    filepath = os.path.join(case_path, filename)
                    
                    with open(filepath, 'wb') as f:
                        f.write(image_bytes)
                    
                    print(f"Saved: {filename} ({len(image_bytes)} bytes)")
                    saved_count += 1
                    
                except Exception as e:
                    print(f"Save error for {card_id}: {str(e)}")
        
        print(f"Saved {saved_count} pure pixel images")
        return saved_count

# Initialize pixel API
pixel_api = PurePixelAPI("https://ed0134acadd47464a7.gradio.live")

def generate_pixel_inquisitor():
    """확실한 픽셀아트로 심문관 재생성"""
    
    print("=== Pure Pixel Art Inquisitor ===")
    
    # 공통 픽셀 캐릭터 설정 (불 관련 제거)
    base_character = """
    hooded medieval inquisitor in dark robes,
    pale pixelated face, black pixel beard, green pixel eyes,
    simple dark robes with pixel cross symbol,
    retro RPG character sprite design
    """
    
    # 카드별 설정 (불 제거)
    variations = {
        "A01": {
            "pose": "standing upright holding ancient scroll, formal receiving pose, pixel hands extended",
            "mood": "serious determined pixel expression, duty-bound stance, official ceremony"
        },
        "B03": {
            "pose": "leaning over pixel documents, examining pixel clues, investigative crouch",
            "mood": "focused pixel expression, analytical thinking, detective concentration"
        }
    }
    
    generated_images = []
    card_ids = []
    
    for card_id, data in variations.items():
        print(f"\n--- Generating Pixel {card_id} ---")
        
        image = pixel_api.generate_pure_pixel_character(
            character_desc=base_character,
            pose_desc=data["pose"],
            mood_desc=data["mood"],
            card_id=card_id
        )
        
        if image:
            generated_images.append(image)
            card_ids.append(card_id)
    
    # 저장
    if generated_images:
        saved = pixel_api.save_pixel_images(generated_images, case_num=1, card_ids=card_ids)
        print(f"\nPure pixel inquisitor completed! Saved {saved} images.")
        print("No fire elements")
        print("Pure 8bit/16bit pixel art style")
        
        return generated_images
    else:
        print("Pure pixel generation failed")
        return None

def test_pixel_style():
    """픽셀아트 스타일 테스트"""
    
    print("=== Pixel Style Test ===")
    
    test_character = "simple pixel art character, 8bit style sprite, retro video game character"
    test_pose = "standing pose, classic RPG character stance"
    test_mood = "neutral expression, video game character design"
    
    image = pixel_api.generate_pure_pixel_character(
        test_character, test_pose, test_mood, "test"
    )
    
    if image:
        image_bytes = base64.b64decode(image)
        
        with open("../case1/pixel_style_test.png", 'wb') as f:
            f.write(image_bytes)
        
        print("Pixel style test saved: pixel_style_test.png")
        print("Check if it's truly pixelated!")
        return True
    else:
        print("Pixel style test failed")
        return False

if __name__ == "__main__":
    print("Pure Pixel Art Generator")
    print("=" * 40)
    
    print("Available functions:")
    print("1. test_pixel_style() - 픽셀아트 스타일 테스트")
    print("2. generate_pixel_inquisitor() - 불 없는 순수 픽셀 심문관")
    
    print("\nRecommended: test_pixel_style() first")