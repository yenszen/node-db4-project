exports.seed = function(knex) {
  return knex("recipes_ingredients").insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 6.2 },
    { recipe_id: 1, ingredient_id: 2, quantity: 7.5 },
    { recipe_id: 1, ingredient_id: 3, quantity: 8.0 },
    { recipe_id: 1, ingredient_id: 5, quantity: 9.3 },
    { recipe_id: 2, ingredient_id: 2, quantity: 10.1 },
    { recipe_id: 2, ingredient_id: 3, quantity: 1.2 },
    { recipe_id: 2, ingredient_id: 4, quantity: 5.0 }
  ]);
};
