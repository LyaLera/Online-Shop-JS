"use strict";

const tShirtsBtn = document.getElementById("tshirts-btn");
const socksBtn = document.getElementById("socks-btn");
const shortsBtn = document.getElementById("shorts-btn");
const checkoutBtn = document.getElementById("checkout-btn")
const ulList = document.querySelector("ul");
const totalPrice = document.querySelector("span");
const liTShirts = document.getElementById("li-tshirts");
const liSocsk = document.getElementById("li-socks");
const liShorts = document.getElementById("li-shorts");
let price = 0;
let tShirtsprice = 25;
let socksPrice = 5;
let shortsPrice = 50;

function getTotalPrice(productPrice) {
    price += productPrice;
};

function getAmountOfClicking(e) {
    e = e.currentTarget;
    e.clicks = (e.clicks || 0) + 1;
    return e.clicks;
};

tShirtsBtn.addEventListener("click", (e) => {
    liTShirts.innerHTML = `T-Shirts: x${getAmountOfClicking(e)}`;
    getTotalPrice(tShirtsprice);
    totalPrice.innerHTML = `${price}`;
    liTShirts.style.listStyle = "circle";
});

socksBtn.addEventListener("click", (e) => {
    liSocsk.innerHTML = `Socks: x${getAmountOfClicking(e)}`;
    getTotalPrice(socksPrice);
    totalPrice.innerHTML = `${price}`;
    liSocsk.style.listStyle = "circle";
});

shortsBtn.addEventListener("click", (e) => {
    liShorts.innerHTML = `Shorts: x${getAmountOfClicking(e)}`;
    getTotalPrice(shortsPrice);
    totalPrice.innerHTML = `${price}`;
    liShorts.style.listStyle = "circle";
});

checkoutBtn.addEventListener("click", () => {
    ulList.style.display = "block";
});

