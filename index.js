var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let price = Math.floor(Math.random()*100);
  let newItemObj = {[item]: price};
  cart.push(newItemObj);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  let message = '';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    for (let i = 0; i < cart.length; i++) {
      
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
