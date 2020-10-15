// Add variables here
// These are used when the user is updating the cart
// You can declare a number of variables on the same line
// without initializing
let price, drink, currentChoice;

// Build cart object
// This is sort of like a menu where we describe the items available
// and the quantity that are being purchased by the customer
let cart = {
  latte: {
    image: "latte.jpg",
    price: 4.29,
    label: "Latte",
    quantity: 0
  },
  cappuccino: {
    image: "cappuccino.jpg",
    price: 4.79,
    label: "Cappuccino",
    quantity: 0
  },
  icedCoffee: {
    image: "iced-coffee.jpg",
    price: 3.79,
    label: "Iced Coffee",
    quantity: 0
  }
};

// Build a function that allows the customer to update the quantity
// of an item in the cart
function checkout(choice) {
  document.querySelector("#checkout").classList.remove("hidden");
  document.querySelector("#checkout-img").src = cart[choice].image;

  // Update variables based on choice
  currentChoice = choice;
  price = cart[choice].price;
  drink = cart[choice].label;
  quantity = cart[choice].quantity;

  document.querySelector("#selected-drink").innerText = drink;
  document.querySelector("#price").innerText = "$" + price;
  document.querySelector("#quantity1").value = quantity; // Need to inject the current quantity into the DOM
}

function updateCart() {
  document.querySelector("#checkout").classList.add("hidden");
  let quantity = parseInt(document.querySelector("#quantity1").value);
  cart[currentChoice].quantity = quantity;
  console.log(cart);
}

function receipt() {
  document.querySelector("#checkout").classList.add("hidden");
  document.querySelector("#receipt").classList.remove("hidden");

  let quantity = parseInt(document.querySelector("#quantity1").value);

  // add total calculation below!
  let total = quantity * price;

  document.querySelector("#drink").innerText = drink;
  document.querySelector("#total").innerText = "$" + total.toFixed(2);
  document.querySelector("#quantity2").innerText = quantity;
  document.querySelector("#price2").innerText = "$" + price;
}

function restart() {
  document.querySelector("#receipt").classList.add("hidden");
  document.querySelector("#quantity1").value = "";
}
