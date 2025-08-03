# 초기 카드로 승리 조건 도달 가능성 검사
Write-Host "초기 카드로 승리 조건 도달 가능성 검사" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
Write-Host ""

for ($i = 1; $i -le 20; $i++) {
    Write-Host "=== 케이스 $i ===" -ForegroundColor Yellow
    
    $gameFile = "src\pages\mystery_alchemy\mystery_alchemy${i}case.Game.tsx"
    $scenarioFile = "src\pages\mystery_alchemy\data\mystery_alchemy${i}case.scenario.ts"
    
    if (Test-Path $gameFile) {
        if (Test-Path $scenarioFile) {
            Write-Host "파일 존재: 게임 + 시나리오" -ForegroundColor Green
            
            Write-Host "초기 카드:"
            Select-String -Path $gameFile -Pattern "initialCards" | Select-Object -First 1
            
            Write-Host "승리 조건:"
            Select-String -Path $gameFile -Pattern "winCondition" | Select-Object -First 1
            
            Write-Host "연결 규칙 개수:"
            $cardRules = Select-String -Path $scenarioFile -Pattern "cards:" -AllMatches
            Write-Host "$($cardRules.Count)개"
            
            Write-Host "첫 번째 연결 규칙들:"
            $cardRules | Select-Object -First 5 | ForEach-Object { 
                Write-Host "  $($_.LineNumber): $($_.Line.Trim())"
            }
            
        } else {
            Write-Host "시나리오 파일 없음: $scenarioFile" -ForegroundColor Red
        }
    } else {
        Write-Host "게임 파일 없음: $gameFile" -ForegroundColor Red
    }
    Write-Host ""
}

Write-Host "검사 완료" -ForegroundColor Green