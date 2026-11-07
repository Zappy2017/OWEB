import { getPlaces } from "./api.js";

async function renderPlaces() {
  const container = document.getElementById("destinations-container");

  try {
    const response = await getPlaces();
    const places = response.data;

    container.innerHTML = "";

    places.forEach((place) => {
      const rating = (place.rating / 100).toFixed(1);

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

document.addEventListener("DOMContentLoaded", () => {
  renderPlaces();
});
