# === Configuration ===
$root = "C:\Users\Pathan\Documents\PROGRAMMING\BroCode\WebDevelopment"
$reactRoot = Join-Path -Path $root -ChildPath "REACT"
$basicsPath = Join-Path -Path $reactRoot -ChildPath "Basics"
$projectsPath = Join-Path -Path $reactRoot -ChildPath "Projects"

# === Folder lists ===
$basicsFolders = @(
"1.reactTutorialForBeginners",
"2.cardComponents",
"3.addCSSStyles",
"4.props",
"5.conditionalRendering",
"6.renderLists",
"7.clickEvents",
"8.useState()Hook",
"9.onChangeEventHandler",
"10.colorPickerApp",
"11.updateFurnctions",
"12.updateObjectsInState",
"13.updateArraysInState",
"14.updateArrayOfObjectsInState",
"15.toDoListApp",
"16.useEffect()Hook",
"17.digitalClockApp",
"18.useContext()hook",
"19.useRef()hook",
"20.stopwatchApp"
)

$projectFolders = @(
"colorPickerApp",
"toDoListApp",
"digitalClockApp",
"stopwatchApp"
)

# === Helper function to create a directory and report ===
function Create-Dir {
    param(
        [string]$FullPath
    )
    try {
        # Use -LiteralPath to avoid wildcard interpretation
        if (-not (Test-Path -LiteralPath $FullPath)) {
            New-Item -ItemType Directory -LiteralPath $FullPath -Force | Out-Null
            Write-Host "Created: $FullPath"
        } else {
            Write-Host "Exists:  $FullPath"
        }
    } catch {
        Write-Host "ERROR creating $FullPath : $($_.Exception.Message)" -ForegroundColor Red
    }
}

# === Ensure base path exists ===
if (-not (Test-Path -LiteralPath $root)) {
    Write-Host "Root path does not exist: $root" -ForegroundColor Yellow
    Write-Host "Attempting to create root path..."
    try {
        New-Item -ItemType Directory -LiteralPath $root -Force | Out-Null
        Write-Host "Created root: $root"
    } catch {
        Write-Host "ERROR creating root path: $($_.Exception.Message)" -ForegroundColor Red
        exit 1
    }
}

# === Create REACT, Basics, Projects ===
Create-Dir -FullPath $reactRoot
Create-Dir -FullPath $basicsPath
Create-Dir -FullPath $projectsPath

# === Create Basics subfolders ===
foreach ($f in $basicsFolders) {
    $full = Join-Path -Path $basicsPath -ChildPath $f
    Create-Dir -FullPath $full
}

# === Create Projects subfolders ===
foreach ($p in $projectFolders) {
    $full = Join-Path -Path $projectsPath -ChildPath $p
    Create-Dir -FullPath $full
}

Write-Host "Done." -ForegroundColor Green
