const menuEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")


menuEmail.addEventListener("click", toggleDesktopMenu)

function toggleDesktopMenu(){
    //console.log("click")
    desktopMenu.classList.toggle("inactive")
    mobileMenu.classList.add("inactive")
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
    productDetail.classList.add("inactive")
}

/////////////////////////////////////////////////////////////////////////

const navShoppingCar = document.querySelector(".navbar-shopping-cart")
const productDetail = document.querySelector(".product-detail")

navShoppingCar.addEventListener("click", toggleProducDetail)

function toggleProducDetail(){
    productDetail.classList.toggle("inactive")
    desktopMenu.classList.add("inactive")
    mobileMenu.classList.add("inactive")
}

