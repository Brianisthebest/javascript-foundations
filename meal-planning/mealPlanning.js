function createMeal(type, calorieGoal) {
  var meal = {
    type: type,
    calorieGoal: calorieGoal,
    dishes: []
  };
  return meal;
}

function addDish(meal, dish) {
  if(dish.calories <= meal.calorieGoal) {
    meal.dishes.push(dish);
    meal.calorieGoal -= dish.calories;
  }
  return meal;
}

function calculateCalories(meal) {
  totalCal = 0;
  for(i = 0; i < meal.dishes.length; i++) {
    totalCal += meal.dishes[i].calories;
  };
  return `${meal.type} has a total of ${totalCal} calories.`;
}

module.exports = { 
  createMeal,
  addDish,
  calculateCalories,
}