let numbers = [5, 3, 6, 7, 4];

function smallestLargestNum(arr) {
  let smallest = arr[0];
  let largest = arr[0];

  for (let index = 1; index < arr.length; index++) {
    if (smallest > arr[index]) {
      smallest = arr[index];
    }

    if (largest < arr[index]) {
      largest = arr[index];
    }
  }

  return `${smallest} is the smallest number.\n${largest} is the largest number.`;
}

function arraySum(arr) {
  let total = 0;
  for (let index = 0; index < arr.length; index++) {
    total += arr[index];
  }
  return `Sum of the arrray:${total}`;
}

function arrayAvg(arr) {
  avg = arraySum(arr) / arr.length;
  result = `Avg of the arrray:${avg}`;
  return result;
}

console.log(smallestLargestNum(numbers));
console.log(arraySum(numbers));
console.log(arrayAvg(numbers));
