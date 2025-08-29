const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const cartList = document.querySelector(".card-list");

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
        <a class="btn" href="#">Add To Cart</a>
        `

        cartList.appendChild(div);
    })
}

/*
OR
const showCards = () => {
    productList.forEach((product) => {
        cartList.innerHTML += `
            <div class="order-card">
                        <div class="card-image">
                            <img src=${product.image} alt="">
                        </div>
                        <h4>${product.name}</h4>
                        <h4 class="price">${product.price}</h4>
                        <a class="btn" href="#">Add To Cart</a>
                    </div>
        `
    })
}

*/