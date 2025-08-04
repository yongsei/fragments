@echo off
echo ==========================================
echo AdMob 파일 복원
echo ==========================================
echo.

echo AdMob 관련 파일들을 복원합니다...

if exist "src\hooks\useAdMob.ts.backup" (
    del "src\hooks\useAdMob.ts"
    ren "src\hooks\useAdMob.ts.backup" "useAdMob.ts"
    echo useAdMob.ts 복원됨
)

if exist "src\components\AdModal.tsx.backup" (
    ren "src\components\AdModal.tsx.backup" "AdModal.tsx"
    echo AdModal.tsx 복원됨
)

echo.
echo ==========================================
echo AdMob 파일 복원 완료!
echo ==========================================

pause