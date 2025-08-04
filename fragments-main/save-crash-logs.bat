@echo off
echo ==========================================
echo 크래시 로그를 파일로 저장
echo ==========================================
echo.

echo 기존 로그 클리어...
adb logcat -c

echo.
echo 로그를 crash-log.txt 파일로 저장합니다.
echo 이제 앱을 실행하세요!
echo.
echo 크래시 발생 후 Ctrl+C를 눌러 중단하세요.
echo ==========================================

adb logcat -v time > crash-log.txt

echo.
echo 로그가 crash-log.txt 파일에 저장되었습니다.
echo 이 파일의 내용을 확인해보세요.

pause