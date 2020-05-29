exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments("id");
      tbl
        .string("recipe_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments("id");
      tbl
        .string("ingredient_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("instructions", tbl => {
      tbl.increments("id");
      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();
      tbl.string("instruction", 255).notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("recipes_ingredients", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .decimal("quantity")
        .unsigned()
        .notNullable();

      tbl.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
