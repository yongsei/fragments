@echo off
echo ⚡ 초고속 배포 시작...

:: 백그라운드에서 빌드 실행
start /B npm run build

:: 빌드 완료 대기 (build 폴더 변경 감지)
:wait_build
timeout /t 2 /nobreak >nul
if not exist "build\static\js\main.*.js" goto wait_build

:: 즉시 동기화 및 배포
call npx cap sync android
cd android && call .\gradlew assembleDebug && cd ..
adb install -r android\app\build\outputs\apk\debug\app-debug.apk

echo ⚡ 초고속 배포 완료!
timeout /t 3 /nobreak >nul