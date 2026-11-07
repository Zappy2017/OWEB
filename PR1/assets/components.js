const components = {
  navbar: `
        <nav class="navbar">
            <div class="link-container">
                <a href="index.html"><i class="fa-solid fa-plane"></i> &nbsp; Destinations</a>
                <a href="page.html"><i class="fa-solid fa-check"></i> &nbsp;  Visited</a>
                <a href="page.html"><i class="fa-solid fa-location-dot"></i> &nbsp; Guide</a>
            </div>
            <a href="page.html"><i class="fa-regular fa-user"></i></a>
        </nav>
    `,

  footer: `
        <footer>
            <p>My website</p>
        </footer>
    `,
};

document.querySelectorAll("[data-component]").forEach((element) => {
  const name = element.dataset.component;

  if (components[name]) {
    element.innerHTML = components[name];
  }
});
