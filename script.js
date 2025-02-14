let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);

let index = 0;

function moveSlide(step) {
    const carousel = document.querySelector(".carousel");
    const totalSlides = document.querySelectorAll(".news-card").length;

    index += step;

    if (index < 0) {
        index = totalSlides - 3; // Ensures looping effect
    } else if (index > totalSlides - 3) {
        index = 0;
    }

    let offset = index * -33.33 + "%"; // Moves the slides
    carousel.style.transform = "translateX(" + offset + ")";
}
