import { applyTheme, toggleTheme } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
    applyTheme(); // Apply preferred theme on page load

    const themeToggleButton = document.querySelector(".theme-toggle");
    if (themeToggleButton) {
        themeToggleButton.addEventListener("click", toggleTheme);
    }
});