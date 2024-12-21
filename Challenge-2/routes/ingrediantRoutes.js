const express = require("express");
const {
  getIngredients,
  addIngredient,
  updateIngredient,
  deleteIngredient,
} = require("../controllers/ingrediantController");

const router = express.Router();

router.get("/", getIngredients);
router.post("/", addIngredient);
router.put("/:id", updateIngredient);
router.delete("/:id", deleteIngredient);

module.exports = router;
