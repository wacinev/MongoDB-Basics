// Declare the ageChecker function here:
function ageChecker(age) {

    if (age < 18){
         'you are a child'
    } else if (age < 21) {
         'Military-Age'
    } else  {
         'Alcohol-Age'
    }
}
console.log(ageChecker(19));
// Export the ageChecker function here:
module.exports = ageChecker;