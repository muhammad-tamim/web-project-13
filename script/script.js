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


