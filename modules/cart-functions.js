"use strict";
import { shopItemsData } from "../index.js"

let shoppingCartArray = [];

function addItem(item) {
    shoppingCartArray.push(item); 
}

function addItemToCart(event) {
    let choosenItem = shopItemsData.find((item) => {
        return item.name == event.target.id;
    })
    addItem(choosenItem);
    countTotalPrice();
    let liItem = document.createElement("li");
    liItem.innerHTML = choosenItem.name;
    document.getElementById("shopping-cart").append(liItem);    
}

function countTotalPrice() {
    let total = 0;
    for(let i = 0; i < shoppingCartArray.length; i++) {
        total += shoppingCartArray[i].price;
    }
    document.getElementById("cart-total-price").innerHTML = total;
}

export { addItemToCart }