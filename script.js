"use strict";

document.getElementById("get-meal").addEventListener("click", function () {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((response) => response.json())
    .then((data) => {
      const meal = data.meals[0];
      const mealDiv = document.getElementById("meal");
      mealDiv.innerHTML = `
  <h2>${meal.strMeal}</h2>
  <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
  <h3>Ingredientes</h3>
  <ul>
    ${getIngredientes(meal).join("")}
    </ul>
    <h3>Instruções</h3>
    <p>${meal.strInstructions}</p>
  `;
    })
    .catch((error) => {
      console.log("Ocorreu um erro:", error);
    });
});

function getIngredientes(meal) {
  const ingredientes = [];
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredientes.push(
        `<li>${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}</li>`
      );
    } else {
      break;
    }
  }
  return ingredientes;
}
