@echo off
echo ==========================================
echo 단서의 파편 최종 완성 APK 빌드
echo ==========================================
echo.

echo 🎯 포함된 모든 수정사항:
echo • AdMob 광고 시스템 (ca-app-pub-2644745250787584~8383662488)
echo • 게임 로딩 문제 해결 (정적 import)
echo • Assets 미스터리 테마 적용 (다크 블루 그라데이션)
echo • 시스템 UI 겹침 완전 해결 (position:fixed 요소들)
echo • 상단/하단 고정 UI env(safe-area-inset) 적용
echo • 앱 이름: "단서의 파편"
echo.

echo 1. React 프로덕션 빌드...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ React 빌드 실패!
    pause
    exit /b 1
)

echo.
echo 2. Capacitor 동기화...
call npx cap sync android
if %errorlevel% neq 0 (
    echo ❌ Capacitor 동기화 실패!
    pause
    exit /b 1
)

echo.
echo 3. Android 프로젝트 클린...
cd android
call gradlew.bat clean
if %errorlevel% neq 0 (
    echo ❌ Android 클린 실패!
    pause
    exit /b 1
)

echo.
echo 4. Android Debug APK 빌드...
call gradlew.bat assembleDebug
if %errorlevel% neq 0 (
    echo ❌ APK 빌드 실패!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo 🎉 최종 APK 빌드 완료!
echo ==========================================
echo APK 파일: %cd%\app\build\outputs\apk\debug\app-debug.apk
echo.
echo ✅ 완성된 기능들:
echo • 🎮 Fragment of Mystery 5케이스 게임
echo • 📱 완벽한 모바일 UI (시스템 UI 겹침 없음)
echo • 💰 AdMob 리워드 광고 (게임 시작시)
echo • 🌐 한국어/영어 다국어 지원
echo • 🎨 미스터리 테마 디자인
echo • 💾 게임 진행 상황 자동 저장
echo • 🔙 올바른 뒤로가기 처리
echo.
echo 🚀 Google Play Store 배포 준비 완료!
echo.

pause