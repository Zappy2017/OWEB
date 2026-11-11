import { getPlaces } from "../api.js";

const container = document.getElementById("guide-container");
const backLink = document.getElementById("back-link");

const MAX_PLACES = 10;

/* ---------- helpers ---------- */

// must_visit items can be plain strings ("Eiffel Tower")
// or objects ({ name, description, image }) - both are supported
function normalizeSpot(spot) {
  if (typeof spot === "string") {
    return { name: spot, description: "", image: "" };
  }
  return {
    name: spot.name || spot.title || "",
    description: spot.description || "",
    image: spot.image || "",
  };
}

function articleTitle(place) {
  const count = Math.min(place.must_visit?.length || 0, MAX_PLACES);
  return `${count} Places You Must Visit in ${place.name}`;
}

/* ---------- article list ---------- */

function renderList(places) {
  backLink.classList.add("d-none");
  document.title = "Travel Guides | Travel Planner";

  const cards = places
    .filter((place) => place.must_visit && place.must_visit.length)
    .map(
      (place) => `
        <div class="col-md-6 col-lg-4 mb-4">
          <a class="guide-card" href="guide.html?id=${place.id}">
            <div class="guide-card-inner border rounded-4 overflow-hidden h-100">
              <img
                class="guide-card-image"
                src="${place.image}"
                alt="${place.name}"
              />
              <div class="p-3">
                <span class="text-muted small">
                  <i class="fa-solid fa-location-dot"></i>
                  ${place.country}
                </span>
                <h5 class="mt-1">${articleTitle(place)}</h5>
                <p class="guide-excerpt mb-0">${place.description}</p>
              </div>
            </div>
          </a>
        </div>`,
    )
    .join("");

  container.innerHTML = `
    <h2 class="mb-4">Travel Guides</h2>
    <div class="row">${cards || "<p class='col'>No guides available yet.</p>"}</div>
  `;
}

/* ---------- single article ---------- */

function renderArticle(place) {
  backLink.classList.remove("d-none");
  document.title = `${articleTitle(place)} | Travel Planner`;

  const spots = (place.must_visit || [])
    .slice(0, MAX_PLACES)
    .map(normalizeSpot);

  const items = spots
    .map(
      (spot, i) => `
        <div class="must-visit-item">
          <div class="must-visit-number">${i + 1}</div>
          <div class="flex-grow-1">
            <h5 class="mb-1">${spot.name}</h5>
            ${spot.description ? `<p class="mb-0 text-muted">${spot.description}</p>` : ""}
          </div>
          ${
            spot.image
              ? `<img class="must-visit-image" src="${spot.image}" alt="${spot.name}" />`
              : ""
          }
        </div>`,
    )
    .join("");

  container.innerHTML = `
    <img class="article-hero mb-4" src="${place.image}" alt="${place.name}" />

    <div class="article-body">
      <span class="text-muted">
        <i class="fa-solid fa-location-dot"></i>
        ${place.country}
      </span>
      <h1 class="mt-1">${articleTitle(place)}</h1>
      <p class="lead">${place.description}</p>

      <div class="mt-4">${items}</div>

      <a href="place.html?id=${place.id}" class="btn btn-primary rounded-pill mt-4">
        View ${place.name} details
      </a>
    </div>
  `;
}

/* ---------- init ---------- */

async function init() {
  try {
    const result = await getPlaces();
    const places = Array.isArray(result) ? result : result.data;

    const idParam = new URLSearchParams(window.location.search).get("id");

    // no ?id= -> show the list of article titles
    if (idParam === null) {
      renderList(places);
      return;
    }

    const place = places.find((p) => p.id === Number(idParam));

    if (!place) {
      backLink.classList.remove("d-none");
      container.innerHTML = "<p>Guide not found.</p>";
      return;
    }

    renderArticle(place);
  } catch (error) {
    console.error("Failed to load guides:", error);
    container.innerHTML = "<p>Failed to load guides.</p>";
  }
}

document.addEventListener("DOMContentLoaded", init);
