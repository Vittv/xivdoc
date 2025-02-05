import { applyTheme, toggleTheme } from "./theme.js";
import { toggleDropdown } from "./dropdown.js";

document.addEventListener("DOMContentLoaded", () => {
    applyTheme(); // Apply preferred theme on page load

    const themeToggleButton = document.querySelector(".theme-toggle");
    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", toggleTheme);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".header-container");
    headers.forEach(header => {
        header.addEventListener("click", toggleDropdown); // Attach toggleDropdown function to each header
    });
});

