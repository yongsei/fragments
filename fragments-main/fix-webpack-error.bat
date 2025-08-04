@echo off
echo ==========================================
echo Webpack 플러그인 오류 해결
echo ==========================================
echo.

echo 1. npm 캐시 청소...
call npm cache clean --force
if %errorlevel% neq 0 (
    echo 캐시 청소 실패!
    pause
    exit /b 1
)

echo.
echo 2. node_modules 폴더 삭제...
if exist "node_modules" (
    echo node_modules 폴더를 삭제합니다...
    rmdir /s /q node_modules
    echo 삭제 완료!
) else (
    echo node_modules 폴더가 없습니다.
)

echo.
echo 3. package-lock.json 삭제...
if exist "package-lock.json" (
    del package-lock.json
    echo package-lock.json 삭제 완료!
)

echo.
echo 4. 의존성 패키지 전체 재설치...
call npm install
if %errorlevel% neq 0 (
    echo npm install 실패!
    pause
    exit /b 1
)

echo.
echo 5. html-webpack-plugin 수동 확인 및 설치...
call npm install html-webpack-plugin@5.5.0 --save-dev
if %errorlevel% neq 0 (
    echo html-webpack-plugin 설치 실패!
    pause
    exit /b 1
)

echo.
echo 6. React 빌드 테스트...
call npm run build
if %errorlevel% neq 0 (
    echo React 빌드 여전히 실패!
    echo 추가 디버깅이 필요합니다.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo Webpack 오류 해결 완료!
echo React 빌드가 정상적으로 작동합니다.
echo ==========================================

pause