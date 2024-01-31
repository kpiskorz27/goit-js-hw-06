const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (blocker) {
  blocker.preventDefault();
  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Wypełnij wszystkie pola formularza!");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log("Dane formularza:", formData);

    this.reset();
  }
});
