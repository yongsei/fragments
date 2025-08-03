# 초기 카드로 승리 조건까지 도달 가능한지 확인하는 스크립트

Write-Host "🔍 초기 카드 → 승리 조건 경로 검사 시작..." -ForegroundColor Cyan
Write-Host ""

# 케이스별 파일 경로
$cases = @(
    @{num=1; game="src/pages/mystery_alchemy/mystery_alchemy1case.Game.tsx"; scenario="src/pages/mystery_alchemy/data/mystery_alchemy1case.scenario.ts"},
    @{num=2; game="src/pages/mystery_alchemy/mystery_alchemy2case.Game.tsx"; scenario="src/pages/mystery_alchemy/data/mystery_alchemy2case.scenario.ts"},
    @{num=3; game="src/pages/mystery_alchemy/mystery_alchemy3case.Game.tsx"; scenario="src/pages/mystery_alchemy/data/mystery_alchemy3case.scenario.ts"},
    @{num=4; game="src/pages/mystery_alchemy/mystery_alchemy4case.Game.tsx"; scenario="src/pages/mystery_alchemy/data/mystery_alchemy4case.scenario.ts"},
    @{num=5; game="src/pages/mystery_alchemy/mystery_alchemy5case.Game.tsx"; scenario="src/pages/mystery_alchemy/data/mystery_alchemy5case.scenario.ts"},
    @{num=6; game="src/pages/mystery_alchemy/mystery_alchemy6case.Game.tsx"; scenario="src/pages/mystery_alchemy/data/mystery_alchemy6case.scenario.ts"},
    @{num=7; game="src/pages/mystery_alchemy/mystery_alchemy7case.Game.tsx"; scenario="src/pages/mystery_alchemy/data/mystery_alchemy7case.scenario.ts"},
    @{num=8; game="src/pages/mystery_alchemy/mystery_alchemy8case.Game.tsx"; scenario="src/pages/mystery_alchemy/data/mystery_alchemy8case.scenario.ts"},
    @{num=9; game="src/pages/mystery_alchemy/mystery_alchemy9case.Game.tsx"; scenario="src/pages/mystery_alchemy/data/mystery_alchemy9case.scenario.ts"},
    @{num=10; game="src/pages/mystery_alchemy/mystery_alchemy10case.Game.tsx"; scenario="src/pages/mystery_alchemy/data/mystery_alchemy10case.scenario.ts"},
    @{num=11; game="src/pages/mystery_alchemy/mystery_alchemy11case.Game.tsx"; scenario="src/pages/mystery_alchemy/data/mystery_alchemy11case.scenario.ts"}
)

