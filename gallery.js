function openGallery(galleryId) {
    // Hide all galleries
    document.querySelectorAll(".gallery-set").forEach(gallery => {
        gallery.style.display = "none";
    });

    // Show selected gallery
    document.getElementById(galleryId).style.display = "flex";

    // Show popup
    document.getElementById("gallery-popup").style.display = "flex";
}

function closeGallery() {
    document.getElementById("gallery-popup").style.display = "none";
}
