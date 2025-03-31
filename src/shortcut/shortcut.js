document.addEventListener("DOMContentLoaded", () => {
    const sections = [
        { data: ultimateRaids, className: "ultimate-section", title: "Ultimate" },
        { data: savageRaids, className: "savage-section", title: "Savage" },
        { data: extremeTrials, className: "extreme-section", title: "Extreme" },
        { data: unrealTrials, className: "unreal-section", title: "Unreal" },
        { data: chaoticRaids, className: "chaotic-section", title: "Chaotic" },
        { data: criterionDungeons, className: "criterion-section", title: "Criterion" }
    ];

    sections.forEach(section => {
        // Check if data is undefined
        if (typeof section.data === "undefined") {
            console.error(`Error: ${section.className} data is not loaded.`);
            return;
        }

        const shortcutSection = document.querySelector(`.shortcut-section.${section.className}`);
        if (!shortcutSection) {
            console.warn(`Warning: .shortcut-section.${section.className} not found. Skipping.`);
            return;
        }

        // Create the header container div
        const headerContainer = document.createElement("div");
        headerContainer.classList.add("header-container");

        // Create the section title (h2)
        const sectionHeader = document.createElement("h2");
        sectionHeader.classList.add("h2-section-header");
        sectionHeader.textContent = section.title;

        // Create the dropdown arrow span
        const dropdownArrow = document.createElement("span");
        dropdownArrow.classList.add("dropdown-arrow");
        dropdownArrow.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';

        // Append the title and arrow to the header container
        headerContainer.appendChild(dropdownArrow);
        headerContainer.appendChild(sectionHeader);

        // Create the list container
        const listContainer = document.createElement("ul");
        listContainer.classList.add("section-links", "expandable");

        // Generate the list using URLs from data
        section.data.forEach(item => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a href="${item.url}">${item.name}<span class="link-arrow"> →</span></a>`;
            listContainer.appendChild(listItem);
        });

        // Add the header container and the list container inside the shortcut section
        shortcutSection.appendChild(headerContainer);
        shortcutSection.appendChild(listContainer);

        // Initially hide the list
        listContainer.style.maxHeight = "0";

        // Add click functionality to toggle the visibility
        sectionHeader.addEventListener("click", () => {
            const isExpanded = listContainer.style.maxHeight !== "0px";
            if (isExpanded) {
                listContainer.style.maxHeight = "0";
                dropdownArrow.querySelector('.fa-chevron-down').classList.remove('rotate');
            } else {
                listContainer.style.maxHeight = listContainer.scrollHeight + "px"; // Set to the actual height of the content
                dropdownArrow.querySelector('.fa-chevron-down').classList.add('rotate');
            }
        });
    });
});

/* 

<div class="sidebar">
                <h4>Guides</h4>
                <div class="shortcut-section sections" id="shorcut-section">
                    <div class="shortcut-section ultimate-section"></div>
                    <div class="shortcut-section savage-section"></div>
                    <div class="shortcut-section extreme-section"></div>
                    <div class="shortcut-section unreal-section"></div>
                    <div class="shortcut-section chaotic-section"></div>
                    <div class="shortcut-section criterion-section"></div>
                </div>
            </div>
*/