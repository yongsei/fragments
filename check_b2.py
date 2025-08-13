#!/usr/bin/env python3

# Case5 Chapter2 수동 경로 추적
initial = ['B01', 'B02', 'B03']
available = set(initial)
step = 0

rules = [
    (['B02', 'B03'], 'B04'),
    (['B01', 'B04'], 'B05'),
    (['B05', 'B02'], 'B06'),
    (['B04', 'B05'], 'B07'),
    (['B03', 'B06'], 'B08'),
    (['B08', 'B07'], 'B09'),
    (['B09', 'B06'], 'B10'),
    (['B10', 'B05'], 'B11'),
    (['B04', 'B02'], 'B12'),
    (['B02', 'B10'], 'B13'),
    (['B05', 'B13'], 'B14'),
    (['B04', 'B12'], 'B15'),
    (['B10', 'B16'], 'B17'),  # B16이 없어서 불가능
    (['B12', 'B15'], 'B18')
]

print(f"초기: {sorted(available)}")

while True:
    step += 1
    new_cards = []
    
    for required, unlock in rules:
        if unlock not in available and all(card in available for card in required):
            available.add(unlock)
            new_cards.append(f"{required[0]} + {required[1]} → {unlock}")
    
    if not new_cards:
        break
        
    print(f"Step {step}: {new_cards}")
    print(f"보유: {sorted(available)}")
    
    if 'B18' in available:
        print(f"SUCCESS: {len(new_cards)} steps")
        break

print(f"\n최종 보유: {sorted(available)}")
print(f"B16 있나? {'B16' in available}")
print(f"B17 가능? {'B16' in available and 'B10' in available}")
print(f"B18 도달? {'B18' in available}")