$dir = "c:\Users\gamin\OneDrive\Desktop\Programming"
while ($true) {
    try {
        cd $dir
        $status = git status --porcelain 2>$null
        if ($status) {
            git add . 2>$null
            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            git commit -m "Auto-commit: $timestamp" 2>$null
        }
    } catch {
        # Silently continue on error
    }
    Start-Sleep -Seconds 10
}
