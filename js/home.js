document.addEventListener('DOMContentLoaded', function() {
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;

    function nextSlide() {
        heroSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 4000);

    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(t => t.classList.remove('active'));
        testimonials[index].classList.add('active');
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentTestimonial = currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1;
            showTestimonial(currentTestimonial);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
    }
});
