document.addEventListener("DOMContentLoaded", () => {
  // Handle hamburger functionality
  const hamburgerButton = document.getElementById("hamburger-button");
  const menu = document.querySelector(".main-menu");
  console.log("script is functional");
  hamburgerButton.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  // Close navigation when a link is clicked and underline active
  const navLinks = nav.querySelectorAll(".nav-link a");
  const currentLink = window.location.href;

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      console.log(currentLink);
      if (link.href === currentLink) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });
});
