// JavaScript for Intersection Observer to trigger fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section-fade-in');

    // Add the 'hidden-initial' class to ensure sections start hidden if JS loads first
    sections.forEach(section => {
        section.classList.add('hidden-initial');
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden-initial'); // Remove initial hidden state
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});