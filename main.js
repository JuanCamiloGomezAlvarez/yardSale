///////////////////////////////////////////////////////////////////////////
const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")


menuEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu(){
    //console.log("click")
    desktopMenu.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
    shoppingCartContainer.classList.add("inactive")
    productDetail.classList.add("inactive")
}
/////////////////////////////////////////////////////////////////////////

const menuBurger = document.querySelector(".menu")
const mobileMenu = document.querySelector(".mobile-menu")
//const mobileMenuEmail = document.querySelector(".email")

menuBurger.addEventListener("click", toggleMobileMenu)
//mobileMenuEmail.addEventListener("click", toggleDesktopMenu)

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
    shoppingCartContainer.classList.add("inactive")
    productDetail.classList.add("inactive")
}

/////////////////////////////////////////////////////////////////////////

const navShoppingCar = document.querySelector(".navbar-shopping-cart")
const shoppingCartContainer = document.querySelector("#shoppingCartContainer")

navShoppingCar.addEventListener("click", toggleProducDetail)

function toggleProducDetail(){
    shoppingCartContainer.classList.toggle("inactive")
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    productDetail.classList.add("inactive")
}

/////////////////////////////////////////////////////////////////////////
//Creando cards de productos 

const productList = []

productList.push({
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Bici-negra-clasica",
    price: 100,
})

productList.push({
    img:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Bici-negra-deportiva",
    price: 150,
})

productList.push({
    img:"https://images.pexels.com/photos/2130611/pexels-photo-2130611.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Bici-azul-clasica",
    price: 120,
})

productList.push({
    img:"https://images.pexels.com/photos/1595483/pexels-photo-1595483.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    name: "Bici-blanca-clasica",
    price: 120,
})

const cardConstainer = document.querySelector(".cards-container")

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div")
        productCard.classList.add("product-card")
    
        const productImg = document.createElement("img")
        productImg.classList.add("product-img")
        productImg.setAttribute("src", product.img)
        productImg.addEventListener("click", selectProductDetail)
    
        const productInfo = document.createElement("div")
        productInfo.classList.add("product-info")
    
        const productInfoDiv = document.createElement("div")
        
        const productPrice = document.createElement("p")
        productPrice.innerText = "$" + product.price
        const productName = document.createElement("p")
        productName.innerText =  product.name
    
        const productFigure = document.createElement("figure")
        const productImgCart = document.createElement("img")
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
    
        productFigure.appendChild(productImgCart)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productFigure)
        productInfoDiv.append(productPrice, productName)
        productCard.appendChild(productImg)
        productCard.appendChild(productInfo)
        cardConstainer.appendChild(productCard)
    }
    
}
renderProducts(productList)

///////////////////////////////////////////////////////////////////////

const productDetail = document.querySelector("#productDetail")

function selectProductDetail(){
    productDetail.classList.toggle("inactive")
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
    shoppingCartContainer.classList.add("inactive")
}

const productDetailClosed = document.querySelector(".product-detail-close")
productDetailClosed.addEventListener("click", closeProductDetail)
function closeProductDetail(){
    productDetail.classList.add("inactive")
}