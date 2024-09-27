function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the 'show' class when the section is in view
        entry.target.classList.add("show");
      } else {
        // Remove the 'show' class when the section goes out of view
        entry.target.classList.remove("show");
      }
    });
  }, {
    threshold: 0.1, // Adjust to determine when animation triggers (e.g., 10% visible)
  });

  sections.forEach((section) => observer.observe(section));
});

