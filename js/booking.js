document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    const dateInput = document.getElementById('date');
    dateInput.min = minDate.toISOString().split('T')[0];

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[\d\s\-\(\)\+]+$/;
        return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
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

    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const eventType = document.getElementById('eventType');
        const date = document.getElementById('date');

        clearError(name);
        clearError(email);
        clearError(phone);
        clearError(eventType);
        clearError(date);

        if (name.value.trim().length < 2) {
            showError(name, 'Please enter a valid name');
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        if (!validatePhone(phone.value)) {
            showError(phone, 'Please enter a valid phone number');
            isValid = false;
        }

        if (!eventType.value) {
            showError(eventType, 'Please select an event type');
            isValid = false;
        }

        if (!date.value) {
            showError(date, 'Please select a date');
            isValid = false;
        }

        if (isValid) {
            alert('Thank you! Your booking request has been submitted. We will contact you soon to confirm your session.');
            bookingForm.reset();
        }
    });

    [name, email, phone, eventType, date].forEach(input => {
        input.addEventListener('input', function() {
            if (this.classList.contains('error')) {
                clearError(this);
            }
        });
    });
});
