@echo off
chcp 65001 > nul
echo.
echo ==========================================
echo     프로젝트 파일 정리 스크립트
echo ==========================================
echo.

echo 🗑️  불필요한 파일들을 삭제합니다...
echo.

:: 임시 파일 및 테스트 파일들
if exist "clean" del /q "clean"
if exist "clen" del /q "clen"

:: 각종 테스트 및 체크 파일들
del /q "*.bat" 2>nul
del /q "*.ps1" 2>nul
del /q "*.js" 2>nul
del /q "*.jsx" 2>nul
del /q "*.css" 2>nul
echo 유지: build-and-install.bat

:: 문서 파일들 (필요시 남겨둠)
if exist "README-BUILDS.md" del /q "README-BUILDS.md"
if exist "RULE_CHECKER_사용법.md" del /q "RULE_CHECKER_사용법.md"
if exist "app-icon-guide.md" del /q "app-icon-guide.md" 
if exist "google-play-guide.md" del /q "google-play-guide.md"
if exist "대화기록_2025-01-08.md" del /q "대화기록_2025-01-08.md"

:: iOS 폴더 삭제 (Android만 사용)
if exist "ios" (
    echo 🗑️  iOS 폴더 삭제 중...
    rmdir /s /q "ios"
    echo ✅ iOS 폴더 삭제 완료
)

:: assets 폴더 삭제 (앱 아이콘 관련)
if exist "assets" (
    echo 🗑️  assets 폴더 삭제 중...
    rmdir /s /q "assets"
    echo ✅ assets 폴더 삭제 완료
)

:: build 폴더는 npm run build시 자동 생성되므로 삭제
if exist "build" (
    echo 🗑️  build 폴더 삭제 중... (자동 재생성됨)
    rmdir /s /q "build"
    echo ✅ build 폴더 삭제 완료
)

echo.
echo ==========================================
echo           🎉 정리 완료! 🎉  
echo ==========================================
echo.
echo ✅ 유지된 핵심 파일들:
echo    📱 android/ - Android 앱 프로젝트
echo    📂 src/ - React 소스 코드
echo    📂 public/ - 웹 퍼블릭 파일 (이미지 포함)
echo    📂 node_modules/ - npm 의존성 (건드리지 않음)
echo    📄 package.json, package-lock.json - 프로젝트 설정
echo    📄 capacitor.config.ts - Capacitor 설정
echo    📄 tsconfig.json - TypeScript 설정  
echo    🚀 build-and-install.bat - 빌드&설치 스크립트
echo.
echo ❌ 삭제된 불필요한 파일들:
echo    🗑️  각종 테스트/디버그 배치 파일들
echo    🗑️  iOS 관련 파일들 (Android만 사용)
echo    🗑️  문서 파일들
echo    🗑️  임시 파일들
echo    🗑️  build 폴더 (자동 재생성)
echo.
pause