// Generate a random number between 0 and 10
// let number = Math.random() * 10;
// let number = Math.floor(Math.random() * 100) + 1;

// Function to drop decimal places without rounding
// function dropDecimal(number) {
//     return Math.trunc(number); // Removes the decimal part (e.g., 4.9 → 4)
// }

// Demonstrating different Math functions
// console.log(Math.ceil(4.1));  // Outputs: 5 (Rounds UP to the nearest integer)
// console.log(Math.floor(4.1)); // Outputs: 4 (Rounds DOWN to the nearest integer)
// console.log(Math.round(4.6)); // Outputs: 5 (Rounds to the nearest integer)
// console.log(Math.pow(3, 4));  // Outputs: 81 (3^4 = 3 * 3 * 3 * 3)

// Display the generated random number
// console.log(number);

// Applying the truncation function (drops decimals)
// console.log(dropDecimal(number));

// Using toFixed(2) to format the number to 2 decimal places (returns a string)
// console.log(number.toFixed(2));

// Write a function that simulates rolling a six-sided die and returns the result.
function rollingDie() {
    return Math.floor(Math.random() * 6) + 1;
}


console.log(rollingDie()); 
console.log(rollingDie()); 
console.log(rollingDie()); 