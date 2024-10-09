gsap.registerPlugin(ScrollTrigger);

const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const moveY = scrollTop > lastScrollTop ? -navbar.offsetHeight : 0;
  gsap.to(navbar, { y: moveY, duration: 0.3 });
  lastScrollTop = scrollTop;
});



gsap.from("#introduction", { y: 50, duration: 1, opacity: 0 });


