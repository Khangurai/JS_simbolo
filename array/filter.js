//filter method ဆိုရင် conditionထည့်လို့ထည့် ရမယ်

// const arr = [1, 2, 3, 4, 5, 6];
// const even_elements = arr.filter((element) => element % 2 == 0);
// console.log(even_elements); //[ 2, 4, 6 ]
// console.log(arr); //[ 1, 2, 3, 4, 5, 6 ]

let products = [
  { id: 1, name: "book", category: "stationary", price: 2.5 },
  { id: 2, name: "glass", category: "kitchenware", price: 2.0 },
  { id: 3, name: "eraser", category: "stationary", price: 0.5 },
  { id: 4, name: "lipstick", category: "cosmetics", price: 1.5 },
];

let stationaryProducts = products.filter(
  (product) => product.category === "stationary"
);
console.log(stationaryProducts);

let productWithPriceMoreThan1_5 = products.filter((product) => product.price > 1.5);
console.log(productWithPriceMoreThan1_5);
