"use strict";

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

// JSON.parse(localStorage.getItem("data")) || 
let shoppingCartArray = [];

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


function addItem(item) {
    shoppingCartArray.push(item); 
};

function addItemToCart(event) {
    let choosenItem = shopItemsData.find((item) => {
        return item.name == event.target.id;
    })
    addItem(choosenItem);
    countTotalPrice();
    let liItem = document.createElement("li");
    liItem.innerHTML = choosenItem.name;
    document.getElementById("shopping-cart").append(liItem);    
    //localStorage.setItem("data", JSON.stringify(shoppingCartArray));
};

function countTotalPrice() {
    let total = 0;
    for(let i = 0; i < shoppingCartArray.length; i++) {
        total += shoppingCartArray[i].price;
    }
    document.getElementById("cart-total-price").innerHTML = total;
};

const addToCartButtons = document.querySelectorAll(".shop-item-button");
addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => addItemToCart(event));
});

const checkoutButton = document.getElementById("checkout-btn");
checkoutButton.addEventListener("click", () => {
    document.getElementById("shopping-cart").style.display = "block";
});




