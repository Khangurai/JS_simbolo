let result;
let roomType = "deluxe";

switch (roomType) {
  case "single":
    result = "$50 per night";
    break;
  case "double":
    result = "$80 per night";
    break;
  case "suite":
    result = "$150 per night";
    break;
  case "deluxe":
    result = "$200 per night";
    break;

  default:
    result = "Wrong input";
    break;
}

console.log(
  `Available Room Type(single,double,suite,deluxe)\n\nRoom Type: ${roomType}\Price : ${result}`
);
