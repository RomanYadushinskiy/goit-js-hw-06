const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');
const ingredientsArray = [];

ingredients.forEach((ingredient) => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  liRef.classList.add = ("item");
  ingredientsArray.push(liRef);
})

ingredientsList.append(...ingredientsArray);

