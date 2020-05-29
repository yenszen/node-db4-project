const express = require("express");

const db = require("./recipes-model");

const router = express.Router();

router.get("/", (req, res) => {
  db.getRecipes()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not retrieve list of recipes" });
    });
});

router.get("/:id/ingredients", (req, res) => {
  const { id } = req.params;

  db.getShoppingList(id)
    .then(ingredients => {
      if (ingredients.length > 0) {
        res.status(200).json(ingredients);
      } else {
        res
          .status(404)
          .json({ message: "The specified recipe ID does not exist" });
      }
    })
    .catch(err => {
      res.status(500).json({
        message: "Could not retrieve list of ingredients for this recipe"
      });
    });
});

router.get("/:id/instructions", (req, res) => {
  const { id } = req.params;

  db.getInstructions(id)
    .then(instructions => {
      if (instructions.length > 0) {
        res.status(200).json(instructions);
      } else {
        res
          .status(404)
          .json({ message: "The specified recipe ID does not exist" });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({
          message: "Could not retrieve list of instructions for this recipe"
        });
    });
});

module.exports = router;
