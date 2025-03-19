// Write a function that checks if a number is positive, negative, or zero.

function checkNumber(num) {
  return num > 0
    ? `${num} is Positive`
    : num < 0
    ? `${num} is Negative`
    : `${num} is Zero`;
}

console.log(checkNumber(23));
console.log(checkNumber(60));
console.log(checkNumber(-124));
console.log(checkNumber(-5436));
console.log(checkNumber(0));
