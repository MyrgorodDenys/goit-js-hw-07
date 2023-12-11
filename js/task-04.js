const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailInput = loginForm.querySelector('input[type="email"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');
  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };
    console.log(formData);
    emailInput.value = "";
    passwordInput.value = "";
  }
});
