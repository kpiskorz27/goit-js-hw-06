const categoriesList = document.querySelectorAll("#categories li.item");
const numberOfCategories = categoriesList.length;
console.log(`Number of categories: ${numberOfCategories}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("ul li");
  const numberOfItems = categoryItems.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${numberOfItems}`);
});
