document.addEventListener('DOMContentLoaded', function () {
    // WhatsApp Form Selection
    const whatsappForm = document.getElementById('whatsappForm');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Collect values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const carModel = document.getElementById('carModel').value.trim();
            const service = document.getElementById('service').value;
            const date = document.getElementById('bookingDate').value;
            const message = document.getElementById('message').value.trim();

            // WhatsApp Number (Change this to your actual number)
            const whatsappNumber = '92XXXXXXXXXX'; // Format: 923000000000

            // Generate Message Template
            let whatsappMessage = `*New Booking Request - Al-Madina Auto Garage*%0A%0A`;
            whatsappMessage += `*Name:* ${name}%0A`;
            whatsappMessage += `*Phone:* ${phone}%0A`;
            whatsappMessage += `*Car:* ${carModel}%0A`;
            whatsappMessage += `*Service:* ${service}%0A`;
            whatsappMessage += `*Date:* ${date}%0A`;

            if (message) {
                whatsappMessage += `*Message:* ${message}%0A`;
            }

            whatsappMessage += `%0APlease confirm my booking.`;

            // WhatsApp Redirect URL
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

            // Redirect in new tab
            window.open(whatsappLink, '_blank');
        });
    }

    // Smooth Scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Account for sticky nav
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lazy load gallery images (Optional improvement)
    const galleryImages = document.querySelectorAll('.gallery-item img');
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    // Already has src, but we could swap from data-src here
                    observer.unobserve(img);
                }
            });
        });
        galleryImages.forEach(img => imgObserver.observe(img));
    }
});
