/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const hamburger = document.querySelector(".login");
const form = document.querySelector("form.signup");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const errorMessage = document.querySelector(".error-message");
function myFunction() {
  if (hamburger.style.display === "flex") {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "flex";
  }
}
form.addEventListener("submit", (e) => {
  if (password.value != confirmPassword.value) {
    console.log(password.value + " and " + confirmPassword.value);
    e.preventDefault();
    // password.classList.add("error");
    // confirmPassword.classList.add("error");
    password.previousElementSibling.classList.add("error");
    confirmPassword.previousElementSibling.classList.add("error");

    password.previousElementSibling.classList.replace("valid", "error");
    confirmPassword.previousElementSibling.classList.replace("valid", "error");

    errorMessage.style.display = "block";
  } else {
    e.preventDefault();

    password.previousElementSibling.classList.add("valid");
    confirmPassword.previousElementSibling.classList.add("valid");

    password.previousElementSibling.classList.replace("error", "valid");
    confirmPassword.previousElementSibling.classList.replace("error", "valid");
    errorMessage.style.display = "none";
  }
});
