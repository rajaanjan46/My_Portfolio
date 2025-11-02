

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // Responsive Navbar Toggle
  const navToggle = document.getElementById("nav-toggle");
  const navbar = document.getElementById("navbar");

  navToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    // Hide navbar if clicking outside
    if (navbar.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  // Optional: Hide navbar when clicking a link (for mobile UX)
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 995) {
        navbar.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  });

  // IntersectionObserver for simple scroll-triggered animations
  const animatedEls = document.querySelectorAll('.animate-on-scroll');
  if ('IntersectionObserver' in window && animatedEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.15 });

    animatedEls.forEach(el => io.observe(el));
  } else {
    // fallback: reveal immediately
    animatedEls.forEach(el => el.classList.add('in-view'));
  }

const toggle = document.getElementById("nav-toggle");
const nav = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});



  