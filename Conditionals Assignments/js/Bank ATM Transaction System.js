let result;
let option = "withdraw";

switch (option) {
  case "withdraw":
    result = "Please enter the amount to withdraw";
    break;
  case "deposit":
    result = "Please insert cash or check";
    break;
  case "balance":
    result = "Your balance is being retrieved";
    break;

  default:
    result = "Invalid Option";
    break;
}

console.log(
  `Choose Option:("withdraw," "deposit," or "balance").\n\nOption: ${option}\nMessage : ${result}`
);
