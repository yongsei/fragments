@echo off
setlocal enabledelayedexpansion
chcp 65001 > nul

echo 초기 카드로 승리 조건 도달 가능성 검사
echo ==========================================
echo.

for /L %%i in (1,1,20) do (
    echo === 케이스 %%i ===
    
    set "gameFile=src\pages\mystery_alchemy\mystery_alchemy%%icase.Game.tsx"
    set "scenarioFile=src\pages\mystery_alchemy\data\mystery_alchemy%%icase.scenario.ts"
    
    if exist "!gameFile!" (
        if exist "!scenarioFile!" (
            echo 파일 존재: 게임 + 시나리오
            
            echo 초기 카드:
            findstr /C:"initialCards" "!gameFile!" 2>nul
            
            echo 승리 조건:
            findstr /C:"winCondition" "!gameFile!" 2>nul
            
            echo 연결 규칙 개수:
            for /f %%c in ('findstr /C:"cards:" "!scenarioFile!" 2^>nul ^| find /C "cards:"') do echo %%c개
            
            echo 첫 번째 연결 규칙들:
            findstr /N /C:"cards:" "!scenarioFile!" 2>nul | findstr /R "^[0-9]*:[^/]*cards:" | more +0
            
        ) else (
            echo 시나리오 파일 없음: !scenarioFile!
        )
    ) else (
        echo 게임 파일 없음: !gameFile!
    )
    echo.
)

echo 검사 완료
pause