//function parameter
//function call

let counter = 3;
console.log(counter++);

function showName(username = "Jen") {
  console.log(`Hi Projects ${username}!!`);
}

showName();

console.log("bye...");

showName("harry");

//return function
function add(x, y) {
  return result = x + y;
  //return အောက်မှာ ဘာမှရေးလည်းမထူးဘူး
}

function double(x) {
  return result = x * 2;
}

let answer = add(14, 5);
console.log("answer= " + answer);

let doubleNumber = double(14);
console.log("doubleNumber= " + doubleNumber);
