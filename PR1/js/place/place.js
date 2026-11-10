import { getPlaces } from "../api.js";
import { setupGallery } from "./components/gallery.js";
import { setupFeedback } from "./components/feedback.js";

const container = document.getElementById("place-container");

/* ---------- rendering ---------- */

function renderGallery(place) {
  const images =
    place.images && place.images.length ? place.images : [place.image];

  const thumbs = images
    .map(
      (src, i) => `
        <img
          class="place-thumb ${i === 0 ? "active" : ""}"
          src="${src}"
          alt="${place.name} ${i + 1}"
          data-src="${src}"
        />`,
    )
    .join("");

  return `
    <img id="main-image" class="place-main-image" src="${images[0]}" alt="${place.name}" />
    <div class="place-thumbnails">${thumbs}</div>
  `;
}

function renderComments(feedback) {
  const list = document.getElementById("comments-list");

  if (!feedback.comments.length) {
    list.innerHTML = '<p class="text-muted">No comments yet. Be the first!</p>';
    return;
  }

  list.innerHTML = feedback.comments
    .map(
      (c) => `
        <div class="comment-item">
          <span class="comment-author">${c.author}</span>
          <span class="comment-date ml-2">${c.date}</span>
          <p class="mb-0 mt-1">${c.text}</p>
        </div>`,
    )
    .join("");
}

function renderVotes(feedback) {
  const likeBtn = document.getElementById("like-btn");
  const dislikeBtn = document.getElementById("dislike-btn");

  document.getElementById("like-count").textContent = feedback.likes;
  document.getElementById("dislike-count").textContent = feedback.dislikes;

  likeBtn.className = `btn rounded-pill mr-2 ${feedback.vote === "like" ? "btn-success" : "btn-outline-success"}`;
  dislikeBtn.className = `btn rounded-pill ${feedback.vote === "dislike" ? "btn-danger" : "btn-outline-danger"}`;
}

function renderPlace(place) {
  const rating = place.rating.toFixed(1);

  container.innerHTML = `
    <div class="mb-4">
      ${renderGallery(place)}
    </div>

    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h2 class="mb-1">${place.name}</h2>
        <span class="text-muted">
          <i class="fa-solid fa-location-dot"></i> ${place.country}
        </span>
        ${place.popular ? '<span class="badge badge-primary ml-2">Popular</span>' : ""}
      </div>
      <span class="place-rating">
        <i class="fa-solid fa-star"></i> ${rating}
      </span>
    </div>

    <p class="mt-3">${place.description}</p>

    <div class="my-4">
      <button id="like-btn" class="btn btn-outline-success rounded-pill mr-2">
        <i class="fa-solid fa-thumbs-up"></i> <span id="like-count">0</span>
      </button>
      <button id="dislike-btn" class="btn btn-outline-danger rounded-pill">
        <i class="fa-solid fa-thumbs-down"></i> <span id="dislike-count">0</span>
      </button>
    </div>

    <h4>Comments</h4>
    <form id="comment-form" class="mb-3">
      <div class="form-group">
        <input
          type="text"
          id="comment-author"
          class="form-control rounded-pill"
          placeholder="Your name"
          required
        />
      </div>
      <div class="form-group">
        <textarea
          id="comment-text"
          class="form-control"
          rows="3"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary rounded-pill">
        Post comment
      </button>
    </form>

    <div id="comments-list"></div>
  `;

  setupGallery();
  setupFeedback(place.id, renderVotes, renderComments);
}

/* ---------- init ---------- */

async function init() {
  try {
    const id = Number(new URLSearchParams(window.location.search).get("id"));

    // works whether getPlaces returns an array, { data: [...] }, or a promise of either
    const result = await getPlaces();
    const places = Array.isArray(result) ? result : result.data;

    const place = places.find((p) => p.id === id);

    if (!place) {
      container.innerHTML = "<p>Destination not found.</p>";
      return;
    }

    document.title = `${place.name} | Travel Planner`;
    renderPlace(place);
  } catch (error) {
    console.error("Failed to load destination:", error);
    container.innerHTML = "<p>Failed to load destination.</p>";
  }
}

document.addEventListener("DOMContentLoaded", init);
