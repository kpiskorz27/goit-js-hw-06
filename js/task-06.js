const checkValidation = document.getElementById("validation-input");

checkValidation.addEventListener("blur", function () {
  const validLength = parseInt(checkValidation.getAttribute("data-length"), 10);
  const inputValue = checkValidation.value.trim().length;

  if (inputValue === validLength) {
    checkValidation.classList.remove("invalid");
    checkValidation.classList.add("valid");
  } else {
    checkValidation.classList.remove("valid");
    checkValidation.classList.add("invalid");
  }
});
