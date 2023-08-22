function createFavoriteFood(dish, ingredients, isSpicy) {
  return {
    name: dish.dish,
    ingredients: dish.ingredients,
    isSpicy: dish.isSpicy,
    timesOrdered: 0
  }
};

function commentOnSpiciness(dish) {
  if(dish.isSpicy == true) {
    return `Wow, this ${dish.name} is so spicy!`
  } else {
    return `Phew, this ${dish.name} is not very spicy.`
  }
};

function orderFood(dish) {
  dish.timesOrdered += 1
  return dish
}

function createShoppingList(dishes) {
  shoppingList = []
  for(i = 0; i < dishes.length; i++) {
    shoppingList.push(dishes[i].ingredients)
  }
  return shoppingList.flat();
}
module.exports = { 
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList
};