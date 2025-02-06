export function applyTheme() {
    // Get saved theme from localStorage or detect system preference
    const theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
    // Update icon with theme
    updateThemeIcon(theme);
}

export function toggleTheme() {
    const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    // Update icon with theme
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const iconElement = document.getElementById("theme-icon");
    if (iconElement) {
        iconElement.textContent = theme === "dark" ? "dark_mode" : "light_mode";
    }
}