@echo off
setlocal enabledelayedexpansion
chcp 65001 > nul

echo 케이스 1-5 초기 카드 및 승리 조건 체크
echo =======================================
echo.

for /L %%i in (1,1,5) do (
    echo === 케이스 %%i ===
    
    set "gameFile=src\pages\mystery_alchemy\mystery_alchemy%%icase.Game.tsx"
    
    if exist "!gameFile!" (
        echo [게임 파일 존재]
        echo 초기 카드:
        findstr /C:"initialCards" "!gameFile!" 2>nul
        echo 승리 조건:
        findstr /C:"winCondition" "!gameFile!" 2>nul
        echo.
    ) else (
        echo [게임 파일 없음]: !gameFile!
        echo.
    )
)

echo 체크 완료
pause