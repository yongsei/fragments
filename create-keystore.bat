@echo off
echo ==========================================
echo Fragment of Mystery App 서명키 생성
echo ==========================================
echo.

REM 키스토어 생성 (Java 설치 후 실행)
keytool -genkey -v -keystore fragment-mystery-key.keystore ^
-alias fragment-mystery ^
-keyalg RSA ^
-keysize 2048 ^
-validity 10000 ^
-storepass FragmentMystery2025! ^
-keypass FragmentMystery2025!

echo.
echo 키스토어 파일이 생성되었습니다: fragment-mystery-key.keystore
echo 이 파일을 안전한 곳에 보관하세요!
echo.
pause