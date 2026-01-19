# Auto-commit script for Programming folder
$repo = "c:\Users\gamin\OneDrive\Desktop\Programming"

while ($true) {
    try {
        Push-Location $repo
        
        # Check for any changes or untracked files
        $status = & git status --short
        
        if ($status.Length -gt 0) {
            & git add . 2>&1 | Out-Null
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            & git commit -m "Auto-commit: $timestamp" 2>&1 | Out-Null
        }
        
        Pop-Location
    }
    catch {
        if (Get-Location -ErrorAction SilentlyContinue) {
            Pop-Location
        }
    }
    
    Start-Sleep -Seconds 5
}
