document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector("#container");

  createElementQuickly("p", "Hey I'm Red", "red", container);
  createElementQuickly("h3", "Hey I'm a blue h3", "blue", container);
  pinkDiv = createElementQuickly("div", "", "pink-div", container);
  createElementQuickly("h1", "I'm in a div", "", pinkDiv);
  createElementQuickly("p", "ME TOO!", "", pinkDiv);

  const myFavouriteFoods = [
    "Pumpkin ravioli",
    "Burrata",
    "Vegeterian beef stew",
  ];
  
  const newDiv = createElementQuickly("div", "", "", container);
  createElementQuickly("h2", "My favourite foods:", "", newDiv);
  const ul = createElementQuickly("ul", "", "", newDiv);
  myFavouriteFoods.forEach((food) => {
    createElementQuickly("li", food, "food-item", ul);
  });
});

function createElementQuickly(elementType, text, className, container) {
  const newElement = document.createElement(elementType);
  newElement.textContent = text;
  if (className !== "") {
    newElement.classList.add(className);
  }
  container.appendChild(newElement);
  return newElement;
}
