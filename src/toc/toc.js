document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".tb-content a");

    // Only track the sections that are linked from .tb-content
    const sections = Array.from(links)
        .map(link => document.querySelector(link.getAttribute("href")))
        .filter(section => section !== null);

    const firstSection = sections[0];
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
                let color = "transparent";

                if (link.classList.contains("resource")) {
                    color = getComputedStyle(document.documentElement).getPropertyValue("--resource-permalink-color");
                } else if (link.classList.contains("fight")) {
                    color = getComputedStyle(document.documentElement).getPropertyValue("--phase-permalink-color");
                }

                link.style.borderLeftColor = color;
                link.style.backgroundColor = `${color}60`;
                link.style.fontWeight = 700;
            }
        }
    }

    function highlightCurrentSection() {
        let scrollPosition = window.scrollY + 80;
        let activeSection = firstSection;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop) {
                activeSection = section;
            }
        });

        setActiveLink(activeSection);
    }

    requestAnimationFrame(() => highlightCurrentSection());

    window.addEventListener("scroll", highlightCurrentSection);
});
