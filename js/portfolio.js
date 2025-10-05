document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDesc = document.getElementById('lightbox-desc');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-nav.prev');
    const nextBtn = document.querySelector('.lightbox-nav.next');
    const viewBtns = document.querySelectorAll('.view-btn');
    
    const galleryData = [
        { title: 'Wedding Ceremony', desc: "Sarah & John's Special Day", gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
        { title: 'Portrait Session', desc: 'Corporate Headshots', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
        { title: 'Corporate Event', desc: 'Annual Conference 2024', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
        { title: 'Product Photography', desc: 'E-commerce Collection', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
        { title: 'Engagement Photos', desc: 'Emma & Michael', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
        { title: 'Fashion Photography', desc: 'Spring Collection', gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)' },
        { title: 'Birthday Celebration', desc: 'Sweet Sixteen Party', gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' },
        { title: 'Wedding Reception', desc: 'Amanda & David', gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)' },
        { title: 'Jewelry Photography', desc: 'Luxury Collection', gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)' },
        { title: 'Family Portrait', desc: 'The Johnson Family', gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)' },
        { title: 'Graduation Ceremony', desc: 'Class of 2024', gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)' },
        { title: 'Pre-Wedding Shoot', desc: 'Jessica & Mark', gradient: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)' }
    ];
    
    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        const data = galleryData[index];
        lightboxImg.style.background = data.gradient;
        lightboxTitle.textContent = data.title;
        lightboxDesc.textContent = data.desc;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % galleryData.length;
        const data = galleryData[currentIndex];
        lightboxImg.style.background = data.gradient;
        lightboxTitle.textContent = data.title;
        lightboxDesc.textContent = data.desc;
    }

    function showPrev() {
        currentIndex = currentIndex === 0 ? galleryData.length - 1 : currentIndex - 1;
        const data = galleryData[currentIndex];
        lightboxImg.style.background = data.gradient;
        lightboxTitle.textContent = data.title;
        lightboxDesc.textContent = data.desc;
    }

    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const index = parseInt(this.getAttribute('data-index'));
            openLightbox(index);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
});