foreach ($case in $cases) {
    Write-Host "=== 케이스 $($case.num) ===" -ForegroundColor Yellow
    
    if (-not (Test-Path $case.game)) {
        Write-Host "❌ 게임 파일 없음" -ForegroundColor Red
        continue
    }
    
    if (-not (Test-Path $case.scenario)) {
        Write-Host "❌ 시나리오 파일 없음" -ForegroundColor Red  
        continue
    }
    
    # 게임 파일에서 초기 카드와 승리 조건 추출
    $gameContent = Get-Content $case.game -Raw
    
    # initialCards 추출
    $initialCards = @()
    if ($gameContent -match "initialCards=\{?\[([^\]]+)\]") {
        $cardsText = $matches[1]
        $initialCards = $cardsText -split "," | ForEach-Object { 
            $_.Trim() -replace "'", "" -replace '"', '' -replace '\s+', ''
        } | Where-Object { $_ -ne "" }
    }
    
    # winCondition 추출  
    $winCondition = ""
    if ($gameContent -match 'winCondition="([^"]+)"') {
        $winCondition = $matches[1]
    }
    
    Write-Host "초기 카드 ($($initialCards.Count)개): $($initialCards -join ', ')" -ForegroundColor Gray
    Write-Host "승리 조건: $winCondition" -ForegroundColor Gray
    
    if ($initialCards.Count -eq 0 -or $winCondition -eq "") {
        Write-Host "❌ 초기 카드 또는 승리 조건을 찾을 수 없음" -ForegroundColor Red
        continue
    }
    
    # 시나리오 파일에서 연결 규칙 확인
    $scenarioContent = Get-Content $case.scenario -Raw
    
    # 간단한 경로 확인 - 초기 카드들로 바로 승리 조건에 도달할 수 있는지
    $directPath = $false
    $pathSteps = @()
    
    # 승리 조건이 초기 카드에 있는지 확인
    if ($initialCards -contains $winCondition) {
        Write-Host "✅ 승리 조건이 초기 카드에 포함됨" -ForegroundColor Green
        $directPath = $true
    } else {
        # connectionRules에서 초기 카드 조합으로 승리 조건을 만들 수 있는지 확인
        $rules = @()
        
        # 정규식으로 각 규칙 찾기
        $rulePattern = '\{\s*id:\s*[''"]([^''"]+)[''"][^}]*cards:\s*\[([^\]]+)\][^}]*unlock:\s*[''"]([^''"]*)[''"]'
        $matches = [regex]::Matches($scenarioContent, $rulePattern)
        
        foreach ($match in $matches) {
            $ruleId = $match.Groups[1].Value
            $cardsText = $match.Groups[2].Value
            $unlock = $match.Groups[3].Value
            
            if ($unlock -ne "") {
                $ruleCards = $cardsText -split "," | ForEach-Object { 
                    $_.Trim() -replace "'", "" -replace '"', ''
                }
                
                $rules += @{
                    id = $ruleId
                    cards = $ruleCards
                    unlock = $unlock
                }
            }
        }
        
        Write-Host "연결 규칙 $($rules.Count)개 발견" -ForegroundColor Gray
        
        # 1단계 경로 확인 (초기 카드들로 바로 만들 수 있는 것)
        foreach ($rule in $rules) {
            $canMake = $true
            foreach ($card in $rule.cards) {
                if ($initialCards -notcontains $card) {
                    $canMake = $false
                    break
                }
            }
            
            if ($canMake -and $rule.unlock -eq $winCondition) {
                Write-Host "✅ 1단계 직접 경로 발견!" -ForegroundColor Green
                Write-Host "  $($rule.cards -join ' + ') → $($rule.unlock)" -ForegroundColor DarkGreen
                $directPath = $true
                break
            }
        }
        
        # 2단계 경로 확인 (초기 카드 → 중간 카드 → 승리 조건)
        if (-not $directPath) {
            $availableCards = $initialCards.Clone()
            $foundNew = $true
            $steps = 0
            
            while ($foundNew -and $steps -lt 5) {
                $foundNew = $false
                $steps++
                
                foreach ($rule in $rules) {
                    $canMake = $true
                    foreach ($card in $rule.cards) {
                        if ($availableCards -notcontains $card) {
                            $canMake = $false
                            break
                        }
                    }
                    
                    if ($canMake -and $availableCards -notcontains $rule.unlock -and $rule.unlock -ne "") {
                        $availableCards += $rule.unlock
                        $pathSteps += "$($rule.cards -join ' + ') → $($rule.unlock)"
                        $foundNew = $true
                        
                        if ($rule.unlock -eq $winCondition) {
                            Write-Host "✅ $steps 단계 경로 발견!" -ForegroundColor Green
                            foreach ($step in $pathSteps) {
                                Write-Host "  $step" -ForegroundColor DarkGreen
                            }
                            $directPath = $true
                            break
                        }
                    }
                }
                
                if ($directPath) { break }
            }
        }
    }
    
    if (-not $directPath) {
        Write-Host "❌ 경로 없음 - 초기 카드로 승리 조건에 도달할 수 없음" -ForegroundColor Red
    }
    
    Write-Host ""
}

Write-Host "🏁 검사 완료!" -ForegroundColor Cyan