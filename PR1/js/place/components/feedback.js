import { loadFeedback, saveFeedback } from "../../api.js";

export function setupFeedback(id, renderVotes, renderComments) {
  const feedback = loadFeedback(id);
  renderVotes(feedback);
  renderComments(feedback);

  function vote(type) {
    const other = type === "like" ? "dislike" : "like";
    const key = (t) => (t === "like" ? "likes" : "dislikes");

    if (feedback.vote === type) {
      // clicking again removes the vote
      feedback[key(type)]--;
      feedback.vote = null;
    } else {
      if (feedback.vote === other) feedback[key(other)]--;
      feedback[key(type)]++;
      feedback.vote = type;
    }

    saveFeedback(id, feedback);
    renderVotes(feedback);
  }

  document
    .getElementById("like-btn")
    .addEventListener("click", () => vote("like"));
  document
    .getElementById("dislike-btn")
    .addEventListener("click", () => vote("dislike"));

  document.getElementById("comment-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const author = document.getElementById("comment-author");
    const text = document.getElementById("comment-text");

    feedback.comments.unshift({
      author: author.value.trim(),
      text: text.value.trim(),
      date: new Date().toLocaleDateString(),
    });

    saveFeedback(id, feedback);
    renderComments(feedback);
    text.value = "";
  });
}
