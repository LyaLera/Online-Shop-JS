"use strict";

let shop = document.getElementById("shop");

let shopItemsData = [
    {
  id: 1,
  name: "T-Shirts",
  price: 25,
  desc: "A nice cotton T-Shirt",
  img: "img/t-shirts.jpg"

}, 
{
    id: 2,
  name: "Socks",
  price: 5,
  desc: "Socks for every day",
  img: "img/socks.jpg"
}, 
{
    id: 3,
  name: "Shorts",
  price: 50,
  desc: "A pair of demin shorts",
  img: "img/shorts.jpg"
}

];

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let {id, name, price, desc, img} = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
        <div id=product-id-${id} class="item">
        <img src=${img} alt="socks" width="248">
        <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h4>${price} euro</h4>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                    <div id=${id} class="quantity">${search.item === undefined ? 0: search.item}</div>
                    <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>
    `;
    }).join(""));
};

generateShop();

let increment = (id) => {
    let search = basket.find((x) => x.id === id);
    if(search === undefined) {
        basket.push({
            id: id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
    update(id);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
    let search = basket.find((x) => x.id === id);
    if(search === undefined) return;
    else if(search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(id);
    basket = basket.filter((x) => x.item !== 0);
    generateCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x)=> x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    totalAmount();
};

let calculation = () => {
    let cartAmonut = document.getElementById("cart-amount");
    cartAmonut.innerHTML = basket.map((x) => x.item).reduce((x,y) => x + y, 0);
};

calculation();


// Shopping cart
let shoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");

let generateCartItems = () => {
    if(basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map((x) => {
            let {id, item} = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            label.innerHTML = "";
            return `
            <div class = "cart-item">
                <div class="details">
                    <div class="title-price-x">
                        <h4 class="title-price"> 
                            <p>${search.name}</p>
                            <p class="cart-item-price">€ ${search.price}</p>
                        </h4>
                        <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                    </div>
                    <div class="buttons cart-buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        <div id=${id} class="quantity">${item}</div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                    <h3>€ ${item * search.price}</h3>
                </div>
            </div>
            `;
        }).join(""));
    } else {
        shoppingCart.innerHTML = "";
        label.innerHTML = "Cart is Empty";
    }
};

generateCartItems();

let removeItem = (id) => {
    basket = basket.filter((x) => x.id !== id);
    generateShop();
    generateCartItems();
    totalAmount();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
};

let totalPrice = document.getElementById("total-price");

let totalAmount = () => {
    if(basket.length !== 0) {
        let amount = basket.map((x) => {
            let {item, id} = x;
            let search = shopItemsData.find((y) => y.id === id) || [];
            return item * search.price;
        }).reduce((x,y) => x + y, 0);
        totalPrice.innerHTML = amount;
    } else totalPrice.innerHTML = 0;
    
};

totalAmount();

let checkoutButton = document.getElementById("checkout-btn");
checkoutButton.addEventListener("click", () => {
    label.style.display = "block";
    shoppingCart.style.display = "grid";
});