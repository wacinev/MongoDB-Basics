/*
    1. Place a console log to test
*/

console.log('Modules, amirite?');
/*
    2. Use the require() function to grab sayName from the modules
*/

const sayName = require('./modules/sayName');

/*
    3. Test the module function sayName
*/

sayName('Colin');

/*
    4. Use the require() function to grab { sayHello, sayGoodBye } from the modules
*/

const {sayHello, sayGoodBye} = require('./modules/greetings');
// const imports = require('./modules/greetings');
// const {sayHello, sayGoodBye} = imports;

// const {sayHello} = imports; //const sayHello = imports.sayHello; 
// const {sayGoodBye} = imports; //const sayGoodBye = imports.sayGoodBye;


/*
    5. Test the module functions sayHello and sayGoodBye
*/

sayHello('my little friend');
sayGoodBye('browser javascript for a while');