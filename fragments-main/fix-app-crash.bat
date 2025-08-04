@echo off
echo ==========================================
echo 앱 실행 오류 해결 시도
echo ==========================================
echo.

echo 주요 문제 가능성:
echo 1. AdMob 설정 오류
echo 2. 권한 부족
echo 3. 앱 서명 문제
echo 4. React 빌드 오류
echo.

echo 해결 방법을 시도합니다...
echo.

echo 1. package.json에서 homepage 설정 확인...
findstr "homepage" package.json
if %errorlevel% neq 0 (
    echo homepage 설정이 없습니다. 추가합니다...
    
    echo.
    echo package.json에 다음 라인을 추가해야 합니다:
    echo   "homepage": ".",
    echo.
)

echo.
echo 2. React 라우터 설정 확인...
echo HashRouter를 사용하도록 변경하는 것을 권장합니다.
echo.

echo 3. Capacitor 설정 확인...
call npx cap doctor
if %errorlevel% neq 0 (
    echo Capacitor 설정에 문제가 있을 수 있습니다.
)

echo.
echo 4. 간단한 테스트 APK 빌드...
echo AdMob 없이 기본 앱만 빌드해보겠습니다.
echo.

echo ==========================================
echo 수동 확인이 필요한 사항:
echo ==========================================
echo 1. 기기의 "알 수 없는 소스" 설치 허용 여부
echo 2. 기기의 Android 버전 (최소 API 22 필요)
echo 3. 기기의 저장 공간 여유
echo 4. 기기에서 앱 설치 시 나타나는 오류 메시지
echo ==========================================

pause