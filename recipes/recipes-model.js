const db = require("../data/db-config");

function getRecipes() {
  return db("recipes");
}

function getShoppingList(id) {
  return db("recipes_ingredients as ri")
    .join("ingredients as i", "ri.ingredient_id", "i.id")
    .select("i.ingredient_name", "ri.quantity")
    .where({ recipe_id: id })
    .orderBy("ri.quantity");
}

function getInstructions(id) {
  return db("instructions")
    .select("step_number", "instruction")
    .where({ recipe_id: id })
    .orderBy("step_number");
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};
