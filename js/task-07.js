const changeFontSize = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");
textElement.style.fontSize = `${changeFontSize.value}px`;
changeFontSize.addEventListener("input", function () {
  textElement.style.fontSize = `${this.value}px`;
});
