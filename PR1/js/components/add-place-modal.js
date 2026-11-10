export function initPopup(getPlaces, setPlace, renderPlaces) {
  const placeSelect = document.getElementById("placeSelect");
  const addPlaceForm = document.getElementById("addPlaceForm");

  function populatePlaces() {
    const places = getPlaces();

    placeSelect.innerHTML = "";

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

  renderPlaces();
  populatePlaces();
}

export default initPopup;
