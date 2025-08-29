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
let quantity = 1;
let price = parseFloat(product.price.replace("$", ""))

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
        <h4 class="quantity-value">${quantity}</h4>
        <a href="#" class="quantity-btn plus">
            <i class="fa-solid fa-plus"></i>
        </a>
    </div>
    `
    cartList.appendChild(cartItem);


    // handle item increment and decrement
    const plusBtn = document.querySelector(".plus")
    const minusBtn = document.querySelector(".minus")
    const quantityValue = cartItem.querySelector(".quantity-value");
    const itemTotal = cartItem.querySelector(".item-total");

    plusBtn.addEventListener("click", (e) => {
        e.preventDefault()

        quantity++;
        quantityValue.textContent = quantity;
        itemTotal.textContent = `$${(price * quantity).toFixed(2)}`
    })
    minusBtn.addEventListener("click", (e) => {
        e.preventDefault()

        if (quantity > 1) {

            quantity--;
            quantityValue.textContent = quantity;
            itemTotal.textContent = `$${(price * quantity).toFixed(2)}`
        }
        else {
            cartItem.cardList.add("slide-out")
            setTimeout(() => {
                cartItem.remove;
                cartProduct = cartProduct.filter(item => item.id !== product.id)
            }, 300);
        }
    })
}
