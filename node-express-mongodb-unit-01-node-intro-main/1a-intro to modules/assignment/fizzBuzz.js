// Declare the fizzBuzz function here:
function fizzBuzz(nums) {
const fbArr = [];
    for (let i = 1; i <= nums; i++) {
        if (i % 3 == 0 && i % 5 == 0){
            fbArr.push('fizzbuzz');
        } else if (i % 3 == 0){
            fbArr.push('fizz');
        } else if (i % 5 == 0){
            fbArr.push('buzz');
        } else {
            fbArr.push(i);
        }
    }
    return fbArr;
}

console.log(fizzBuzz(15))


// Export the fizzBuzz function here:
module.exports = fizzBuzz;


// - If the count is divisible by 3, add `"fizz"` to the array instead of the number.
// - If the count is divisible by 5, add `"buzz"` to the array instead of the number.
// - If the count is divisible by 3 AND 5, add `"fizzbuzz"` to the array instead of the number.
// - For any other number, add it to the array.

// example:

// ```js
// fizzBuzz(15); // => [1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"]
// ```