const toggle = document.getElementById("toggle");
const desktopNav = document.querySelector("#desktopNav");
const mobileNav = document.querySelector('#mobileNav');
const closeButton = document.querySelector("#closeButton")



toggle.addEventListener('click', () => {
    mobileNav.classList.remove("hidden")
});

closeButton.addEventListener('click', () => {
    mobileNav.classList.add("hidden")

})