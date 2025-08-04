@echo off
echo ==========================================
echo Fragment of Mystery 빠른 테스트 빌드
echo (시스템 UI 수정사항 확인용)
echo ==========================================
echo.

echo 1. React 빌드 (빠른 모드)...
call npm run build
if %errorlevel% neq 0 (
    echo React 빌드 실패!
    pause
    exit /b 1
)

echo.
echo 2. Capacitor 동기화...
call npx cap sync android
if %errorlevel% neq 0 (
    echo Capacitor 동기화 실패!
    pause
    exit /b 1
)

echo.
echo 3. Debug APK 빠른 빌드...
cd android
call gradlew assembleDebug --parallel
if %errorlevel% neq 0 (
    echo Android 빌드 실패!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo 빠른 테스트 빌드 완료! 
echo ==========================================
echo APK 위치: android\app\build\outputs\apk\debug\app-debug.apk
echo.
echo 이제 안드로이드 기기에 설치해서 시스템 UI 겹침이
echo 해결되었는지 확인해보세요!
echo ==========================================

pause