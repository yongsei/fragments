@echo off
chcp 65001 >nul
echo.
echo ========================================
echo   추리 조합 게임 unlock 중복 검사 도구
echo ========================================
echo.
echo [INFO] 시나리오 파일들을 검사하고 있습니다...
echo.

powershell -ExecutionPolicy Bypass -File "%~dp0check_duplicate_unlocks.ps1"

echo.
echo ========================================
echo 검사가 완료되었습니다.
echo.
echo 사용법: .\check_duplicate_unlocks.bat
echo 또는:   check_duplicate_unlocks.bat
echo ========================================
echo.
pause