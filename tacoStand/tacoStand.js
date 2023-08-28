function createIngredient(name = 'unknown', price = 0.00) {
  var ingredient = {
    name: name,
    price: price
  };
  return ingredient;
}

function createTaco(name = 'custom', ingredients = []) {
  var taco = {
    name: name,
    ingredients: ingredients
  };
  return taco;
}

function addIngredientToTaco(taco, ingredient) {
  taco.ingredients.push(ingredient);
  return taco;
}

function calculatePrice(taco) {
  var total = 0;
  for(i = 0; i < taco.ingredients.length; i++) {
    total += taco.ingredients[i].price
  };
  return total;
}

module.exports = {
  createIngredient,
  createTaco,
  addIngredientToTaco,
  calculatePrice,
}
