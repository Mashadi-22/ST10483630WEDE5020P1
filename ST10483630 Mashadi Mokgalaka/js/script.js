// Mashadi's Braids - JavaScript

// Display a welcome message
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Mashadi's Braids!");

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});

// Gallery Lightbox
document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    if (!lightbox || !lightboxImage || !closeLightbox) return;

    galleryImages.forEach(function (image) {
        image.style.cursor = "pointer";

        image.addEventListener("click", function () {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.style.display = "flex";
        });
    });

    closeLightbox.addEventListener("click", function () {
        lightbox.style.display = "none";
        lightboxImage.src = "";
    });

    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
            lightboxImage.src = "";
        }
    });
});

// Booking Form Validation

document.addEventListener("DOMContentLoaded", function () {

    const bookingForm = document.getElementById("bookingForm");
    const formMessage = document.getElementById("formMessage");

    if (!bookingForm || !formMessage) return;

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const hairstyle = document.getElementById("hairstyle").value;
        const date = document.getElementById("date").value;

        if (!name || !email || !phone || !hairstyle || !date) {
            formMessage.textContent = "Please complete all fields.";
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            return;
        }

        if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
            formMessage.textContent = "Please enter a valid phone number.";
            return;
        }

        const selectedDate = new Date(date + "T00:00:00");
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            formMessage.textContent = "Please choose a future booking date.";
            return;
        }

        formMessage.textContent =
            "Thank you, " + name +
            "! Your booking request has been validated.";

        bookingForm.reset();
    });

});