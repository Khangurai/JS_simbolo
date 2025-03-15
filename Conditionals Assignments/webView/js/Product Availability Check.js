// function ProductCheck(product_stock, quantity) {
//   let stock = product_stock - quantity;
//   let item = stock < 0 ? `Available Stock: 0.\n` : `Available Stock: ${stock}.\n`;
//   console.log(item);
// }

// ProductCheck(10, 3);
// ProductCheck(10, 111);

function checkAvailability(product_stock, quantity) {
  if (quantity <= product_stock) {
    console.log(`Order can be fulfilled. ${quantity} units will be added to your cart.`);
  } else {
    console.log(`Insufficient stock. Only ${product_stock} units available.`);
  }
}

checkAvailability(10, 3);
checkAvailability(10, 111);