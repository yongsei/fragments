@echo off
echo ==========================================
echo Debug APK 빌드 및 로그 확인
echo ==========================================
echo.

echo 1. React 빌드...
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
echo 3. Debug APK 빌드...
cd android
call gradlew assembleDebug
if %errorlevel% neq 0 (
    echo Debug APK 빌드 실패!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo Debug APK 빌드 완료!
echo ==========================================
echo APK 위치: android\app\build\outputs\apk\debug\app-debug.apk
echo.
echo 이제 다음을 수행하세요:
echo 1. app-debug.apk를 기기에 설치
echo 2. USB 디버깅 연결 후 다음 명령어 실행:
echo    adb logcat -s "WebConsole:D" "chromium:D" "Capacitor:D"
echo.
echo 또는 Android Studio의 Logcat에서 오류 확인
echo ==========================================

pause