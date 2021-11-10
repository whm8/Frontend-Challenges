document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const navToggle = document.querySelector(".nav-toggle");
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--visible");
  });

  const btn = document.querySelector(".nav__link--button");
  console.log(btn);


});