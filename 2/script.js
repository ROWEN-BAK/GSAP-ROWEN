gsap.to(".block1", { rotation: 360, x: 1000, scale: 1.5, backgroundColor: "#58ff33", ease: "bounce", duration: 5 });
gsap.from(".block2", {rotation: 36000, x: 10000, y: -5000, backgroundColor: "#58ff33", duration: 20, ease: "elastic" })
gsap.fromTo(".block3", {opacity: 0, x: 1000, y: -1000, scale: 1}, {opacity: 1, x: 200, y: -200, duration: 9, scale: 0.5, ease: "elastic"})

let text = document.querySelector(".text");

let animation = gsap.to(".text2", {
  paused: true,
  duration: 3,
  ease: "slow",
  color: "red",
  opacity: 0,
  y: -30
});

text.addEventListener("mouseenter", () => animation.play());
text.addEventListener("mouseleave", () => animation.reverse());