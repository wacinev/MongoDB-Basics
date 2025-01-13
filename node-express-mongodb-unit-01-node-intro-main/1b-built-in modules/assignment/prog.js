// your code here

const { diffieHellman } = require('crypto');
const fs = require('fs')
const path = require('path')

// read the directory that we are in
fs.readdir(__dirname, function (err, fileNames) {
    if (err) {
        console.log(err);
        
        return;
    }

    const directories = [];
    const regularFiles = [];

    //loop through the files
    // put them in the appropriate array above
    fileNames.forEach((fileName) => {
        if (fileName.includes('.')) {
            regularFiles.push(fileName);
        } else {
            directories.push(fileName);
        }
    })
        //loop through directories and print them out
        directories.forEach((directory) => console.log(directory))
        
        regularFiles.sort((fileA, fileB) => {
            const extA = fileA.slice(lastDotLocationA + 1);
            const extB = fileB.slice(lastDotLocationB + 1);
            
            if (extA < extB) {
                return -1;
            } else {
                return 1
            }
        })
        regularFiles.forEach((file) => console.log(file))
    })
