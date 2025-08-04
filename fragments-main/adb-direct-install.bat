@echo off
echo ==========================================
echo ADB 직접 다운로드 및 설치
echo ==========================================
echo.

echo 1. ADB Platform Tools 다운로드 중...
echo https://dl.google.com/android/repository/platform-tools-latest-windows.zip
echo.

echo 다음 단계를 수행하세요:
echo.
echo 1. 위 링크에서 platform-tools-latest-windows.zip 다운로드
echo 2. C:\platform-tools\ 폴더에 압축 해제
echo 3. 환경변수 PATH에 C:\platform-tools 추가
echo.

echo 또는 아래 PowerShell 명령어를 관리자 모드에서 실행:
echo.
echo # PowerShell 관리자 모드에서 실행
echo Invoke-WebRequest -Uri "https://dl.google.com/android/repository/platform-tools-latest-windows.zip" -OutFile "C:\platform-tools.zip"
echo Expand-Archive -Path "C:\platform-tools.zip" -DestinationPath "C:\"
echo [Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";C:\platform-tools", [EnvironmentVariableTarget]::Machine)
echo.

echo 설치 후 새 CMD 창에서 'adb devices' 명령어로 확인하세요.
echo.

pause