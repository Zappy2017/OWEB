import {
  getPlaces,
  getUserPlaces,
  setUserPlace,
  removeUserPlace,
} from "./api.js";

window.setUserPlace = setUserPlace;
window.removeUserPlace = removeUserPlace;

function renderPlaces() {
  const container = document.getElementById("destinations-container");

  try {
    const response = getUserPlaces();
    const places = response;

    container.innerHTML = "";

    places.forEach((place) => {
      const rating = place.rating.toFixed(1);

      const card = `
        <div class="col-md-12 mb-6 p-0">
          <div
            class="container border rounded-5 p-0 m-0 w-100 overflow-hidden"
            style="height: 300px; position: relative"
          >
            <img
              class="card-image"
              src="${place.image}"
              alt="${place.name}"
            />

            <div class="actions-container">
                <button onClick="removePlace(${place.id})" class="btn btn-danger rounded-pill"><i class="fa-solid fa-trash"></i></button>
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

function setPlace(id) {
  setUserPlace(id);
  renderPlaces();
}

// Popup
const placeSelect = document.getElementById("placeSelect");
const addPlaceForm = document.getElementById("addPlaceForm");

function populatePlaces() {
  const places = getPlaces();

  places.data.forEach((place) => {
    const option = document.createElement("option");

    option.value = place.id;
    option.textContent = `${place.name}, ${place.country}`;

    placeSelect.appendChild(option);
  });
}

addPlaceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = Number(placeSelect.value);
  const cost = Number(document.getElementById("placeCost").value);

  if (!id || cost < 0 || !Number.isFinite(cost)) return;

  setPlace(id, cost);

  addPlaceForm.reset();
  $("#addPlaceModal").modal("hide");
});

document.addEventListener("DOMContentLoaded", () => {
  renderPlaces();
  populatePlaces();
});
