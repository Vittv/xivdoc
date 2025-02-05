export function toggleDropdown(event) {   
    // Find the header container for the clicked header
    const headerContainer = event.target.closest(".header-container");
    
    // Find the section links and dropdown arrow corresponding to the clicked header
    const sectionLinks = headerContainer.nextElementSibling;  // Get the corresponding section links list
    const arrow = headerContainer.querySelector(".dropdown-arrow");  // Get the dropdown arrow inside the header container
    if (sectionLinks.style.display === "block") {
        sectionLinks.style.display = "none"; // Hide the section links
        arrow.textContent = "▾"
    } else {
        sectionLinks.style.display = "block"; // Show the section links
        arrow.textContent = "▴"
    }
};