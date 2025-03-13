let z = 4;
let c = 5;
let optr = "/";
let result = 0;

switch (optr) {
  case "+":
    result = z + c;
    break;

  case "-":
    result = z - c;
    break;

  case "*":
    result = z * c;
    break;

  case "/":
    result = z / c;
    break;

  default:
    result = "wrong optr";
    break;
}

console.log(result);
