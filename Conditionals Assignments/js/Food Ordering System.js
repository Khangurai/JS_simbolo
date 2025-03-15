let result;
let orderNum = 1;

switch (orderNum) {
  case 1:
    result = "Burger";
    break;
  case 2:
    result = "Pizza";
    break;
  case 3:
    result = "Pasta";
    break;
  case 4:
    result = "Salad";
    break;

  default:
    result = "invalid food item";
    break;
}

console.log(
  `Press Number:1,2,3,4\n\nOrder Number: ${orderNum}\nFood Item : ${result}`
);
