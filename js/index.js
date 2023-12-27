document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // You can add code here to send an email using JavaScript
        // For security reasons, you may need to use a server-side language (e.g., Node.js) to handle the email sending process.
        alert('Form submitted! (Note: This is a placeholder, no actual submission is performed)');
    });
});
