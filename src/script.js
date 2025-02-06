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

// Handles back to top function
enableSmoothScroll("backToTop");

