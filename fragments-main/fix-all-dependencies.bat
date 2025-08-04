@echo off
echo ==========================================
echo 의존성 문제 완전 해결
echo ==========================================
echo.

echo 1. npm 캐시 완전 청소...
call npm cache clean --force
call npm cache verify

echo.
echo 2. 기존 설치 파일들 완전 삭제...
if exist "node_modules" (
    echo node_modules 삭제 중...
    rmdir /s /q node_modules
)
if exist "package-lock.json" (
    del package-lock.json
)
if exist "npm-debug.log" (
    del npm-debug.log
)

echo.
echo 3. npm 레지스트리 확인...
call npm config set registry https://registry.npmjs.org/
call npm config set fetch-retries 5
call npm config set fetch-retry-mintimeout 20000
call npm config set fetch-retry-maxtimeout 120000

echo.
echo 4. 기본 의존성 설치...
call npm install --no-optional --prefer-offline=false
if %errorlevel% neq 0 (
    echo 기본 설치 실패, 강제 설치 시도...
    call npm install --force --no-optional
)

echo.
echo 5. 누락된 모듈들 개별 설치...
call npm install estraverse@^5.3.0
call npm install html-webpack-plugin@^5.5.0
call npm install @capacitor-community/admob@^7.0.3

echo.
echo 6. AdMob 플러그인 확인...
call npm list @capacitor-community/admob
if %errorlevel% neq 0 (
    echo AdMob 플러그인 재설치...
    call npm install @capacitor-community/admob --force
)

echo.
echo 7. React 빌드 테스트...
call npm run build
if %errorlevel% neq 0 (
    echo 빌드 실패! 추가 진단 필요
    pause
    exit /b 1
)

echo.
echo ==========================================
echo 모든 의존성 문제 해결 완료!
echo React 빌드가 정상 작동합니다.
echo ==========================================

pause