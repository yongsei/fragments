@echo off
echo ========================================
echo   ? Capacitor Live Reload 시작!
echo ========================================
echo.

echo ? 1단계: 개발 서버 실행 (포트 3333)
echo ? 앱이 자동으로 PC 개발 서버에 연결됩니다.
echo ? 코드 수정 시 앱에서 즉시 반영됩니다!
echo.
echo 사용법:
echo 1. 이 창은 그대로 두세요 (서버 실행 중)
echo 2. 핸드폰에서 "Fragment of Mystery" 앱 실행
echo 3. 소스 코드 수정 후 저장 → 앱에서 즉시 확인!
echo.
echo ========================================

:: React 개발 서버를 모든 네트워크 인터페이스에서 접근 가능하게 시작
npx cap run android --live-reload