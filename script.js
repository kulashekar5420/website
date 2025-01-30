// Smooth Scrolling for Projects Section
document.querySelector('.projects-container').addEventListener('wheel', (event) => {
  event.preventDefault();
  document.querySelector('.projects-container').scrollLeft += event.deltaY;
});

// GSAP Animation
gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: -50, delay: 0.3, duration: 1 });
gsap.from(".download-buttons", { opacity: 0, scale: 0.8, delay: 0.6, duration: 1 });

gsap.from(".animated-mobile", { opacity: 0, x: 50, delay: 0.8, duration: 1.5 });
