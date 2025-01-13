// Declare the fibonacci function here:
function fibonacci(num) {
    const fibArr = [];
    let save = 0;
    let math = 1;
    for (i = 0; i < num; i++){
        fibArr.push(save)
        let total = save + math;
        save = math
        math = total
    }
    return fibArr;
}
console.log(fibonacci(15));

// Export the fibonacci function here:
module.exports = fibonacci;