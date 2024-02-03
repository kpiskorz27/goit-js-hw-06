const createDataBtn = document.querySelector("[data-create]");
const destroyDataBtn = document.querySelector("[data-destroy]");
const boxCountInput = document.querySelector("#controls input[type='number']");
const divBoxes = document.querySelector("#boxes");

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const createBoxes = (amount) => {
  let dimension = 30;
  for (let i = 0; i < amount; i++) {
    const addBoxes = `<div class="box" style="width: ${dimension}px; height: ${dimension}px; background-color: ${getRandomHexColor()}"></div>`;
    divBoxes.innerHTML += addBoxes;

    dimension += 10;
  }
};
const destroyBoxes = () => {
  divBoxes.innerHTML = "";
};

createDataBtn.addEventListener("click", function () {
  const amount = boxCountInput.value;
  createBoxes(amount);
});

destroyDataBtn.addEventListener("click", function () {
  destroyBoxes();
});
