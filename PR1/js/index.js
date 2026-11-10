import {
  getPlaces,
  getUserPlaces,
  setUserPlace,
  removeUserPlace,
} from "./api.js";

import initPopup from "./components/add-place-modal.js";

window.setUserPlace = setUserPlace;
window.removeUserPlace = removeUserPlace;

let currentSort = "budget-asc";

function sortPlaces(sortBy) {
  currentSort = sortBy;
  renderPlaces();
}
window.sortPlaces = sortPlaces;

function renderPlaces() {
  const container = document.getElementById("destinations-container");

  try {
    const places = [...getUserPlaces()];

    switch (currentSort) {
      case "budget-asc":
        places.sort((a, b) => Number(a.cost) - Number(b.cost));
        break;

      case "budget-desc":
        places.sort((a, b) => Number(b.cost) - Number(a.cost));
        break;

      case "category":
        places.sort((a, b) => a.category.localeCompare(b.category));
        break;
    }

    container.innerHTML = "";

    places.forEach((place) => {
      const rating = place.rating.toFixed(1);

      const extraExpenses = Math.floor(Math.random() * 101) + 50;
      const estimatedCost = Number(place.cost) + extraExpenses;

      const card = `
        <div class="col-md-12 mb-6 p-0">
          <div
            class="container border rounded-5 p-0 m-0 w-100 overflow-hidden"
            style="height: 300px; position: relative"
          >
            <a href="place.html?id=${place.id}">
              <img
                class="card-image"
                src="${place.image}"
                alt="${place.name}"
              />
            </a>

            <div class="actions-container">
              <button onclick="removePlace(${place.id})" class="btn btn-danger rounded-pill">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>

            <div class="info-container">
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <h5 class="destination-name">
                    ${place.name}
                  </h5>

                  <span class="destination-country">
                    <i class="fa-solid fa-location-dot"></i>
                    ${place.country}
                  </span>
                </div>

                <span class="destination-rating">
                  <i class="fa-solid fa-star"></i>
                  ${rating}
                </span>
              </div>

              ${place.popular ? '<span class="popular-badge">Popular</span>' : ""}

              <div class="estimated-cost mt-3">
                <i class="fa-solid fa-wallet"></i>
                <span>
                  Estimated: €${estimatedCost}
                  <small>(€${place.cost} + €${extraExpenses} other expenses)</small>
                </span>
              </div>

            </div>
          </div>
        </div>
      `;

      container.insertAdjacentHTML("beforeend", card);
    });
  } catch (error) {
    console.error("Failed to render destinations:", error);
    container.innerHTML = "<p>Failed to load destinations.</p>";
  }
}

// API Calls
function removePlace(id) {
  removeUserPlace(id);
  renderPlaces();
}
window.removePlace = removePlace;

function setPlace(id, cost) {
  setUserPlace(id, cost);
  renderPlaces();
}

document.addEventListener("DOMContentLoaded", () => {
  renderPlaces();
  initPopup(getPlaces, setPlace, renderPlaces);
});
