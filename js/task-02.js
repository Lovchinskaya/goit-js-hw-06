const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = ingredients.map(title => {
  const  listElement = document.createElement('li');
  listElement.textContent = title;
  listElement.classList.add("item");
  return listElement;
});
console.log(listEl);

const ingredientsPart = document.querySelector('#ingredients');
ingredientsPart.append(...listEl);