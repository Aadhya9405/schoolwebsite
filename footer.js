// Show/Hide Back to Top Button on Scroll
window.onscroll = function() {
    let button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Smooth Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
