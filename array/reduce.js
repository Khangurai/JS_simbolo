// const arr = [1, 2, 3, 4, 5, 6, 7];
// const reduced = arr.reduce((total, current) => total + current);
// console.log(reduced); //28
// console.log(arr);// [1, 2, 3, 4, 5, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
let total = arr.reduce((sum, num) => sum + num, 0);
console.log(total);

let products = [
  { id: 1, name: "book", category: "stationary", price: 2.5 },
  { id: 2, name: "glass", category: "kitchenware", price: 2.0 },
  { id: 3, name: "eraser", category: "stationary", price: 0.5 },
  { id: 4, name: "lipstick", category: "cosmetics", price: 1.5 },
];

let subtotal = products.reduce((total, product) => total + product.price, 0);
console.log(subtotal);
