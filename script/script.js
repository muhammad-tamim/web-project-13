const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");
const cardList = document.querySelector(".card-list");
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".cart-total");
const cartValue = document.querySelector(".cart-value");

cartIcon.addEventListener("click", () => cartTab.classList.add("cart-tab-active"));
closeBtn.addEventListener("click", () => cartTab.classList.remove("cart-tab-active"));

let productList = [];
let cartProduct = [];

const updateTotals = () => {


    let totalPrice = 0;
    let totalQuantity = 0;

    document.querySelectorAll(".item").forEach(item => {

        const quantity = parseInt(item.querySelector(".quantity-value").textContent)

        const price = parseFloat(item.querySelector(".item-total").textContent.replace("$", ""));

        totalPrice += price;
        totalQuantity += quantity;
    })
    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    cartValue.textContent = totalQuantity;

}

const showCards = () => {
    productList.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("order-card");
        div.innerHTML = `
        <div class="card-image">
            <img src=${product.image} alt="">
        </div>
        <h4>${product.name}</h4>
        <h4 class="price">${product.price}</h4>
        <a class="btn card-btn" href="#">Add To Cart</a>
        `
        cardList.appendChild(div);

        const cardBtn = div.querySelector(".card-btn");
        cardBtn.addEventListener("click", (e) => {
            e.preventDefault();
            addToCart(product)
        })
    })
}

const addToCart = (product) => {

    const existingProduct = cartProduct.find(item => item.id === product.id);

    if (existingProduct) {
        alert("Item already in your cart");
        return;
    }
    cartProduct.push(product);
    let quantity = 1;
    let price = parseFloat(product.price.replace("$", ""));

    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
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
                `;
    cartList.appendChild(div);
    updateTotals();

    const plusBtn = div.querySelector(".plus");
    const minusBtn = div.querySelector(".minus");

    const quantityValue = div.querySelector(".quantity-value");
    const itemTotal = document.querySelector(".item-total");

    plusBtn.addEventListener("click", (e) => {
        e.preventDefault()
        quantity++;

        quantityValue.textContent = quantity;
        itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
        updateTotals()
    })
    minusBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
            itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
            updateTotals()
        }
        else {
            div.classList.add("slide-out");
            setTimeout(() => {
                div.remove();
                cartProduct = cartProduct.filter(item => item.id !== product.id);
                updateTotals()
            }, 300);
        }
    })
}

const initApp = () => {
    fetch("../assets/products.json")
        .then(res => res.json())
        .then(data => {
            productList = data;
            showCards();
        })
}

initApp();