const successMsg = document.getElementById("fetch-api-true");
const errorMsg = document.getElementById("fetch-api-false");

const url = "https://pet-healthcare-back.onrender.com/auth/login";
// es una app que usamos en No_Country para hacer pruebas de autenticacion

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const form = document.getElementById("login-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let bodyData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  })
    .then((respuesta) => respuesta.json())
    .then((data) => {
      if (data.access_token) {
        dashboard.style.display = "block";
        loginContainer.style.display = "none";
      } else {
        dashboard.style.display = "none";
        loginContainer.style.display = "block";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      dashboard.style.display = "none";
      loginContainer.style.display = "block";
    });

});
