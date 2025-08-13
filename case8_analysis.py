#!/usr/bin/env python3
"""
Case8 카드 조합 분석 스크립트
모든 챕터의 카드 조합 논리를 검증하고 승리 조건까지의 경로를 확인합니다.
"""

import re
import os
from typing import Dict, List, Set, Tuple
from collections import defaultdict, deque

def parse_scenario_file(file_path: str) -> Dict:
    """시나리오 파일을 파싱하여 카드 조합 정보를 추출합니다."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # winCondition 추출
        win_match = re.search(r"winCondition:\s*['\"]([^'\"]+)['\"]", content)
        win_condition = win_match.group(1) if win_match else None
        
        # initialCards 추출
        initial_match = re.search(r"initialCards:\s*\[(.*?)\]", content, re.DOTALL)
        initial_cards = []
        if initial_match:
            cards_str = initial_match.group(1)
            initial_cards = re.findall(r"['\"]([^'\"]+)['\"]", cards_str)
        
        # connectionRules 추출
        rules_match = re.search(r"connectionRules:\s*\[(.*?)\]", content, re.DOTALL)
        connection_rules = []
        if rules_match:
            rules_str = rules_match.group(1)
            # 각 rule 객체 찾기
            rule_pattern = r"\{[^}]*cards:\s*\[(.*?)\][^}]*unlock:\s*['\"]([^'\"]+)['\"][^}]*\}"
            rules = re.findall(rule_pattern, rules_str, re.DOTALL)
            
            for cards_str, unlock in rules:
                cards = re.findall(r"['\"]([^'\"]+)['\"]", cards_str)
                if len(cards) == 2:  # 2개 카드 조합만 처리
                    connection_rules.append({
                        'cards': cards,
                        'unlock': unlock
                    })
        
        return {
            'win_condition': win_condition,
            'initial_cards': initial_cards,
            'connection_rules': connection_rules
        }
    except Exception as e:
        print(f"Error parsing {file_path}: {e}")
        return None

def build_dependency_graph(rules: List[Dict]) -> Dict[str, List[str]]:
    """카드 의존성 그래프를 구축합니다."""
    graph = defaultdict(list)
    for rule in rules:
        cards = rule['cards']
        unlock = rule['unlock']
        # unlock 카드는 cards에 의존
        graph[unlock].extend(cards)
    return dict(graph)

def find_reachable_cards(initial_cards: List[str], rules: List[Dict]) -> Set[str]:
    """초기 카드에서 도달 가능한 모든 카드를 찾습니다."""
    reachable = set(initial_cards)
    queue = deque(initial_cards)
    
    # 규칙을 unlock 카드 기준으로 인덱싱
    rules_by_unlock = {}
    for rule in rules:
        rules_by_unlock[rule['unlock']] = rule['cards']
    
    changed = True
    while changed:
        changed = False
        for unlock, required_cards in rules_by_unlock.items():
            if unlock not in reachable and all(card in reachable for card in required_cards):
                reachable.add(unlock)
                changed = True
    
    return reachable

def analyze_chapter(chapter_path: str) -> Dict:
    """단일 챕터를 분석합니다."""
    scenario = parse_scenario_file(chapter_path)
    if not scenario:
        return None
    
    initial_cards = scenario['initial_cards']
    rules = scenario['connection_rules']
    win_condition = scenario['win_condition']
    
    # 도달 가능한 카드들 찾기
    reachable_cards = find_reachable_cards(initial_cards, rules)
    
    # 승리 조건 도달 가능성 확인
    can_win = win_condition in reachable_cards
    
    # 모든 카드 개수 확인 (A01~A18, B01~B18 등)
    chapter_prefix = win_condition[0]  # A, B, C 등
    expected_cards = set()
    for i in range(1, 19):  # 01~18
        expected_cards.add(f"{chapter_prefix}{i:02d}")
    
    all_cards_reachable = expected_cards.issubset(reachable_cards)
    missing_cards = expected_cards - reachable_cards
    
    return {
        'chapter': chapter_prefix,
        'initial_cards': initial_cards,
        'win_condition': win_condition,
        'reachable_cards': reachable_cards,
        'can_win': can_win,
        'all_cards_reachable': all_cards_reachable,
        'missing_cards': missing_cards,
        'total_rules': len(rules),
        'total_reachable': len(reachable_cards)
    }

def main():
    """메인 분석 함수"""
    base_path = "fragments-main/src/pages/fragments/games/case8"
    chapters = []
    
    # 모든 챕터 분석
    for i in range(1, 8):  # chapter1~7
        chapter_path = f"{base_path}/chapter{i}/seanrio_kr.ts"
        if os.path.exists(chapter_path):
            result = analyze_chapter(chapter_path)
            if result:
                chapters.append(result)
                print(f"\n=== Chapter {i} ({result['chapter']}) 분석 결과 ===")
                print(f"초기 카드: {result['initial_cards']}")
                print(f"승리 조건: {result['win_condition']}")
                print(f"승리 조건 도달 가능: {result['can_win']}")
                print(f"모든 카드 도달 가능: {result['all_cards_reachable']}")
                print(f"도달 가능한 카드 수: {result['total_reachable']}/18")
                
                if result['missing_cards']:
                    print(f"도달 불가능한 카드: {sorted(result['missing_cards'])}")
                if not result['can_win']:
                    print("WARNING: 승리 조건에 도달할 수 없습니다!")
                if not result['all_cards_reachable']:
                    print("WARNING: 일부 카드에 도달할 수 없습니다!")
    
    # 전체 요약
    print(f"\n=== Case8 전체 분석 요약 ===")
    total_chapters = len(chapters)
    winnable_chapters = sum(1 for c in chapters if c['can_win'])
    complete_chapters = sum(1 for c in chapters if c['all_cards_reachable'])
    
    print(f"총 챕터 수: {total_chapters}")
    print(f"승리 가능한 챕터: {winnable_chapters}/{total_chapters}")
    print(f"모든 카드 도달 가능한 챕터: {complete_chapters}/{total_chapters}")
    
    if winnable_chapters < total_chapters:
        print("\nWARNING: 문제가 있는 챕터들:")
        for chapter in chapters:
            if not chapter['can_win'] or not chapter['all_cards_reachable']:
                print(f"  Chapter {chapter['chapter']}: 승리도달={chapter['can_win']}, 전체도달={chapter['all_cards_reachable']}")

if __name__ == "__main__":
    main()