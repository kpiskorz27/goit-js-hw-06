const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
ingredients.forEach((ingredient) => {
  const addIngredients = document.createElement("li");
  addIngredients.classList.add("item");
  addIngredients.textContent = ingredient;
  document.querySelector("#ingredients").appendChild(addIngredients);
});
