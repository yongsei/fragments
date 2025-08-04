@echo off
echo ==========================================
echo npm 보안 취약점 수정
echo ==========================================
echo.

echo 보안 취약점 상세 확인...
call npm audit

echo.
echo 자동 수정 시도 (안전한 업데이트만)...
call npm audit fix

echo.
echo 강제 수정 (주의: 호환성 문제 가능)...
echo 계속하려면 아무 키나 누르세요...
pause

call npm audit fix --force

echo.
echo ==========================================
echo npm 취약점 수정 완료!
echo React 빌드를 다시 테스트해보세요.
echo ==========================================

pause