const loginForm = document.querySelector(".form");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Zapobiegaj odświeżaniu strony po przesłaniu formularza

  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Wypełnij wszystkie pola formularza.");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log("Dane formularza:", formData);

    // Wyczyść wartości pól input
    this.reset();
  }
});
