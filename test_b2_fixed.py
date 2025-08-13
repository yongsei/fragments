#!/usr/bin/env python3

# Case5 Chapter2 수정 후 경로 추적
initial = ['B01', 'B02', 'B03']
available = set(initial)
combinations = 0

rules = [
    (['B02', 'B03'], 'B04'),
    (['B01', 'B04'], 'B05'),
    (['B05', 'B02'], 'B06'),
    (['B04', 'B05'], 'B07'),
    (['B03', 'B06'], 'B08'),
    (['B08', 'B07'], 'B09'),
    (['B09', 'B06'], 'B10'),
    (['B10', 'B05'], 'B11'),
    (['B09', 'B11'], 'B12'),  # 수정됨
    (['B02', 'B10'], 'B13'),
    (['B05', 'B13'], 'B14'),
    (['B13', 'B11'], 'B16'),  # 추가됨
    (['B14', 'B12'], 'B15'),  # 수정됨
    (['B10', 'B16'], 'B17'),
    (['B17', 'B15'], 'B18')   # 수정됨
]

print(f"초기: {sorted(available)}")
print(f"승리조건: B18")
print()

step = 0
while 'B18' not in available:
    step += 1
    new_cards = []
    
    for required, unlock in rules:
        if unlock not in available and all(card in available for card in required):
            available.add(unlock)
            combinations += 1
            new_cards.append(f"{required[0]} + {required[1]} → {unlock}")
    
    if not new_cards:
        print("더 이상 조합할 수 없습니다!")
        break
        
    print(f"Step {step}: {len(new_cards)}개 조합")
    for combo in new_cards:
        print(f"  {combo}")
    print(f"현재 보유: {len(available)}개 카드")
    print()

if 'B18' in available:
    print(f"SUCCESS: 총 {combinations}회 조합으로 B18 달성!")
else:
    print("FAIL: B18 도달 불가능")

print(f"최종 보유: {sorted(available)}")