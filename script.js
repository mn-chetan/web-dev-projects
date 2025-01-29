document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Title animation
  gsap.from(".glowing-title", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
  });

  // Subtitle animation
  gsap.from(".subtitle", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
  });

  // Project section animations
  gsap.utils.toArray(".project").forEach((project, index) => {
    gsap.from(project, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: project,
        start: "top 80%",
      },
    });
  });

  // Background animation
  const canvas = document.querySelector(".background-effects");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let particles = [];

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 3 + 1;
      this.speedX = Math.random() * 1 - 0.5;
      this.speedY = Math.random() * 1 - 0.5;
      this.opacity = Math.random() * 0.6;
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
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
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
    for (let i = 0; i < 150; i++) {
      particles.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();

  // Click event for project links
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", () => {
      window.location.href = project.getAttribute("data-link");
    });
  });
});
