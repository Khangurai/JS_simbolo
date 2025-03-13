// BMI = weight (kg) / height² (m²)

const readline = require("readline");

// Command line interface ကို initialize လုပ်
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateBMI(weight, height) {
  return weight / (height * height);
}

console.log(calculateBMI(60, 1.52).toFixed(2));
console.log(Math.pow(3, 4));

//built-in function
//.toFixed function=>decimal
//Math.pow function

rl.question("Input Weight: ", (weight) => {
  console.log(`weight : ${weight}Kg`);

  rl.question("Input Height: ", (height) => {
    console.log(`height : ${height}m`);

    rl.close();
  });
});


