export function enableSmoothScroll(linkId) {
    const element = document.getElementById(linkId);
    if (element) {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
}