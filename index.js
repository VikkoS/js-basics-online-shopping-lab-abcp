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
  let message = 'In your cart, you have, ';
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  } else {
    
      message+=`${Object.keys(cart[0])} at $${Object.values(cart[0])}`;
    if (cart.length === 1) {
      message+=` and ${Object.keys(cart[1])} at $${Object.values(cart[1])}`;
    } else {
      for (let i = 2; i< cart.length; i++) {
        message+=
      }
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
