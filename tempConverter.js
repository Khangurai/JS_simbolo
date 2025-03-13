// °C = (°F - 32) * 5/9
//°F = (°C × 9/5) + 32

function FtoC(F) {
  let C = ((F - 32) * 5) / 9;
  return C;
}

let fahrenheit = 60; // Store the Fahrenheit value separately
let celsius = FtoC(fahrenheit);
console.log(
  `Fahrenheit ${fahrenheit} degree is Celsius ${celsius.toFixed(2)} degree`
);
