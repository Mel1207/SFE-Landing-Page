document.addEventListener("DOMContentLoaded", () => {
  const mobileNav = document.querySelector(".mobile-navigation");
  const openBtn = document.querySelector(".open-navigation"); // your hamburger button
  const closeBtn = document.querySelector(".close-navigation"); // close button inside nav

  // Open navigation
  openBtn.addEventListener("click", () => {
    mobileNav.classList.add("open");
  });

  // Close navigation
  closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("open");
  });

  // Hover gradients
  const services = [
    { selector: ".service-1", class: "gradient-1" },
    { selector: ".service-2", class: "gradient-2" },
    { selector: ".service-3", class: "gradient-3" },
  ];

  services.forEach(service => {
    const el = document.querySelector(service.selector);
    if (el) {
      el.addEventListener("mouseenter", () => {
        mobileNav.classList.add(service.class);
      });
      el.addEventListener("mouseleave", () => {
        mobileNav.classList.remove(service.class);
      });
    }
  });
});
