//!FILTER FUNCTIONALITY
let buttons = document.querySelectorAll("#products_page2>button")
let cards = document.querySelectorAll(".shoe_container")
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let btnName = btn.getAttribute("data-name")
        buttons.forEach((btn) => btn.classList.remove("active"))
        btn.classList.add("active")
        cards.forEach((card) => {
            let cardName = card.getAttribute("data-name")
            if (btnName == "all" || btnName == cardName) {
                card.style.display = "flex"
            } else {
                card.style.display = "none"
            }
        })
    })
})

//!SIDEBAR FUNCTIONALITY
let cart = document.getElementById("cart")
let sidebar = document.getElementById("sidebar")
cart.addEventListener("click", () => {
    sidebar.style.right = "0px"
})

let closeBtn = document.getElementById("close_btn")
closeBtn.addEventListener("click", () => {
    sidebar.style.right = "-400px"
})

//!CART FUNCTIONALITY
let finalCart = []
let addToCartBtns = document.querySelectorAll(".addToCart")
addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.style.background = "green"
        let parent = btn.closest(".shoe_container")
        let image = parent.querySelector("img").src
        let title = parent.querySelector("h2").innerText
        let price = Number(parent.querySelector(".price_size1>p").innerText.replace("₹", ""))
        let size = parent.querySelector("select").value

        if (size == "Select Size") {
            alert("Please select the size to add into the cart")
            return
        }

        let item = { title, image, price, size }
        finalCart.push(item)
        updateCartUI()
    })
})

//!UPADTING ON UI FUNCTIONALITY
let cart_quantity = document.getElementById("cart_quantity")
let insideCart = document.getElementById("sidebar2")
let subTotal = document.querySelector("#sidebar3>h2>span")
let buyNowBtn = document.querySelector("#sidebar3>button")

function updateCartUI() {
    insideCart.innerHTML = ""
    let totalPrice = 0;
    finalCart.forEach((item) => {
        totalPrice += item.price;
        let div = document.createElement("div")
        div.classList.add("item_container")
        div.innerHTML = `
        <aside class=item_container1>
        <img src=${item.image}>
        </aside>
       <aside class=item_container2>
        <h2>${item.title}</h2>
        <p>Size: ${item.size}</p>
        <p>₹${item.price.toFixed(2)}</p>
       </aside>
    `
        insideCart.append(div)
    })
    subTotal.innerText = totalPrice.toFixed(2);
    cart_quantity.innerText = finalCart.length
}
//!BUY NOW FUNCTIONALITY
buyNowBtn.addEventListener("click", () => {
    alert("Thankyou for shopping 😻")
})
