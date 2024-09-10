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
        rotation: 1440,
        duration: 5,
        ease: "back",
      });
      
}

gsap.from(".nav", { 
    opacity: 0,
    duration: 3,
    
});

gsap.from(".img1", { 
    opacity: 0,
    duration: 3,
});

gsap.from(".footer", { 
    opacity: 0,
    duration: 3,
});