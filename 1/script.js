gsap.from(".kaasknop", { 
    opacity: 0, y: 50, x: 50, 
    duration: 3,
    ease: "elastic"
    
});

gsap.from(".kaasknop2", { 
    opacity: 0, y: 50, x: 50,
    duration: 4,
    ease: "elastic"
    
});

gsap.from(".kaasknop3", { 
    opacity: 0, y: 50, x: 50, 
    duration: 5,
    ease: "elastic"
});

function what() {
    gsap.from(".kaasknop3", {
        rotation: 14440,
        duration: 11,
        ease: "power1",
      });
      
}

gsap.from(".nav", { 
    opacity: 0,
    duration: 3,
    y: -500, x: 0, 
    ease: "bounce"
    
});

gsap.from(".img1", { 
    y: 0, x: 50, 
    opacity: 0,
    duration: 3,
    ease: "bounce",
});

gsap.from(".footer", { 
    opacity: 0,
    duration: 3,
});