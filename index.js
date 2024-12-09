document.addEventListener("DOMContentLoaded", () => {
    // NAVBAR
    const buttonNav = document.querySelector("nav button")
    const mobileNav = document.querySelector(".mobileNav")
    const mobileNavButton = document.querySelector(".mobileNav button")

    buttonNav.addEventListener("click", () => {
        mobileNav.style.left = "0%"
    })
    mobileNavButton.addEventListener("click", () => {
        mobileNav.style.left = "-150%"
    })
})