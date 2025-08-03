@echo off
chcp 65001 > nul
echo 🔍 초기 카드 → 승리 조건 경로 검사 시작...
echo.

for /L %%i in (1,1,11) do (
    echo === 케이스 %%i ===
    
    set "gameFile=src\pages\mystery_alchemy\mystery_alchemy%%icase.Game.tsx"
    set "scenarioFile=src\pages\mystery_alchemy\data\mystery_alchemy%%icase.scenario.ts"
    
    if exist "!gameFile!" (
        if exist "!scenarioFile!" (
            echo ✅ 파일 존재 확인
            
            REM 초기 카드 추출
            findstr /C:"initialCards" "!gameFile!" | findstr /V "//"
            
            REM 승리 조건 추출  
            findstr /C:"winCondition" "!gameFile!" | findstr /V "//"
            
            echo 📋 시나리오 파일에서 연결 규칙 개수 확인:
            findstr /C:"cards:" "!scenarioFile!" | find /C "cards:" 
            
        ) else (
            echo ❌ 시나리오 파일 없음
        )
    ) else (
        echo ❌ 게임 파일 없음
    )
    echo.
)

echo 🏁 검사 완료!
pause