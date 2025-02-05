export function enableSmoothScroll(linkId) {
    document.getElementById(linkId).addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}