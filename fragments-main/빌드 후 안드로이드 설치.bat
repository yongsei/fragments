@echo off
chcp 65001 > nul
echo.
echo ==========================================
echo   단서의 파편 - 앱 빌드 및 설치 스크립트
echo ==========================================
echo.

:: 시작 시간 기록
set start_time=%time%
echo 🚀 빌드 시작 시간: %start_time%
echo.

:: 1단계: React 앱 빌드
echo ⏳ 1단계: React 프로덕션 빌드 중...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo ❌ React 빌드 실패!
    pause
    exit /b 1
)
echo ✅ React 빌드 완료!
echo.

:: 2단계: Capacitor 동기화
echo ⏳ 2단계: Capacitor 동기화 중...
call npx cap sync
if %ERRORLEVEL% neq 0 (
    echo ❌ Capacitor 동기화 실패!
    pause
    exit /b 1
)
echo ✅ Capacitor 동기화 완료!
echo.

:: 3단계: Android APK 빌드
echo ⏳ 3단계: Android APK 빌드 중...
cd android
call gradlew assembleDebug
if %ERRORLEVEL% neq 0 (
    echo ❌ APK 빌드 실패!
    cd ..
    pause
    exit /b 1
)
cd ..
echo ✅ APK 빌드 완료!
echo.

:: 4단계: 기존 앱 제거 (선택사항)
echo ⏳ 4단계: 기존 앱 제거 중... (없어도 정상)
adb uninstall com.fragmentmystery.app 2>nul
echo ✅ 기존 앱 제거 완료 (또는 없음)
echo.

:: 5단계: 새 APK 설치
echo ⏳ 5단계: 핸드폰에 APK 설치 중...
adb devices
echo.
echo 📱 연결된 디바이스를 확인하세요. 없으면 USB 디버깅을 활성화하세요.
echo.
adb install -r android\app\build\outputs\apk\debug\app-debug.apk
if %ERRORLEVEL% neq 0 (
    echo.
    echo ❌ APK 설치 실패!
    echo 💡 가능한 해결 방법:
    echo    1. USB 디버깅이 활성화되어 있는지 확인
    echo    2. 컴퓨터 연결 허용을 핸드폰에서 승인했는지 확인
    echo    3. 개발자 옵션이 활성화되어 있는지 확인
    echo    4. 다른 USB 케이블 또는 포트를 시도해보세요
    echo.
    pause
    exit /b 1
)
echo.

:: 완료 메시지
set end_time=%time%
echo.
echo ==========================================
echo           🎉 설치 완료! 🎉
echo ==========================================
echo 📱 앱 이름: Fragment of Mystery (단서의 파편)
echo 📦 패키지: com.fragmentmystery.app
echo 📍 APK 위치: android\app\build\outputs\apk\debug\app-debug.apk
echo ⏰ 시작: %start_time%
echo ⏰ 완료: %end_time%
echo.
echo 🎮 핸드폰에서 '단서의 파편' 앱을 실행해보세요!
echo.

:: APK 파일 크기 확인
for %%A in (android\app\build\outputs\apk\debug\app-debug.apk) do (
    set size=%%~zA
    set /a mb=!size!/1024/1024
    echo 📊 APK 크기: !mb! MB
)
echo.

:: 앱 실행 (선택사항)
echo 🚀 자동으로 앱을 실행하시겠습니까? (Y/N)
set /p choice="선택: "
if /i "%choice%"=="Y" (
    echo 📱 앱 실행 중...
    adb shell am start -n com.fragmentmystery.app/.MainActivity
    echo ✅ 앱이 실행되었습니다!
)

echo.
echo 👋 완료! 아무 키나 누르세요...
pause > nul