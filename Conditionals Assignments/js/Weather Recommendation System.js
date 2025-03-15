let result;
let weatherStatus = "froggy";

switch (weatherStatus) {
  case "sunny":
    result = "Wear sunglasses and light clothes";
    break;
  case "rainy":
    result = "Take an umbrella and wear a raincoat";
    break;
  case "cold":
    result = "Wear a jacket and warm clothes";
    break;
  case "snowy":
    result = "Wear heavy winter clothing and boots";
    break;
  case "windy":
    result = "Wear a windbreaker";
    break;

  default:
    result = "Unknown weather condition";
    break;
}

console.log(`Weather Status(sunny,rainy,coldmsnowy,windy)\n\nCurrent Weather Status: ${weatherStatus}\nRecommendation : ${result}`);
