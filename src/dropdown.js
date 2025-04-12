export function toggleDropdown(event) {
    const headerContainer = event.target.closest(".header-container");
    const sectionLinks = headerContainer.nextElementSibling;
  
    if (!sectionLinks.classList.contains("expandable")) return;
  
    // Get the dropdown arrow element (not assuming it's always an <i>)
    const arrow = headerContainer.querySelector(".dropdown-arrow");
  
    if (sectionLinks.classList.contains("open")) {
      sectionLinks.style.maxHeight = "0";
      sectionLinks.classList.remove("open");
  
        // Remove rotation class or change symbol
        if (arrow.querySelector("i")) {
            arrow.querySelector("i").classList.remove("rotated");
        } else {
            arrow.textContent = "▾";
        }
    } else {
        sectionLinks.style.maxHeight = sectionLinks.scrollHeight + "px";
        sectionLinks.classList.add("open");
    
        if (arrow.querySelector("i")) {
            arrow.querySelector("i").classList.add("rotated");
        } else {
            arrow.textContent = "▴";
        }
    }
};
  