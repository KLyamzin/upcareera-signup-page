/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const hamburger = document.querySelector(".login");
const form = document.querySelector("form.signup");

function myFunction() {
  if (hamburger.style.display === "flex") {
    hamburger.style.display = "none";
  } else {
    hamburger.style.display = "flex";
  }
}
form.addEventListener("submit", (e) => {
  const password = document.querySelector(".password");
  const confirmPassword = document.querySelector(".confirmPassword");
  const errorMessage = document.querySelector(".error-message");
  console.log("password recognized");
  if (password !== confirmPassword) {
    console.log("Passwords did not match. Please try again.");
    e.preventDefault();
    password.classList.add("error");
    confirmPassword.classList.add("error");
    errorMessage.style.display = "block";
  }
});
