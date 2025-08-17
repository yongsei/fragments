@echo off
echo =========================================
echo Fragment of Mystery - AAB 빌드 스크립트
echo =========================================
echo.

cd /d "%~dp0fragments-main"

echo [1/5] React 프로덕션 빌드 중...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ React 빌드 실패!
    pause
    exit /b 1
)
echo ✅ React 빌드 완료!
echo.

echo [2/5] Capacitor 동기화 중...
call npx cap sync
if %errorlevel% neq 0 (
    echo ❌ Capacitor 동기화 실패!
    pause
    exit /b 1
)
echo ✅ Capacitor 동기화 완료!
echo.

echo [3/5] Android 프로젝트로 이동...
cd android
echo 현재 위치: %cd%
echo.

echo [4/5] AAB(Android App Bundle) 빌드 중...
echo 디버그 AAB 빌드를 시작합니다...
call gradlew bundleDebug
if %errorlevel% neq 0 (
    echo ❌ AAB 빌드 실패!
    echo.
    echo 릴리즈 AAB 빌드를 시도합니다...
    call gradlew bundleRelease
    if %errorlevel% neq 0 (
        echo ❌ 릴리즈 AAB 빌드도 실패!
        pause
        exit /b 1
    )
    echo ✅ 릴리즈 AAB 빌드 완료!
    set "AAB_PATH=app\build\outputs\bundle\release\app-release.aab"
) else (
    echo ✅ 디버그 AAB 빌드 완료!
    set "AAB_PATH=app\build\outputs\bundle\debug\app-debug.aab"
)
echo.

echo [5/5] 빌드 완료 정보
echo =========================================
echo 📱 AAB 파일 위치: %AAB_PATH%
echo 📁 전체 경로: %cd%\%AAB_PATH%
echo.
echo 파일 정보:
if exist "%AAB_PATH%" (
    dir "%AAB_PATH%" | findstr /v "Directory"
    echo ✅ AAB 파일이 성공적으로 생성되었습니다!
    echo.
    echo 📤 Google Play Console 업로드 준비 완료!
    echo    AAB 파일을 Google Play Console에 업로드하세요.
) else (
    echo ❌ AAB 파일을 찾을 수 없습니다!
    echo 경로를 확인해주세요: %AAB_PATH%
)
echo.
echo =========================================
echo Fragment of Mystery AAB 빌드 완료! 🎮
echo =========================================
pause