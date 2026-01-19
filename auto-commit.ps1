$dir = "c:\Users\gamin\OneDrive\Desktop\Programming"
$lastCommitTime = Get-Date

while ($true) {
    try {
        Set-Location $dir
        $status = & git status --porcelain
        if ($status) {
            & git add .
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            & git commit -m "Auto-commit: $timestamp"
            $lastCommitTime = Get-Date
        }
    } catch {
        Write-Error $_
    }
    Start-Sleep -Seconds 5
}
