#!/usr/bin/env python3
"""
카드 조합 역추적 분석기
승리조건에서 시작해서 초기 카드까지 거꾸로 추적하여 최단 경로를 찾습니다.
"""

import re
import os
from typing import Dict, List, Set, Tuple, Optional
from collections import defaultdict, deque

class ReversePathAnalyzer:
    def __init__(self, base_case_folder: str = "case8"):
        self.base_case_folder = base_case_folder
        self.scenario_files = []
        self.chapters_data = {}
        
    def find_scenario_files(self) -> List[str]:
        """시나리오 파일들을 찾습니다."""
        base_path = f"fragments-main/src/pages/fragments/games/{self.base_case_folder}"
        scenario_files = []
        
        # 케이스에 따라 다른 패턴 지원
        patterns = [
            "**/seanrio_kr.ts",  # Case8 패턴
            "**/scenario_kr.ts", # Case5 패턴  
        ]
        
        for pattern in patterns:
            full_pattern = f"{base_path}/{pattern}"
            # 실제 파일 찾기 시뮬레이션 (glob 대신)
            for i in range(1, 20):  # 최대 20개 챕터 지원
                for folder_pattern in ["chapter", "Chapter"]:
                    for file_pattern in ["seanrio_kr.ts", "scenario_kr.ts"]:
                        file_path = f"{base_path}/{folder_pattern}{i}/{file_pattern}"
                        if os.path.exists(file_path):
                            scenario_files.append(file_path)
                            break
        
        return sorted(list(set(scenario_files)))
    
    def parse_scenario_file(self, file_path: str) -> Optional[Dict]:
        """시나리오 파일을 파싱합니다."""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # winCondition 추출
            win_patterns = [
                r"winCondition:\s*['\"]([^'\"]+)['\"]",  # Case8 패턴
                r'"winCondition":\s*"([^"]+)"',          # Case5 패턴
            ]
            
            win_condition = None
            for pattern in win_patterns:
                win_match = re.search(pattern, content)
                if win_match:
                    win_condition = win_match.group(1)
                    break
            
            # initialCards 추출
            initial_patterns = [
                r"initialCards:\s*\[(.*?)\]",   # Case8 패턴
                r'"initialCards":\s*\[(.*?)\]', # Case5 패턴
            ]
            
            initial_cards = []
            for pattern in initial_patterns:
                initial_match = re.search(pattern, content, re.DOTALL)
                if initial_match:
                    cards_str = initial_match.group(1)
                    initial_cards = re.findall(r"['\"]([^'\"]+)['\"]", cards_str)
                    break
            
            # connectionRules 추출
            rules = []
            
            # Case8 패턴 (TypeScript 객체)
            rule_pattern_case8 = r"cards:\s*\[['\"]([^'\"]+)['\"]\s*,\s*['\"]([^'\"]+)['\"]\].*?unlock:\s*['\"]([^'\"]+)['\"]"
            rules_case8 = re.findall(rule_pattern_case8, content, re.DOTALL)
            
            # Case5 패턴 (JSON)
            rule_pattern_case5 = r'\{"id":\s*"[^"]*",\s*"cards":\s*\["([^"]+)",\s*"([^"]+)"\],.*?"unlock":\s*"([^"]+)"\}'
            rules_case5 = re.findall(rule_pattern_case5, content)
            
            # 둘 중 더 많이 찾은 것 사용
            if len(rules_case8) >= len(rules_case5):
                rules = [{'cards': [card1, card2], 'unlock': unlock} for card1, card2, unlock in rules_case8]
            else:
                rules = [{'cards': [card1, card2], 'unlock': unlock} for card1, card2, unlock in rules_case5]
            
            # 챕터 이름 추출
            chapter_match = re.search(r'chapter(\d+)', file_path.lower())
            chapter_num = int(chapter_match.group(1)) if chapter_match else 0
            
            return {
                'chapter': chapter_num,
                'file_path': file_path,
                'win_condition': win_condition,
                'initial_cards': initial_cards,
                'rules': rules
            }
            
        except Exception as e:
            print(f"Error parsing {file_path}: {e}")
            return None
    
    def build_reverse_dependency_graph(self, rules: List[Dict]) -> Dict[str, List[Tuple[str, str]]]:
        """역방향 의존성 그래프를 구축합니다. unlock -> [(card1, card2), ...]"""
        reverse_graph = defaultdict(list)
        for rule in rules:
            card1, card2 = rule['cards']
            unlock = rule['unlock']
            reverse_graph[unlock].append((card1, card2))
        return dict(reverse_graph)
    
    def find_reverse_path(self, win_condition: str, initial_cards: Set[str], rules: List[Dict]) -> List[List[str]]:
        """승리조건에서 초기카드까지 역추적합니다."""
        reverse_graph = self.build_reverse_dependency_graph(rules)
        
        # BFS로 역추적
        queue = deque([(win_condition, [win_condition])])
        visited = {win_condition}
        all_paths = []
        
        while queue:
            current_card, path = queue.popleft()
            
            # 현재 카드가 초기 카드라면 완성된 경로
            if current_card in initial_cards:
                all_paths.append(list(reversed(path)))
                continue
            
            # 현재 카드를 언락하는 규칙들 찾기
            if current_card in reverse_graph:
                for card1, card2 in reverse_graph[current_card]:
                    # 두 카드 모두 경로에 추가
                    for next_card in [card1, card2]:
                        if next_card not in visited:
                            visited.add(next_card)
                            new_path = path + [next_card]
                            queue.append((next_card, new_path))
        
        return all_paths
    
    def find_critical_path(self, win_condition: str, initial_cards: Set[str], rules: List[Dict]) -> List[str]:
        """승리조건까지의 임계 경로를 찾습니다."""
        reverse_graph = self.build_reverse_dependency_graph(rules)
        
        def trace_back(card: str, visited: Set[str] = None) -> List[str]:
            if visited is None:
                visited = set()
            
            if card in visited:
                return []  # 순환 참조 방지
            
            visited.add(card)
            
            if card in initial_cards:
                return [card]
            
            if card not in reverse_graph:
                return []
            
            # 가장 긴 경로 찾기 (임계 경로)
            max_path = []
            for card1, card2 in reverse_graph[card]:
                path1 = trace_back(card1, visited.copy())
                path2 = trace_back(card2, visited.copy())
                
                if path1 and path2:
                    combined = path1 + path2 + [card]
                    if len(combined) > len(max_path):
                        max_path = combined
            
            return max_path
        
        return trace_back(win_condition)
    
    def analyze_chapter(self, chapter_data: Dict) -> Dict:
        """단일 챕터를 분석합니다."""
        win_condition = chapter_data['win_condition']
        initial_cards = set(chapter_data['initial_cards'])
        rules = chapter_data['rules']
        
        print(f"\n=== Chapter {chapter_data['chapter']} 역추적 분석 ===")
        print(f"승리조건: {win_condition}")
        print(f"초기카드: {sorted(initial_cards)}")
        print(f"규칙 수: {len(rules)}")
        
        # 역추적 경로 찾기
        reverse_paths = self.find_reverse_path(win_condition, initial_cards, rules)
        
        # 임계 경로 찾기
        critical_path = self.find_critical_path(win_condition, initial_cards, rules)
        
        if reverse_paths:
            print(f"\n역추적 경로 발견: {len(reverse_paths)}개")
            for i, path in enumerate(reverse_paths[:3]):  # 처음 3개만 표시
                print(f"  경로 {i+1}: {' → '.join(path)}")
            if len(reverse_paths) > 3:
                print(f"  ... 총 {len(reverse_paths)}개 경로")
        
        if critical_path:
            print(f"\n임계 경로: {' → '.join(critical_path)}")
            print(f"임계 경로 길이: {len(critical_path)}단계")
        
        # 정방향 시뮬레이션으로 검증
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
                    new_unlocks.append(unlock)
            
            if not new_unlocks:
                break
                
            if win_condition in available:
                print(f"\nSUCCESS: 정방향 검증 {combinations}회 조합으로 승리 가능")
                break
        else:
            print(f"\nFAIL: 정방향 검증 {max_steps} 단계 후에도 승리 불가능")
        
        return {
            'chapter': chapter_data['chapter'],
            'win_condition': win_condition,
            'initial_cards': initial_cards,
            'reverse_paths': reverse_paths,
            'critical_path': critical_path,
            'combinations_needed': combinations if win_condition in available else -1
        }
    
    def analyze_all(self) -> Dict:
        """모든 챕터를 분석합니다."""
        scenario_files = self.find_scenario_files()
        print(f"분석할 시나리오 파일: {len(scenario_files)}개")
        
        results = {}
        total_combinations = 0
        
        for file_path in scenario_files:
            chapter_data = self.parse_scenario_file(file_path)
            if chapter_data:
                result = self.analyze_chapter(chapter_data)
                results[result['chapter']] = result
                
                if result['combinations_needed'] > 0:
                    total_combinations += result['combinations_needed']
        
        print(f"\n=== {self.base_case_folder.upper()} 전체 분석 결과 ===")
        print(f"총 챕터 수: {len(results)}")
        print(f"전체 최단 조합 수: {total_combinations}회")
        
        # 챕터별 요약
        for chapter_num in sorted(results.keys()):
            result = results[chapter_num]
            status = "SUCCESS" if result['combinations_needed'] > 0 else "FAIL"
            print(f"  Chapter {chapter_num}: {status} {result['combinations_needed']}회")
        
        return results

