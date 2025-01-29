// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Header animation
gsap.to("header", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "header",
    start: "top 80%",
  },
});

// Project sections animation
gsap.to(".project-section", {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".projects-container",
    start: "top 80%",
  },
});

// Handle project section clicks
document.querySelectorAll(".project-section").forEach((section) => {
  section.addEventListener("click", () => {
    const list = section.querySelector(".project-list");
    const wasActive = list.classList.contains("active");

    // Hide all lists first
    document.querySelectorAll(".project-list").forEach((l) => {
      l.classList.remove("active");
    });

    if (!wasActive) {
      list.classList.add("active");
      // Animate list items
      list.querySelectorAll(".project-item").forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            delay: index * 0.1,
          }
        );
      });
    }
  });
});

// Particle animation
const canvas = document.querySelector(".particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.opacity = Math.random() * 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (
      this.x < 0 ||
      this.x > canvas.width ||
      this.y < 0 ||
      this.y > canvas.height
    ) {
      this.reset();
    }
  }

  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

initParticles();
animate();
