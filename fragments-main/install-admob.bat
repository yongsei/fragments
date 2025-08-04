@echo off
echo ==========================================
echo AdMob 광고 플러그인 설치
echo ==========================================
echo.

echo 1. Capacitor AdMob 플러그인 설치...
call npm install @capacitor-community/admob
if %errorlevel% neq 0 (
    echo 플러그인 설치 실패!
    pause
    exit /b 1
)

echo.
echo 2. React 프로덕션 빌드 생성...
call npm run build
if %errorlevel% neq 0 (
    echo React 빌드 실패!
    pause
    exit /b 1
)

echo.
echo 3. Capacitor 동기화...
call npx cap sync android
if %errorlevel% neq 0 (
    echo 동기화 실패!
    pause
    exit /b 1
)

echo.
echo ==========================================
echo AdMob 플러그인 설치 완료!
echo ==========================================
echo.
echo 다음 단계:
echo 1. Google AdMob 계정에서 앱 등록
echo 2. 광고 단위 ID 발급
echo 3. capacitor.config.ts에 AdMob 설정 추가
echo 4. 게임 시작 시 광고 코드 구현
echo ==========================================

pause