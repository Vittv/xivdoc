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

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
    const menu = document.getElementById("hb-dropdown");
    const hamburger = document.querySelector(".hamburger");

    // If the click is outside the menu and hamburger
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("active");
    }
});

// Handles back to top function
enableSmoothScroll("backToTop");


