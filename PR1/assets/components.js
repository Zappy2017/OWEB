const components = {
  navbar: `
        <nav class="navbar">
            <div class="link-container">
                <a href="index.html"><i class="fa-solid fa-plane"></i> &nbsp; Destinations</a>
                <a href="guide.html"><i class="fa-solid fa-location-dot"></i> &nbsp; Guide</a>
                <a href="survey.html"><i class="fa-solid fa-check"></i> &nbsp;  Survey</a>
            </div>
            <a href="page.html"><i class="fa-regular fa-user"></i></a>
        </nav>
    `,

  footer: `
        <footer class="bg-dark text-white mt-5 py-4">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <h5 class="font-weight-bold mb-1">
                  <i class="fa-solid fa-earth-europe mr-2"></i>
                  TravelPlanner
                </h5>
                <p class="text-muted mb-0">
                  Discover new places. Create unforgettable memories.
                </p>
              </div>

              <div class="col-md-6 text-center text-md-right">
                <a href="index.html" class="text-white mx-2">Home</a>
                <a href="index.html" class="text-white mx-2">Destinations</a>
                <a href="page.html" class="text-white mx-2">About</a>
              </div>
            </div>

            <hr class="border-secondary my-3">

            <div class="text-center text-muted small">
              &copy; ${new Date().getFullYear()} TravelPlanner. All rights reserved.
            </div>
          </div>
        </footer>
    `,
};

document.querySelectorAll("[data-component]").forEach((element) => {
  const name = element.dataset.component;

  if (components[name]) {
    element.innerHTML = components[name];
  }
});
