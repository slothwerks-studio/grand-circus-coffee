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
  document.querySelector("#price").innerText = "$" + price.toFixed(2); // toFixed(x) turns a number into a string with x decimal places 
  document.querySelector("#quantity1").value = quantity; // Need to inject the current quantity into the DOM
}

function updateCart() {
  document.querySelector("#checkout").classList.add("hidden");
  let quantity = parseInt(document.querySelector("#quantity1").value);
  cart[currentChoice].quantity = quantity;
  console.log(cart);
}

function receipt() {
  document.querySelector("#receipt").classList.remove("hidden");

  // Determine subtotals
  let latteTotal = cart.latte.price * cart.latte.quantity;
  let cappuccinoTotal = cart.cappuccino.price * cart.cappuccino.quantity;
  let icedCoffeeTotal = cart.icedCoffee.price * cart.icedCoffee.quantity;
  let grandTotal = latteTotal + cappuccinoTotal + icedCoffeeTotal;

  let cartItems = document.querySelector("#cartItems");

  if (cart.latte.quantity > 0) {
    cartItems.innerHTML = `<div>
      <h3>Latte</h3>
      <p class="breakdown">
        $${cart.latte.price.toFixed(2)} x ${cart.latte.quantity} = $${latteTotal.toFixed(2)}
      </p>
    </div>`;
  }

  if (cart.cappuccino.quantity > 0) {
    cartItems.innerHTML = cartItems.innerHTML + `<div>
      <h3>Cappuccino</h3>
      <p class="breakdown">
        $${cart.cappuccino.price.toFixed(2)} x ${cart.cappuccino.quantity} = $${cappuccinoTotal.toFixed(2)}
      </p>
    </div>`;
  }

  if (cart.icedCoffee.quantity > 0) {
    cartItems.innerHTML = cartItems.innerHTML + `<div>
      <h3>Iced Coffee</h3>
      <p class="breakdown">
        $${cart.icedCoffee.price.toFixed(2)} x ${cart.icedCoffee.quantity} = $${icedCoffeeTotal.toFixed(2)}
      </p>
    </div>`;
  }

  document.querySelector("#grandTotal").innerText = "$" + grandTotal.toFixed(2);
}

function restart() {
  document.querySelector("#receipt").classList.add("hidden");
  // Reset quantities
  cart.latte.quantity = 0;
  cart.cappuccino.quantity = 0;
  cart.icedCoffee.quantity = 0;
  // Reset cart in DOM
  document.querySelector("#cartItems").innerHTML = `<p>
    There are no items in the cart.
  </p>`;
}
