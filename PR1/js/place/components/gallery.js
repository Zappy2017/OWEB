export function setupGallery() {
  const mainImage = document.getElementById("main-image");
  const thumbs = document.querySelectorAll(".place-thumb");

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.dataset.src;
      thumbs.forEach((t) => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });
}
