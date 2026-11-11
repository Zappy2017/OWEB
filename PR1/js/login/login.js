const SESSION_KEY = "travel-user";

const form = document.getElementById("login-form");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");
const errorBox = document.getElementById("login-error");
const toggleBtn = document.getElementById("toggle-password");

/* ---------- mock auth ---------- */

const mockUsers = [
  { id: 1, name: "Demo User", email: "demo@travel.com", password: "demo123" },
];

function login(email, password) {
  const user = mockUsers.find(
    (u) => u.email === email.toLowerCase() && u.password === password,
  );

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  const { password: _omit, ...safeUser } = user;
  localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser));
  return safeUser;
}

/* ---------- ui ---------- */

function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove("d-none");
}

toggleBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  toggleBtn.innerHTML = `<i class="fa-solid ${isHidden ? "fa-eye-slash" : "fa-eye"}"></i>`;
  toggleBtn.setAttribute(
    "aria-label",
    isHidden ? "Hide password" : "Show password",
  );
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  errorBox.classList.add("d-none");

  if (!form.checkValidity()) {
    form.classList.add("was-validated");
    return;
  }

  try {
    login(emailInput.value.trim(), passwordInput.value);
    window.location.href = "index.html";
  } catch (error) {
    showError(error.message);
    passwordInput.value = "";
  }
});

// already logged in -> skip the login page
if (localStorage.getItem(SESSION_KEY)) {
  window.location.href = "index.html";
}
