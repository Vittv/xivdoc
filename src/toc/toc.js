document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("h2[id], h3[id]"); // Select headings
    const links = document.querySelectorAll(".tb-content a");
    const firstSection = sections[0]; // First section (Phase 1)
    const firstLink = document.querySelector(`.tb-content a[href="#${firstSection.id}"]`);

    function setActiveLink(section) {
        links.forEach(link => {
            link.style.backgroundColor = "";
            link.style.borderLeftColor = "";
            link.style.fontWeight = "";
        });

        if (section) {
            const id = section.getAttribute("id");
            const link = document.querySelector(`.tb-content a[href="#${id}"]`);

            if (link) {
                // Get the color from section-permalink
                const colorElement = section.querySelector(".section-permalink");
                let color = "transparent"; // Default if no color is found

                if (colorElement) {
                    if (colorElement.classList.contains("resources")) {
                        color = getComputedStyle(document.documentElement).getPropertyValue("--resource-permalink-color");
                    } else {
                        color = getComputedStyle(document.documentElement).getPropertyValue("--phase-permalink-color");
                    }
                }

                // Apply styles
                link.style.borderLeftColor = color;
                link.style.backgroundColor = `${color}60`; // Light version of the color
                link.style.fontWeight = 700;
            }
        }
    }

    function highlightCurrentSection() {
        let scrollPosition = window.scrollY + 80; // Adjusted for navbar height
        let activeSection = firstSection; // Default to Phase 1

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) {
                activeSection = section;
            }
        });

        setActiveLink(activeSection);
    }

    // Highlight Phase 1 immediately on page load
    requestAnimationFrame(() => highlightCurrentSection());

    window.addEventListener("scroll", highlightCurrentSection);
});
