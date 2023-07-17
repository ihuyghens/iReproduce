const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})


// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})


const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})

// Change opacity while scrolling the page
window.addEventListener("scroll", function () {
    let movie = document.getElementById("section-movie");
    let message = document.getElementById("vision-pro-text");
    let hardware = document.getElementById('hardware');
    let hardwareHuman = document.getElementById('hardware-human');
    let scrollTop = document.documentElement.scrollTop;

    // movie.style.opacity = 1 - scrollTop / 500;
    message.style.opacity = 0 + scrollTop / 700;
    movie.style.transform = "matrix(" + 1 + "," + 0 + "," + 0 + "," + 1 + "," + 0 + ", -" + scrollTop + ")";
    
    if(message.style.opacity >= 0.5) {
        movie.classList.add('hidden');
        // message.style.opacity = 1;
        // message.style.transform = "matrix(" + 1 + "," + 0 + "," + 0 + "," + 1 + "," + 0 + ", -" + scrollTop + ")";
        if(message.style.opacity >= 1.1) {
            hardware.style.opacity = (scrollTop - 2) / 700;
            message.classList.add('hidden');
        } else {
            message.classList.remove('hidden');
        }
    } else {
        movie.classList.remove('hidden')
    }
});