document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const contact = document.getElementById("contact").value;
        const message = document.getElementById("message").value;

        if (name && email && contact && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
        } else {
            alert("Please fill in all fields before submitting.");
        }
    });
});
