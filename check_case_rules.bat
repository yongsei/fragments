@echo off
setlocal enabledelayedexpansion
chcp 65001 > nul

echo ===============================================
echo 미스터리 케이스 연결 규칙 검증 도구
echo ===============================================
echo.

if "%1"=="" (
    echo 사용법: check_case_rules.bat [케이스번호]
    echo 예시: check_case_rules.bat 4
    echo.
    echo 또는 'all'을 입력하면 모든 케이스를 검증합니다.
    echo 예시: check_case_rules.bat all
    pause
    exit /b
)

if "%1"=="all" (
    echo 모든 케이스 검증을 시작합니다...
    echo.
    for /L %%i in (1,1,20) do (
        echo ============= 케이스 %%i 검증 =============
        node check_single_case.js %%i
        echo.
    )
    echo 모든 케이스 검증 완료!
    pause
    exit /b
)

echo 케이스 %1 연결 규칙 검증을 시작합니다...
echo.
node check_single_case.js %1
echo.
echo 검증 완료!
pause