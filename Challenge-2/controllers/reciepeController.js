const Recipe = require("../models/recipe");

// Get all recipes
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a new recipe
const addRecipe = async (req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get recipes based on available ingredients
const getRecipesByIngredients = async (req, res) => {
    const { ingredients } = req.body; // List of ingredient names
    try {
        const recipes = await Recipe.find({
            ingredients: {
                $elemMatch: { name: { $in: ingredients } },
            },
        });
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getRecipes, addRecipe, getRecipesByIngredients };
