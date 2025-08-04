@echo off
echo ==========================================
echo Fragment of Mystery 빌드 상태 확인
echo ==========================================
echo.

echo 📂 빌드 파일 위치 확인 중...
echo.

if exist "build\static\js\main.*.js" (
    echo ✅ React 빌드: 완료
    for %%f in (build\static\js\main.*.js) do echo    파일: %%f
) else (
    echo ❌ React 빌드: 없음
    echo    'npm run build' 실행 필요
)

echo.

if exist "android\app\build\outputs\apk\debug\app-debug.apk" (
    echo ✅ Debug APK: 존재
    for %%f in (android\app\build\outputs\apk\debug\app-debug.apk) do (
        echo    파일: %%f
        echo    크기: %%~zf bytes
        echo    수정일: %%~tf
    )
) else (
    echo ❌ Debug APK: 없음
    echo    './build-debug.bat' 실행 필요
)

echo.

if exist "android\app\build\outputs\apk\release\app-release.apk" (
    echo ✅ Release APK: 존재
    for %%f in (android\app\build\outputs\apk\release\app-release.apk) do (
        echo    파일: %%f
        echo    크기: %%~zf bytes
        echo    수정일: %%~tf
    )
) else (
    echo ❌ Release APK: 없음
    echo    './build-release.bat' 실행 필요
)

echo.

if exist "android\app\build\outputs\bundle\release\app-release.aab" (
    echo ✅ AAB (Google Play용): 존재
    for %%f in (android\app\build\outputs\bundle\release\app-release.aab) do (
        echo    파일: %%f
        echo    크기: %%~zf bytes
        echo    수정일: %%~tf
    )
) else (
    echo ❌ AAB: 없음
    echo    './build-release.bat' 실행 필요
)

echo.
echo ==========================================
echo 빌드 명령어:
echo   Debug:   ./build-debug.bat
echo   Release: ./build-release.bat
echo   빠른테스트: ./quick-test.bat
echo ==========================================

pause