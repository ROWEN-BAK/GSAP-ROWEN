gsap.registerPlugin(ScrollTrigger);

gsap.from("#introduction", {
  opacity: 0,
  y: 50,
  duration: 1
});

$(document).ready(function() {
  $("a").click(function(event) {
    const target = this.hash;

    if (target) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 800, function() {
        window.location.hash = target;
      });
    }
  });
});

const targetCalories = 3000;

function countCalories() {
  let currentCalories = 0;
  const duration = 2;
  const increment = targetCalories / (duration * 60);

  const counter = setInterval(() => {
    currentCalories += increment;
    document.querySelector(".calorie-count").textContent = Math.floor(currentCalories) + " Calorieën verbrand deze week.";

    if (currentCalories >= targetCalories) {
      clearInterval(counter);
      document.querySelector(".calorie-count").textContent = targetCalories + " Calorieën verbrand deze week.";
    }
  }, 1000 / 60);
}

function countDownCalories() {
  let currentCalories = targetCalories;
  const duration = 2;
  const decrement = targetCalories / (duration * 60);

  const counter = setInterval(() => {
    currentCalories -= decrement;
    if (currentCalories <= 0) {
      clearInterval(counter);
      currentCalories = 0;
    }
    document.querySelector(".calorie-count").textContent = Math.floor(currentCalories) + " Calorieën verbrand deze week.";
  }, 1000 / 60);
}

gsap.to(".progress", {
  width: "100%",
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#calorie-tracker",
    start: "top top",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
    onEnter: countCalories,
    onLeaveBack: countDownCalories
  }
});

// Step Counter Settings
const targetSteps = 15000;

function countSteps() {
  let currentSteps = 0;
  const duration = 2;
  const increment = targetSteps / (duration * 60);

  const counter = setInterval(() => {
    currentSteps += increment;
    document.querySelector(".step-count").textContent = Math.floor(currentSteps);

    if (currentSteps >= targetSteps) {
      clearInterval(counter);
      document.querySelector(".step-count").textContent = targetSteps;
    }

    gsap.to(".step-progress-circle", {
      backgroundColor: "#76c7c0", 
      duration: 3
    });
    gsap.to(".step-count", {
      color: "#ffffff", 
      duration: 3
    });
  }, 1000 / 60);
}

function countDownSteps() {
  let currentSteps = targetSteps;
  const duration = 2;
  const decrement = targetSteps / (duration * 60);

  const counter = setInterval(() => {
    currentSteps -= decrement;
    if (currentSteps <= 0) {
      clearInterval(counter);
      currentSteps = 0;
    }
    document.querySelector(".step-count").textContent = Math.floor(currentSteps);
  }, 1000 / 60);

  // Change the color of the circle and text back to original
  gsap.to(".step-progress-circle", {
    backgroundColor: "#76c7c0", // Reset to the original color or desired color
    duration: 0.1
  });
  gsap.to(".step-count", {
    color: "#333333", // Reset text color to original
    duration: 0.1
  });
}

gsap.to(".step-progress-circle", {
  scale: 1.5,
  rotation: 360,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#step-counter",
    start: "top 50%",
    end: "bottom top",
    toggleActions: "play reverse play reverse",
    onEnter: countSteps,
    onLeaveBack: countDownSteps
  }
});


