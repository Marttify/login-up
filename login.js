const successMsg = document.getElementById("fetch-api-true");
const errorMsg = document.getElementById("fetch-api-false");

const URL = "https://pet-healthcare-back.onrender.com/auth/login";

// Inputs
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Contenedores
const loginContainer = document.getElementById("loginContainer");
const dashboard = document.getElementById("dashboard");

// Form
const form = document.getElementById("login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const bodyData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.access_token) {
        dashboard.style.display = "block";
        loginContainer.style.display = "none";
      } else {
        dashboard.style.display = "none";
        loginContainer.style.display = "block";
      }
    })
    .catch(() => {
      dashboard.style.display = "block";
      loginContainer.style.display = "none";
    });
});