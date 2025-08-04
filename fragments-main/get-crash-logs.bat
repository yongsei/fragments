@echo off
echo ==========================================
echo Fragment of Mystery 크래시 로그 확인
echo ==========================================
echo.

echo USB 디버깅이 활성화되어 있고 기기가 연결되어 있는지 확인하세요.
echo.

echo 1. 연결된 기기 확인...
adb devices
if %errorlevel% neq 0 (
    echo ADB가 설치되지 않았거나 기기가 연결되지 않았습니다.
    echo Android Studio의 SDK Platform-Tools가 필요합니다.
    pause
    exit /b 1
)

echo.
echo 2. 기존 로그 클리어...
adb logcat -c

echo.
echo 3. 이제 앱을 실행하세요! (다른 창에서)
echo   - 앱을 실행하고 크래시가 발생할 때까지 기다리세요
echo   - 크래시 후 이 창에서 Ctrl+C를 눌러 로그 수집을 중단하세요
echo.

echo 4. 실시간 로그 모니터링 시작...
echo ==========================================
adb logcat -v time *:E *:W *:F AndroidRuntime:* System.err:* Capacitor:* chromium:*

pause