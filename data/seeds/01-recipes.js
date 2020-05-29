exports.seed = function(knex) {
  return knex("recipes").insert([
    { recipe_name: "Butter Chicken" },
    { recipe_name: "Classic Lasagne" }
  ]);
};
