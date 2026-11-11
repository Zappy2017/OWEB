import { getPlaces, loadReviews, saveReview } from "../api.js";

const STORAGE_KEY = "travel-reviews";

const form = document.getElementById("survey-form");
const placeSelect = document.getElementById("survey-place");
const stars = document.querySelectorAll(".star-btn");
const ratingError = document.getElementById("rating-error");
const successMessage = document.getElementById("survey-success");
const reviewsList = document.getElementById("reviews-list");

let selectedRating = 0;
let placesById = {};

/* ---------- star rating ---------- */

function paintStars(value) {
  stars.forEach((star) => {
    star.classList.toggle("active", Number(star.dataset.value) <= value);
  });
}

stars.forEach((star) => {
  star.addEventListener("click", () => {
    selectedRating = Number(star.dataset.value);
    paintStars(selectedRating);
    ratingError.classList.add("d-none");
  });

  // hover preview
  star.addEventListener("mouseenter", () =>
    paintStars(Number(star.dataset.value)),
  );
});

document
  .getElementById("star-rating")
  .addEventListener("mouseleave", () => paintStars(selectedRating));

/* ---------- reviews list ---------- */

function renderReviews() {
  const reviews = loadReviews(STORAGE_KEY);

  if (!reviews.length) {
    reviewsList.innerHTML = '<p class="text-muted">No reviews yet.</p>';
    return;
  }

  reviewsList.innerHTML = reviews
    .map((r) => {
      const place = placesById[r.placeId];
      const starIcons = "★".repeat(r.rating) + "☆".repeat(5 - r.rating);

      return `
        <div class="review-item">
          <div class="d-flex justify-content-between">
            <strong>${place ? place.name : "Unknown destination"}</strong>
            <span class="review-rating">${starIcons}</span>
          </div>
          <div class="review-meta">
            ${r.name} · visited ${r.visitDate}
            · ${r.recommend === "yes" ? "Recommends" : "Does not recommend"}
          </div>
          <p class="mb-0 mt-2">${r.comment}</p>
        </div>`;
    })
    .join("");
}

/* ---------- form ---------- */

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // show bootstrap-style validation for the standard fields
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    if (!selectedRating) ratingError.classList.remove("d-none");
    return;
  }

  if (!selectedRating) {
    ratingError.classList.remove("d-none");
    return;
  }

  saveReview(
    {
      placeId: Number(placeSelect.value),
      name: document.getElementById("survey-name").value.trim(),
      rating: selectedRating,
      visitDate: document.getElementById("survey-visit").value,
      recommend: form.elements["recommend"].value,
      comment: document.getElementById("survey-comment").value.trim(),
      date: new Date().toLocaleDateString(),
    },
    STORAGE_KEY,
  );

  // reset form
  form.reset();
  form.classList.remove("was-validated");
  selectedRating = 0;
  paintStars(0);

  successMessage.classList.remove("d-none");
  setTimeout(() => successMessage.classList.add("d-none"), 4000);

  renderReviews();
});

/* ---------- init ---------- */

async function init() {
  try {
    const result = await getPlaces();
    const places = Array.isArray(result) ? result : result.data;

    placesById = Object.fromEntries(places.map((p) => [p.id, p]));

    places.forEach((place) => {
      const option = document.createElement("option");
      option.value = place.id;
      option.textContent = `${place.name}, ${place.country}`;
      placeSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Failed to load destinations:", error);
  }

  renderReviews();
}

document.addEventListener("DOMContentLoaded", init);