def main():
    # Case8 분석
    analyzer_case8 = ReversePathAnalyzer("case8")
    case8_results = analyzer_case8.analyze_all()    
    print("\n" + "="*60)
    
    # Case7 분석
    analyzer_case7 = ReversePathAnalyzer("case7")
    case7_results = analyzer_case7.analyze_all()    
    print("\n" + "="*60)
    
    # Case6 분석
    analyzer_case6 = ReversePathAnalyzer("case6")
    case6_results = analyzer_case6.analyze_all()    
    print("\n" + "="*60)
    
    # Case5 분석
    analyzer_case5 = ReversePathAnalyzer("case5")
    case5_results = analyzer_case5.analyze_all()
    print("\n" + "="*60)
    
    # Case4 분석
    analyzer_case4 = ReversePathAnalyzer("case4")
    case4_results = analyzer_case4.analyze_all()    
    print("\n" + "="*60)
    
    # Case3 분석
    analyzer_case3 = ReversePathAnalyzer("case3")
    case3_results = analyzer_case3.analyze_all()    
    print("\n" + "="*60)
    
    # Case2 분석
    analyzer_case2 = ReversePathAnalyzer("case2")
    case2_results = analyzer_case2.analyze_all()    
    print("\n" + "="*60)
    
    # Case1 분석
    analyzer_case1 = ReversePathAnalyzer("case1")
    case1_results = analyzer_case1.analyze_all()    
    print("\n" + "="*60)

if __name__ == "__main__":
    main()