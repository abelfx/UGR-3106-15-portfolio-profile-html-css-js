document.addEventListener("DOMContentLoaded", () => {
  // Handle tab switching between Website and Application sections
  const heading1 = document.getElementById("heading1");
  const heading2 = document.getElementById("heading2");
  const images1 = document.getElementById("images1");
  const images2 = document.getElementById("images2");

  heading1.addEventListener("click", (e) => {
    e.preventDefault();
    heading1.classList.add("active");
    heading2.classList.remove("active");
    images1.style.display = "block";
    images2.style.display = "none";
  });

  heading2.addEventListener("click", (e) => {
    e.preventDefault();
    heading2.classList.add("active");
    heading1.classList.remove("active");
    images1.style.display = "none";
    images2.style.display = "block";
  });
});
