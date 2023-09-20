"use strict";

let deleteItemBtn = document.getElementsByClassName("btn-danger");
for(let i = 0; i < deleteItemBtn.length; i++) {
    let button = deleteItemBtn[i];
    button.addEventListener("click", removeCartItem);
};

let quantityInputs = document.getElementsByClassName("cart-quantity-input");
for(let i = 0; i < quantityInputs.length; i++) {
    let input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
};

let addToCartButtons = document.getElementsByClassName("shop-item-button");
for(let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
};

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
};

function quantityChanged(event) {
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
};

function addToCartClicked(event) {
    let button = event.target;
    let shopItem = button.parentElement.parentElement;
    let title = shopItem.getElementsByClassName("card-title")[0].innerText;
    let price = shopItem.getElementsByClassName("price")[0].innerText;
    addItemToCart(title, price);
    updateCartTotal();
};

function addItemToCart(title, price) {
    let cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    let cartItems = document.getElementsByClassName("cart-items")[0];
    let cartItemNames = document.getElementsByClassName("cart-item-title");
    for(let i = 0; i < cartItemNames.length; i++) {
        if(cartItemNames[i].innerText == title) {
            alert("This item is already added to the cart");
            return;
        }
    };
    let cartRowContents = `
    <div class="cart-item cart-column">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">Remove</button>
    </div>
    `;
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName("btn-danger")[0].addEventListener("click", removeCartItem);
    cartRow.getElementsByClassName("cart-quantity-input")[0].addEventListener("change", quantityChanged);
};

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName("cart-items")[0];
    let cartRows = cartItemContainer.getElementsByClassName("cart-row");
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        let cartRow = cartRows[i];
        let priceElement = cartRow.getElementsByClassName("cart-price")[0];
        let quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
        let price = priceElement.innerHTML.replace("€", "");
        let quantity = quantityElement.value;
        total = total + (price * quantity);
        console.log(price*quantity);
    }
    document.getElementsByClassName("cart-total-price")[0].innerHTML = total;
};

updateCartTotal();

let checkoutButton = document.getElementById("checkout-btn");
checkoutButton.addEventListener("click", () => {
    let cartItemContainer = document.getElementsByClassName("cart-items")[0];
    cartItemContainer.style.display = "grid";
});


