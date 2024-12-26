const images = document.querySelectorAll(".content");

window.addEventListener("scroll", () => {
  const scrollInVh = window.scrollY;

  images.forEach((img, idx) => {
    if (scrollInVh > (idx + 1) * img.offsetHeight) {
      img.style.opacity = "0";
    } else {
      img.style.opacity = "1";
    }
  });
});
