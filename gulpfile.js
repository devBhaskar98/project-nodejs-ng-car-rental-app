import gulp from 'gulp';
import { exec } from 'child_process';
import {glob} from 'glob';
import path from 'path';
import fs from 'fs-extra';
// import { del } from 'del'; // Use del directly as it supports default exports

// Function to find subfolders with package.json files
const findSubfoldersWithPackageJson = () => {
  return glob.sync('./src/**/package.json', { ignore: 'node_modules/**' });
};

// Gulp task: Install npm dependencies in subfolders with package.json
// Gulp task: Install npm dependencies in subfolders with package.json
gulp.task('postinstall', (done) => {
  const packageJsonFiles = findSubfoldersWithPackageJson();

  // Recursive function to install npm dependencies sequentially
  const installInSubfolders = (index) => {
    if (index >= packageJsonFiles.length) {
      console.log('All installations complete');
      done();
      return;
    }

    const file = packageJsonFiles[index];
    const subfolder = path.dirname(file);

    console.log('package json found ', subfolder)

    exec(`cd ${subfolder} && npm install`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error in ${subfolder}: ${stderr}`);
        done(err);
      } else {
        console.log(`Installing in ${subfolder}: ${stdout}`);
        // Install next subfolder recursively
        installInSubfolders(index + 1);
      }
    });
  };

  // Start installing from the first subfolder
  installInSubfolders(0);
});

// Gulp task: Clean node_modules directories in subfolders
gulp.task('clean',  (done) => {
  
  // Find all node_modules directories except in the node_modules folder itself
  const foldersWithNodeModules = glob.sync('**/node_modules');

  // Delete each node_modules directory
  const deletePromises = foldersWithNodeModules.map((folder) => {
    return fs.remove(folder);
  });

  // Wait for all deletions to complete
  Promise.all(deletePromises)
    .then(() => {
      console.log('Deleted all node_modules folders');
      done();
    })
    .catch((err) => {
      console.error('Error deleting node_modules:', err);
      done(err);
    });

});

// Default task: clean node_modules by default
gulp.task('install', gulp.series('clean', 'postinstall'));