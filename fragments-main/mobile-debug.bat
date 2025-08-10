@echo off
echo ========================================
echo   📱 모바일 실시간 디버그 서버 시작
echo ========================================
echo.

:: PC IP 주소 확인
for /f "tokens=2 delims=:" %%i in ('ipconfig ^| findstr /C:"IPv4 주소"') do set IP=%%i
for /f "tokens=1" %%i in ("%IP%") do set CLEAN_IP=%%i

echo 🌐 PC IP 주소: %CLEAN_IP%
echo 📱 핸드폰에서 접속할 주소: http://%CLEAN_IP%:3000
echo.
echo ⚡ 실시간 반영: 코드 수정 시 핸드폰에서 즉시 확인 가능!
echo 🔄 자동 새로고침: 파일 저장 시 자동으로 업데이트됩니다.
echo.
echo ========================================

:: React 개발 서버를 모든 네트워크 인터페이스에서 접근 가능하게 시작
set HOST=0.0.0.0
set PORT=3000
npm start