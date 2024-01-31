const changeFontSize = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

changeFontSize.addEventListener("input", function () {
  textElement.style.fontSize = `${this.value}px`;
});
