const Ingredient = require("../models/ingredient");

// Get all ingredients
const getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a new ingredient
const addIngredient = async (req, res) => {
  const { name, quantity, unit } = req.body;

  try {
    const newIngredient = new Ingredient({ name, quantity, unit });
    await newIngredient.save();
    res.status(201).json(newIngredient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an ingredient
const updateIngredient = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedIngredient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an ingredient
const deleteIngredient = async (req, res) => {
  const { id } = req.params;

  try {
    await Ingredient.findByIdAndDelete(id);
    res.status(200).json({ message: "Ingredient deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getIngredients, addIngredient, updateIngredient, deleteIngredient };
