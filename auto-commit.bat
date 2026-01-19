@echo off
setlocal enabledelayedexpansion
cd /d "c:\Users\gamin\OneDrive\Desktop\Programming"

:loop
for /f %%A in ('git status --porcelain') do (
    if "%%A" neq "" (
        git add .
        for /f "tokens=2-4 delims=/ " %%A in ('date /t') do (set mydate=%%C-%%A-%%B)
        for /f "tokens=1-2 delims=/:" %%A in ('time /t') do (set mytime=%%A:%%B)
        git commit -m "Auto-commit: !mydate! !mytime!"
    )
)
timeout /t 5 /nobreak
goto loop
