// add variables here
let price;
let drink;

function checkout(choice) {
  document.querySelector("#checkout").classList.remove("hidden");
  document.querySelector("#checkout-img").src = `${choice}.jpg`; //look for other concatenation

  // add the conditional below
  if (choice === "latte") {
    price = 4.29;
    drink = "Latte";
  } else if (choice === "cappuccino") {
    price = 4.79;
    drink = "Cappuccino";
  } else if (choice === "iced-coffee") {
    price = 3.79;
    drink = "Iced Coffee";
  }

  document.querySelector("#selected-drink").innerText = drink;
  document.querySelector("#price").innerText = "$" + price;
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
