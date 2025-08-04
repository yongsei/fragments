@echo off
echo ==========================================
echo ADB (Android Debug Bridge) 설치
echo ==========================================
echo.

echo Chocolatey가 설치되어 있는지 확인...
choco --version >nul 2>&1
if %errorlevel% equ 0 (
    echo Chocolatey가 이미 설치되어 있습니다.
    goto install_adb
)

echo.
echo Chocolatey가 설치되지 않았습니다. 먼저 Chocolatey를 설치합니다...
echo 관리자 권한이 필요합니다. PowerShell 관리자 모드로 실행하세요.
echo.
echo 다음 명령어를 PowerShell 관리자 모드에서 실행하세요:
echo.
echo Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
echo.
pause
goto end

:install_adb
echo.
echo ADB 설치 중...
choco install adb -y
if %errorlevel% neq 0 (
    echo ADB 설치 실패!
    goto manual_install
)

echo.
echo 설치 완료! ADB 버전 확인...
adb version
if %errorlevel% equ 0 (
    echo ADB 설치 및 설정 완료!
    goto end
)

:manual_install
echo.
echo ==========================================
echo 수동 설치 방법
echo ==========================================
echo.
echo 1. Android Studio 설치 (권장)
echo    - https://developer.android.com/studio
echo    - SDK Manager에서 Android SDK Platform-Tools 설치
echo.
echo 2. 또는 Platform Tools만 직접 다운로드
echo    - https://developer.android.com/studio/releases/platform-tools
echo    - 압축 해제 후 환경변수 PATH에 추가
echo.

:end
echo.
echo ADB 설치 후 다음 명령어로 확인:
echo   adb devices
echo.
echo USB 디버깅이 활성화된 기기를 연결하세요.
pause