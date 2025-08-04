@echo off
echo ==========================================
echo Fragment of Mystery Debug 빌드
echo ==========================================
echo.

echo 1. React 개발 빌드 생성...
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
echo 3. Android Debug APK 빌드...
cd android
call gradlew assembleDebug
if %errorlevel% neq 0 (
    echo Android 빌드 실패!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo Debug 빌드 완료! 
echo APK 위치: android\app\build\outputs\apk\debug\app-debug.apk
echo ==========================================
echo.

pause