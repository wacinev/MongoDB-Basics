// try {
//     consooooooooole.log('If this does not work...');

// } catch (error){
//     console.log('... this will');
//     console.log(error);
// }

// console.log('will this run?')

const prompt = require('prompt-sync')();

try {
    const password = prompt('Enter a password of at least 4 characters: ');
    if (password.length < 4) {
        throw "That password is too short!"
    }
} catch (error) {
    console.log(`The error was: ${error}`)
}

console.log(`The password you entered was: ${password}`);