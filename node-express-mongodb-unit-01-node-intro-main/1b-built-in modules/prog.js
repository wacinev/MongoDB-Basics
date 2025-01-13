/*
    1. Use require() to import the os module
*/

const os = require('os');

/*
    4. Use require() to import the fs module
*/

const fs = require('fs');

// CRUD:
// Create files
// Read files
// Update files
// Delete files

/*
    11. Use require() to import the path module
*/

/*
    2. Check for the type of operating system
*/

console.log(`Operating System: ${os.type()}`)

/*
    3. Check for the amount of free memory (in bytes)
*/

console.log(`Memory Available: ${os.freemem()}`)

/*
    5. Read the .txt files
*/

const data1 = fs.readFileSync('./data.txt', 'utf8')
const data2 = fs.readFileSync('./data2.txt', 'utf8')

console.log('data 1: ', data1)
console.log('data 2: ', data2)


/*
    6. Create a new file, use the .txt files as content
*/

// combine the contents of the 2 files into new-file.txt
fs.writeFileSync('new-file.txt', data1 + data2);

/*
    7. Read the new file to see if it works
*/

/*
    8. Leave a console log to demonstrate asyncronous timing
*/

/*
    9. Read data.txt and respond with it
*/

fs.readFile('./data.txt', 'utf8', function (err, result) {
    if (err) {
        console.log(err);

        return;
    }

    console.log('data.txt read asynchronously: ' + result);
})

/*
    10. Leave another console log to demonstrate asyncronous timing
*/
console.log('after async code')
/*
    12. Gather the relative file path of test.js
*/
const filePath = path.join('path-folder', 'test.js')
console.log(`file path to test.js: ${filePath}`)
/*
    13. Get the base file name from filePath
*/
const baseFileName = path.basename()
console.log()
/*
    14. Check the absolute file path of this file
*/
console.lof(`the path to my current dirrectory is: ${path.join(__dirname, __filename)}`)

/*
    15. read directory
*/
fs.readdir(__dirname, function (err, files) {
    
})