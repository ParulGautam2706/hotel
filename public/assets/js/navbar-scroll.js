window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (!nav) return;

  if (window.scrollY > 10) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
