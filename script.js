// add variables here

function checkout(choice) {
  document.querySelector("#checkout").classList.remove("hidden");
  document.querySelector("#checkout-img").src = `${choice}.jpg`; //look for other concatenation

  // add the conditional below

  document.querySelector("#selected-drink").innerText = drink;
  document.querySelector("#price").innerText = "$" + price;
}

function receipt() {
  document.querySelector("#checkout").classList.add("hidden");
  document.querySelector("#receipt").classList.remove("hidden");

  let quantity = document.querySelector("#quantity1").value;

  // add quantity and total calculation below!

  document.querySelector("#drink").innerText = drink;
  document.querySelector("#total").innerText = "$" + total.toFixed(2);
  document.querySelector("#quantity2").innerText = quantity;
  document.querySelector("#price2").innerText = "$" + price;
}

function restart() {
  document.querySelector("#receipt").classList.add("hidden");
  document.querySelector("#quantity1").value = "";
}
