#!/usr/bin/env python3
"""
Case5 카드 조합 최단 경로 분석
"""

import re
import json
from collections import defaultdict, deque

def parse_case5_chapter(file_path: str):
    """Case5 챕터 파일 파싱"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # winCondition 추출
        win_match = re.search(r'"winCondition":\s*"([^"]+)"', content)
        win_condition = win_match.group(1) if win_match else None
        
        # initialCards 추출
        initial_match = re.search(r'"initialCards":\s*\[(.*?)\]', content, re.DOTALL)
        initial_cards = []
        if initial_match:
            cards_str = initial_match.group(1)
            initial_cards = re.findall(r'"([^"]+)"', cards_str)
        
        # connectionRules 추출 (JSON 형태)
        rules = []
        rule_pattern = r'\{"id":\s*"[^"]*",\s*"cards":\s*\["([^"]+)",\s*"([^"]+)"\],.*?"unlock":\s*"([^"]+)"\}'
        rule_matches = re.findall(rule_pattern, content)
        
        for card1, card2, unlock in rule_matches:
            rules.append({
                'cards': [card1, card2],
                'unlock': unlock
            })
        
        return {
            'win_condition': win_condition,
            'initial_cards': initial_cards,
            'rules': rules
        }
    except Exception as e:
        print(f"Error parsing {file_path}: {e}")
        return None

def find_shortest_path(initial_cards, rules, win_condition):
    """최단 조합 경로 찾기"""
    available = set(initial_cards)
    combinations = 0
    step = 0
    
    # 규칙을 unlock 기준으로 인덱싱
    rules_by_unlock = {}
    for rule in rules:
        rules_by_unlock[rule['unlock']] = rule['cards']
    
    print(f"초기 카드: {sorted(initial_cards)}")
    print(f"승리 조건: {win_condition}")
    print(f"총 규칙 수: {len(rules)}")
    print()
    
    while win_condition not in available:
        step += 1
        new_unlocks = []
        
        for unlock, required_cards in rules_by_unlock.items():
            if unlock not in available and all(card in available for card in required_cards):
                available.add(unlock)
                combinations += 1
                new_unlocks.append(f"{required_cards[0]} + {required_cards[1]} → {unlock}")
        
        if not new_unlocks:
            print("더 이상 조합할 수 없습니다!")
            break
            
        print(f"Step {step}: {len(new_unlocks)}개 조합")
        for unlock in new_unlocks[:5]:  # 처음 5개만 표시
            print(f"  {unlock}")
        if len(new_unlocks) > 5:
            print(f"  ... 총 {len(new_unlocks)}개")
        print(f"현재 보유 카드: {len(available)}개")
        print()
        
        if step > 20:  # 무한루프 방지
            print("너무 많은 단계. 중단.")
            break
    
    if win_condition in available:
        print(f"SUCCESS: 총 {combinations}회 조합으로 완료")
    else:
        print(f"FAIL: 승리 불가능")
    
    return combinations if win_condition in available else -1

def main():
    chapters = [
        ("Chapter 1", "fragments-main/src/pages/fragments/games/case5/chapter1/scenario_kr.ts"),
        ("Chapter 2", "fragments-main/src/pages/fragments/games/case5/chapter2/scenario_kr.ts"),
        ("Chapter 3", "fragments-main/src/pages/fragments/games/case5/chapter3/scenario_kr.ts"),
        ("Chapter 4", "fragments-main/src/pages/fragments/games/case5/chapter4/scenario_kr.ts"),
        ("Chapter 5", "fragments-main/src/pages/fragments/games/case5/chapter5/scenario_kr.ts"),
        ("Chapter 6", "fragments-main/src/pages/fragments/games/case5/chapter6/scenario_kr.ts"),
        ("Chapter 7", "fragments-main/src/pages/fragments/games/case5/chapter7/scenario_kr.ts"),
        ("Chapter 8", "fragments-main/src/pages/fragments/games/case5/chapter8/scenario_kr.ts"),
    ]
    
    total_combinations = 0
    
    for chapter_name, file_path in chapters:
        print(f"=== {chapter_name} 분석 ===")
        data = parse_case5_chapter(file_path)
        
        if data:
            combinations = find_shortest_path(
                data['initial_cards'], 
                data['rules'], 
                data['win_condition']
            )
            if combinations > 0:
                total_combinations += combinations
        
        print("-" * 50)
    
    print(f"\nCase5 전체 최단 완료: {total_combinations}회 조합")

if __name__ == "__main__":
    main()