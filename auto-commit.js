const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoPath = 'c:\\Users\\gamin\\OneDrive\\Desktop\\Programming';

function autoCommit() {
  try {
    process.chdir(repoPath);
    
    // Check for changes
    const status = execSync('git status --short', { encoding: 'utf8' });
    
    if (status.trim().length > 0) {
      // Stage all changes
      execSync('git add .', { stdio: 'ignore' });
      
      // Commit with timestamp
      const timestamp = new Date().toLocaleString();
      execSync(`git commit -m "Auto-commit: ${timestamp}"`, { stdio: 'ignore' });
      
      console.log(`[${new Date().toLocaleTimeString()}] Committed changes`);
    }
  } catch (error) {
    // Silently handle errors (e.g., nothing to commit)
  }
}

console.log('Auto-commit started. Press Ctrl+C to stop.');

// Run every 5 seconds
setInterval(autoCommit, 5000);
