"use strict";

import { addItemToCart } from "./modules/cart-functions.js"

let shopItemsData = [
    {
  name: "T-Shirts",
  price: 25,
  desc: "A nice cotton T-Shirt",
  img: "img/t-shirts.jpg"

}, 
{
  name: "Socks",
  price: 5,
  desc: "Socks for every day",
  img: "img/socks.jpg"
}, 
{
  name: "Shorts",
  price: 50,
  desc: "A pair of demin shorts",
  img: "img/shorts.jpg"
}
];

shopItemsData.forEach((item) => {
    let itemDiv = document.createElement("div");
    itemDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${item.img}" class="card-img-top" alt="T-shirts">
        <div class="card-body"> 
        <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.desc}</p>
      <p class="card-text price">${item.price}</p>
      <button type="button" class="btn btn-primary shop-item-button" id="${item.name}">Add to cart</button>
    </div>
    `;
    document.getElementById("cards").appendChild(itemDiv);
});

const addToCartButtons = document.querySelectorAll(".shop-item-button");
const checkoutButton = document.getElementById("checkout-btn");


addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
    addItemToCart(event)
    console.log("Something")});
});

checkoutButton.addEventListener("click", () => {
    document.getElementById("shopping-cart").style.display = "block";
});

export { shopItemsData }












