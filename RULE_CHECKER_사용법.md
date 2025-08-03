# 🔍 미스터리 케이스 연결 규칙 검증 도구

이 도구들을 사용하여 각 케이스의 연결 규칙이 올바르게 설정되어 있는지 확인할 수 있습니다.

## 📁 파일 구성

### 배치 파일 (Windows)
- `check_case_rules.bat` - 특정 케이스 상세 검증
- `quick_check_all.bat` - 전체 케이스 요약 검증

### Node.js 스크립트
- `check_single_case.js` - 단일 케이스 상세 분석
- `quick_check_summary.js` - 전체 케이스 요약 분석

## 🚀 사용 방법

### 1. 특정 케이스 상세 검증
```bash
# 배치 파일 사용 (Windows)
check_case_rules.bat 4

# Node.js 직접 실행
node check_single_case.js 4
```

**출력 예시:**
```
🔍 케이스 4 연결 규칙 검증
========================================
📋 초기 카드 (9개):
   - alchemy_lab
   - library
   - storage_room
   ...
🎯 승리 조건: ultimate_truth

🔗 연결 규칙 (20개)

🔄 반복 1: 17개 카드 발견
   ✅ search_lab_deeper: [alchemy_lab + alchemical_symbols] → alchemist_journal
   ...

📊 검증 결과:
   총 접근 가능한 카드: 29개
   새로 발견한 카드: 20개
   승리 조건 달성: ✅ 가능

🎉 이 케이스는 정상적으로 플레이 가능합니다!
```

### 2. 전체 케이스 요약 검증
```bash
# 배치 파일 사용 (Windows)
quick_check_all.bat

# Node.js 직접 실행
node quick_check_summary.js
```

**출력 예시:**
```
케이스별 연결 규칙 요약 검증
================================

케이스  1: ✅ 정상 | 카드: 30개 | 규칙: 30개 | 승리: mary_guilty
케이스  2: ⚠️  승리불가 | 카드: 3개 | 규칙: 25개 | 승리: paradox_resolved
...

요약:
======
✅ 정상 케이스: 3개
⚠️  문제 케이스: 17개
```

### 3. 모든 케이스 상세 검증
```bash
check_case_rules.bat all
```

## 🔧 검증 항목

### ✅ 정상 케이스 조건
1. **초기 카드 존재**: 게임 시작 시 제공되는 기본 카드들
2. **연결 규칙 파싱**: 카드 조합 → 새 카드 해제 규칙들
3. **승리 조건 도달**: 초기 카드부터 시작해서 승리 조건까지 도달 가능
4. **규칙 체인**: 모든 연결 규칙이 올바른 순서로 실행 가능

### ⚠️ 문제 유형
- **초기 카드 부족**: 연결 규칙 실행에 필요한 기본 카드 누락
- **고립된 규칙**: 도달할 수 없는 카드를 요구하는 규칙
- **승리 조건 미도달**: 승리 조건 카드를 생성하는 규칙 누락
- **파싱 오류**: 시나리오 파일 구조 문제

## 🛠️ 문제 해결 가이드

### 1. 초기 카드 부족 문제
**증상:** 많은 규칙이 "카드 없음" 오류 표시
**해결:** `mystery_alchemyXcase.Game.tsx`의 `initialCards` 배열에 필요한 카드 추가

```tsx
initialCards={[
  // 장소
  'alchemy_lab', 'library', 'storage_room',
  // 증거  
  'alchemical_symbols', 'distilled_memories', 'failed_experiments',
  // 용의자
  'jealous_apprentice', 'rival_alchemist', 'mysterious_collector'
]}
```

### 2. 승리 조건 미도달 문제
**증상:** "승리 조건 달성: ❌ 불가능"
**해결:** 시나리오 파일에 승리 조건으로 이어지는 최종 규칙 추가

```ts
{
  id: 'final_victory_rule',
  cards: ['final_clue_1', 'final_clue_2'],
  result: '모든 진실이 밝혀졌습니다!',
  unlock: 'victory_condition_name'
}
```

### 3. 연결 규칙 0개 문제
**증상:** "규칙: 0개"로 표시
**해결:** 시나리오 파일의 `connectionRules` 배열 구조 확인

## 📊 현재 상태 (최근 검사 결과)

- ✅ **정상 케이스**: 1, 4, 19
- ⚠️  **문제 케이스**: 2-3, 5-18, 20

## 💡 팁

1. **케이스 4 참고**: 완벽하게 작동하는 케이스의 구조를 참고하세요
2. **단계적 검증**: 개별 케이스를 수정한 후 전체 요약으로 확인
3. **빌드 전 검증**: `npm run build` 전에 항상 검증 도구 실행 권장

---

**🚨 중요**: 이 도구는 게임 로직의 연결성만 검증합니다. 실제 게임 플레이 테스트도 함께 진행하세요.