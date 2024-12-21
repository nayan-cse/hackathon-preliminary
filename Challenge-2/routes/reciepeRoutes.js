const express = require("express");
const {
  getRecipes,
  addRecipe,
  getRecipesByIngredients,
} = require("../controllers/reciepeController");

const router = express.Router();

router.get("/", getRecipes);
router.post("/", addRecipe);
router.post("/find", getRecipesByIngredients);

module.exports = router;
