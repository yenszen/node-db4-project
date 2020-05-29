exports.seed = function(knex) {
  return knex("instructions").insert([
    {
      step_number: 3,
      instruction: "add spices, cook chicken",
      recipe_id: 1
    },
    {
      step_number: 1,
      instruction: "marinade ingredients with seasoning",
      recipe_id: 1
    },
    {
      step_number: 2,
      instruction: "heat oil, add onion and garlic",
      recipe_id: 1
    },
    {
      step_number: 2,
      instruction: "stir tomato puree, cook pasta",
      recipe_id: 2
    },
    {
      step_number: 1,
      instruction: "heat pan, add oil, add bacon",
      recipe_id: 2
    }
  ]);
};
