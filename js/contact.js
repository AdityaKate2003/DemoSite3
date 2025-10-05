document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMsg = formGroup.querySelector('.error-message');
        input.classList.add('error');
        errorMsg.textContent = message;
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const errorMsg = formGroup.querySelector('.error-message');
        input.classList.remove('error');
        errorMsg.textContent = '';
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        clearError(name);
        clearError(email);
        clearError(message);

        if (name.value.trim().length < 2) {
            showError(name, 'Please enter a valid name');
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        if (message.value.trim().length < 10) {
            showError(message, 'Please enter a message (at least 10 characters)');
            isValid = false;
        }

        if (isValid) {
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        }
    });

    [name, email, message].forEach(input => {
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                clearError(this);
            }
        });
    });
});
