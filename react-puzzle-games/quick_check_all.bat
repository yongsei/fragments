@echo off
setlocal enabledelayedexpansion
chcp 65001 > nul

echo ==========================================
echo 전체 케이스 빠른 검증 (요약)
echo ==========================================
echo.

node quick_check_summary.js

echo.
echo 검증 완료! 자세한 내용은 check_case_rules.bat [케이스번호]로 확인하세요.
pause