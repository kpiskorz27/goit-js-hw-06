const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const items = ingredients.map((ingredient) => {
  const addIngredients = document.createElement("li");
  addIngredients.classList.add("item");
  addIngredients.textContent = ingredient;
  return addIngredients;
});
ingredientsList.append(...items);
