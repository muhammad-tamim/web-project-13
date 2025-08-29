const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const cardList = document.querySelector(".card-list");
const cartList = document.querySelector(".cart-list");


// open cart tab
cartIcon.addEventListener("click", () => {
    cartTab.classList.add("cart-tab-active");

})

// close cart tab
closeBtn.addEventListener("click", () => {
    cartTab.classList.remove("cart-tab-active")
})


// menu cards

let productList = [];

const fetchProduct = () => {
    fetch("../assets/products.json")
        .then(res => res.json())
        .then(data => {
            productList = data
            showCards()
        });
}

fetchProduct()

const showCards = () => {
    productList.forEach((product) => {
        const div = document.createElement("div");
        div.classList.add("order-card");

        div.innerHTML = `
        <div class="card-image">
            <img src=${product.image} alt="">
        </div>
        <h4>${product.name}</h4>
        <h4 class="price">${product.price}</h4>
        <a class="btn cart-btn" href="#">Add To Cart</a>
        `
        cardList.appendChild(div);

        const cartBtn = div.querySelector(".cart-btn");
        cartBtn.addEventListener("click", (e) => {
            e.preventDefault()
            addToCart(product)
        })
    })
}

/*
OR
const showCards = () => {
    productList.forEach((product) => {
        cardList.innerHTML += `
            <div class="order-card">
                        <div class="card-image">
                            <img src=${product.image} alt="">
                        </div>
                        <h4>${product.name}</h4>
                        <h4 class="price">${product.price}</h4>
                        <a class="btn menu-btn" href="#">Add To Cart</a>
                    </div>
        `
    })
}

*/

// cart tab

let cartProduct = []

const addToCart = (product) => {

    const existingProduct = cartProduct.find((item) => item.id === product.id);

    if (existingProduct) {
        alert("Item already in you'r cart");
        return;
    }

    cartProduct.push(product)

    const cartItem = document.createElement("div");
    cartItem.classList.add("item");

    cartItem.innerHTML = `
    <div class="item-image">
        <img src=${product.image} alt="">
    </div>
        
    <div class="detail">
        <h4>${product.name}</h4>
        <h4 class="item-total">${product.price}</h4>
    </div>
    
    <div class="flex">
        <a href="#" class="quantity-btn minus">
            <i class="fa-solid fa-minus"></i>
        </a>
        <h4 class="quantity-value">1</h4>
        <a href="#" class="quantity-btn plus">
            <i class="fa-solid fa-plus"></i>
        </a>
    </div>
    `
    cartList.appendChild(cartItem);

}
