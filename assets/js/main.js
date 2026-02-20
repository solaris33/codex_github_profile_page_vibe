const revealElements = [...document.querySelectorAll("[data-reveal]")];
const yearElement = document.querySelector("#current-year");
const navLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const sectionElements = [...document.querySelectorAll("main section[id]")];

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

if (reducedMotionQuery.matches) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  revealElements.forEach((element, index) => {
    const delay = Math.min(index * 60, 360);
    element.style.transitionDelay = `${delay}ms`;
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}

if (navLinks.length > 0 && sectionElements.length > 0) {
  const linkBySectionId = new Map(
    navLinks.map((link) => {
      const sectionId = link.getAttribute("href")?.replace("#", "") || "";
      return [sectionId, link];
    })
  );

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === `#${id}`) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const id = entry.target.getAttribute("id");
        if (!id || !linkBySectionId.has(id)) {
          return;
        }

        setActiveLink(id);
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-20% 0px -35% 0px"
    }
  );

  sectionElements.forEach((section) => sectionObserver.observe(section));

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("href")?.replace("#", "");
      if (id) {
        setActiveLink(id);
      }
    });
  });
}
