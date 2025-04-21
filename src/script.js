import { applyTheme, toggleTheme } from "./theme.js";
import { toggleDropdown } from "./dropdown.js";
import { enableSmoothScroll } from "./navigation.js";

// Handles themes for the page
document.addEventListener("DOMContentLoaded", () => {
    applyTheme(); // Apply preferred theme on page load

    const themeToggleButton = document.querySelector(".theme-toggle");
    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", toggleTheme);
    }
});

// Handles dropdowns for the page
document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".header-container");
    headers.forEach(header => {
        header.addEventListener("click", toggleDropdown); // Attach toggleDropdown function to each header
    });
});

// Handle hamburger menu
window.toggleMenu = function () {
    const menu = document.getElementById("hb-dropdown");
    if (menu) {
        menu.classList.toggle("active");
    }
}

document.addEventListener("click", function(event) {
    const menu = document.getElementById("hb-dropdown");
    const hamburger = document.querySelector(".hamburger");

    if (menu && hamburger && !menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".fight-banner");
    if (banner) {
        const imageName = banner.dataset.banner;
        banner.style.backgroundImage = `url(../../assets/banner/${imageName})`;
    }
});
// Handles back to top function
enableSmoothScroll("backToTop");


