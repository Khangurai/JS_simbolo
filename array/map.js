const arr = [1, 2, 3, 4, 5, 6];

let double = (x) => x * 2;

// const doubleArr = arr.map(double);
const doubleArr = arr.map((x) => x * 2);

console.log(arr);
console.log(doubleArr);

//parameter => function
//ဘာလုပ်လဲ => map function က arrayတစ်ခုချင်းစီထုတ်ပေးတယ်
//return 

let products = [
  { id: 1, name: "book", category: "stationary", price: 2.5 },
  { id: 2, name: "glass", category: "kitchenware", price: 2.0 },
  { id: 3, name: "eraser", category: "stationary", price: 0.5 },
  { id: 4, name: "lipstick", category: "cosmetics", price: 1.5 },
];


function getName(product) {
    return product.name;
}

function getCategory(product) {
    return product.category;
}

console.log(products);

let productNames = products.map(getName);
console.log(productNames);

let productCategories = products.map(getCategory);
console.log(productCategories);


