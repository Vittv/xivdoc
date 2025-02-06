export function toggleDropdown(event) {   
    // Find the header container for the clicked header
    const headerContainer = event.target.closest(".header-container");
    const sectionLinks = headerContainer.nextElementSibling;

    // Ensure only expandable section-links are targeted
    if (!sectionLinks.classList.contains("expandable")) return;

    const arrow = headerContainer.querySelector(".dropdown-arrow i");  // Get the dropdown arrow inside the header container
    if (sectionLinks.classList.contains("open")) {
        sectionLinks.style.maxHeight = "0"; // Collapse
        sectionLinks.classList.remove("open");
        arrow.classList.remove("rotated"); // Rotate back
    } else {
        // This dynamically calculates the height of the page required to show the full dropdown content
        sectionLinks.style.maxHeight = sectionLinks.scrollHeight + "px";
        sectionLinks.classList.add("open"); // Expand dropdown
        arrow.classList.add("rotated"); // Rotate down
    }
};