exports.seed = function(knex) {
  return knex("ingredients").insert([
    { ingredient_name: "butter" },
    { ingredient_name: "olive oil" },
    { ingredient_name: "garlic" },
    { ingredient_name: "bacon" },
    { ingredient_name: "chicken" }
  ]);
};
