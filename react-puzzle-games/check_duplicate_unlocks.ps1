# PowerShell script to find duplicate unlock values in each scenario file
# 각 시나리오 파일에서 중복된 unlock 값을 찾는 스크립트

Write-Host "🔍 추리 조합 게임 시나리오 unlock 중복 검사 시작..." -ForegroundColor Cyan
Write-Host ""

# 스크립트가 있는 디렉토리를 기준으로 경로 설정
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$dataPath = Join-Path $scriptPath "src/pages/mystery_alchemy/data/*case.scenario.ts"

try {
    $files = Get-ChildItem $dataPath -ErrorAction Stop
} catch {
    Write-Host "❌ 시나리오 파일을 찾을 수 없습니다: $dataPath" -ForegroundColor Red
    Write-Host "현재 위치에서 실행해주세요: react-puzzle-games 폴더" -ForegroundColor Yellow
    exit 1
}

$totalDuplicates = 0

foreach ($file in $files) {
    Write-Host "=== $($file.Name) ===" -ForegroundColor Yellow
    $content = Get-Content $file.FullName -Raw
    $unlocks = [regex]::Matches($content, "unlock:\s*'([^']+)'") | ForEach-Object { $_.Groups[1].Value }
    
    # Group by unlock value and count
    $grouped = $unlocks | Group-Object | Where-Object { $_.Count -gt 1 }
    
    if ($grouped) {
        Write-Host "❌ 중복된 unlock 값들:" -ForegroundColor Red
        foreach ($group in $grouped) {
            Write-Host "  '$($group.Name)': $($group.Count)번 사용됨" -ForegroundColor Red
            $totalDuplicates++
        }
    } else {
        Write-Host "✅ 중복된 unlock 값 없음" -ForegroundColor Green
    }
    Write-Host ""
}

Write-Host "🏁 검사 완료!" -ForegroundColor Cyan
if ($totalDuplicates -eq 0) {
    Write-Host "🎉 모든 시나리오 파일에서 중복된 unlock 값이 없습니다!" -ForegroundColor Green
} else {
    Write-Host "⚠️  총 $totalDuplicates 개의 중복된 unlock 값이 발견되었습니다." -ForegroundColor Yellow
    Write-Host "각 조합마다 고유한 unlock 값을 사용하도록 수정해주세요." -ForegroundColor Yellow
}