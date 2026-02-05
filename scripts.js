document.addEventListener('DOMContentLoaded', () => {
    // Contact form validation
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all required fields.');
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                return;
            }
        });
    }

    // Interest / Pre-order buttons
    document.querySelectorAll('.interest-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const product = btn.closest('.card').querySelector('h3').textContent;
            alert(`Interest noted for: ${product}\n\nWe'll contact you when more info is available or link you to order!`);
        });
    });
});
