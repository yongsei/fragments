@echo off
echo ==========================================
echo Fragment of Mystery Release 빌드
echo ==========================================
echo.

echo 1. React 프로덕션 빌드 생성...
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
echo 3. Android Release APK 빌드...
cd android
call gradlew assembleRelease
if %errorlevel% neq 0 (
    echo Android 빌드 실패!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo 빌드 완료! 
echo APK 위치: android\app\build\outputs\apk\release\app-release.apk
echo ==========================================
echo.

echo 4. AAB (Android App Bundle) 빌드... (Google Play 권장)
call gradlew bundleRelease
if %errorlevel% neq 0 (
    echo AAB 빌드 실패!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo 모든 빌드 완료!
echo APK: android\app\build\outputs\apk\release\app-release.apk
echo AAB: android\app\build\outputs\bundle\release\app-release.aab
echo ==========================================

pause