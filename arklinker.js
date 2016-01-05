/**
 * A script linking the saved games folder of ark to the user directory, Windows only!
 * Created by kc on 05.01.16.
 */

var fs = require('fs');
var path = require('path');

// Just getting the users home
function getUserHome() {
  return process.env.HOME || process.env.USERPROFILE;
}

// Configure your paths here
var windowsProgrammPath = process.env['programfiles(x86)'] || path.join('c:', 'Programme (x86)');
var userHomePath = getUserHome();
var arkSavedPath = path.join(windowsProgrammPath,'steam','steamapps','common','ARK','ShooterGame', 'Saved');
var userPath = path.join(userHomePath, 'ArkSavedGames');

// Check if both directory exists. Continue only if it is here!
try {
  fs.statSync(userPath);
  fs.statSync(path.join(arkSavedPath, '..'));
}
catch(e) {
  console.error(e);
  process.exit(1);
}
// Remove the directory in the ARK folder
try {
  fs.rmdirSync(arkSavedPath);
}
catch(e) {
  if (e.code === "ENOTEMPTY") {
    console.log('This is the original ARK directory, copy to your local folder first and delete it manually.');
    process.exit(0);
  }
  else if (e.code === "ENOENT") {
    console.log('Directory not found. Proceeding...');
  }
  else {
    console.error(e);
    process.exit(2);
  }
}

// Create the symbolic link
try {
  fs.symlinkSync(userPath, arkSavedPath, 'dir');
}
catch(e){
  console.error(e);
  process.exit(3);
}

console.log('OK, done.');
