// GSAP for Animations
gsap.from(".navbar", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "power2.out"
});

// Initialize AOS for scroll animations
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1200,
        easing: "ease-in-out",
        once: true,
    });
});
