Set objShell = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

repoPath = "c:\Users\gamin\OneDrive\Desktop\Programming"
objShell.CurrentDirectory = repoPath

Do While True
    On Error Resume Next
    
    ' Check git status
    Set objExec = objShell.Exec("git status --short")
    strStatus = objExec.StdOut.ReadAll()
    
    If Len(strStatus) > 0 Then
        ' Stage and commit
        objShell.Exec("git add .")
        timeStamp = Now()
        objShell.Exec("git commit -m ""Auto-commit: " & timeStamp & """")
    End If
    
    ' Wait 5 seconds
    WScript.Sleep(5000)
Loop
