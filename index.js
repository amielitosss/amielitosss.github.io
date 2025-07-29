document.addEventListener("DOMContentLoaded", function () {
  // GSAP animations for cards (only if gsap & ScrollTrigger are loaded)
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    const cards = [".card1", ".card2", ".card3", ".card4"];
    cards.forEach(card => {
      const el = document.querySelector(card);
      if (el) {
        gsap.to(card, {
          scale: 0.7,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 15%",
            end: "bottom 15%",
            markers: false, // set to true if debugging
            scrub: true,
          },
        });
      }
    });
  }

  // Typing animation ONLY if #typingHeading exists (contact page)
  const typingEl = document.getElementById("typingHeading");
  if (typingEl) {
    const text = "Contactez moi!!";
    let i = 0;
    (function type() {
      if (i < text.length) {
        typingEl.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    })();
  }

  // Navbar toggler events (if elements exist)
  const nav = document.getElementById("navbarNav");
  const toggler = document.querySelector(".navbar-toggler");
  if (nav && toggler) {
    nav.addEventListener("show.bs.collapse", () => document.body.classList.add("nav-open"));
    nav.addEventListener("hide.bs.collapse", () => document.body.classList.remove("nav-open"));

    const closeNavBtn = document.getElementById("closeNav");
    if (closeNavBtn) {
      closeNavBtn.addEventListener("click", () => bootstrap.Collapse.getOrCreateInstance(nav).hide());
    }
  }

  // IntersectionObserver for contact form
  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    observer.observe(contactForm);
  }

const canvas = document.getElementById("stars"),
  ctx = canvas.getContext("2d");
let w,
  h,
  stars = [];
function initStars(t = 100) {
  (canvas.width = w = window.innerWidth),
    (canvas.height = h = window.innerHeight),
    (stars = Array.from({ length: t }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 1.5 * Math.random() + 0.5,
      speed: 0.3 * Math.random() + 0.1,
    })));
}
function drawStars() {
  for (let t of (ctx.clearRect(0, 0, w, h), (ctx.fillStyle = "#fff"), stars))
    ctx.beginPath(),
      ctx.arc(t.x, t.y, t.r, 0, 2 * Math.PI),
      ctx.fill(),
      (t.y += t.speed),
      t.y > h && ((t.y = 0), (t.x = Math.random() * w));
}
function animate() {
  drawStars(), requestAnimationFrame(animate);
}
window.addEventListener("resize", () => initStars()), initStars(), animate();
const observer = new IntersectionObserver((t) => {
    t.forEach((t) => {
      t.isIntersecting
        ? t.target.classList.add("show")
        : t.target.classList.remove("show");
    });
  })
});
