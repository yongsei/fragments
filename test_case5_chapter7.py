#!/usr/bin/env python3
"""
Case5 Chapter7 수정 검증
"""

import re

def test_chapter7():
    file_path = "fragments-main/src/pages/fragments/games/case5/chapter7/scenario_kr.ts"
    
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
        
        # connectionRules 추출
        rules = []
        rule_pattern = r'\{"id":\s*"[^"]*",\s*"cards":\s*\["([^"]+)",\s*"([^"]+)"\],.*?"unlock":\s*"([^"]+)"\}'
        rule_matches = re.findall(rule_pattern, content)
        
        for card1, card2, unlock in rule_matches:
            rules.append({
                'cards': [card1, card2],
                'unlock': unlock
            })
        
        print(f"초기 카드: {initial_cards}")
        print(f"승리 조건: {win_condition}")
        print(f"총 규칙 수: {len(rules)}")
        print()
        
        # 경로 추적
        available = set(initial_cards)
        combinations = 0
        rules_by_unlock = {rule['unlock']: rule['cards'] for rule in rules}
        
        max_steps = 20
        for step in range(1, max_steps + 1):
            new_unlocks = []
            
            for unlock, required_cards in rules_by_unlock.items():
                if unlock not in available and all(card in available for card in required_cards):
                    available.add(unlock)
                    combinations += 1
                    new_unlocks.append(f"{required_cards[0]} + {required_cards[1]} → {unlock}")
            
            if not new_unlocks:
                break
                
            print(f"Step {step}: {len(new_unlocks)}개 조합")
            for unlock in new_unlocks:
                print(f"  {unlock}")
            print(f"현재 보유 카드: {len(available)}개")
            print()
            
            if win_condition in available:
                print(f"SUCCESS: 총 {combinations}회 조합으로 G18 달성!")
                return True
        
        print(f"FAIL: {max_steps} 단계 후에도 승리 불가능")
        return False
        
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    test_chapter7()