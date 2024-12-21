const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            unit: { type: String, required: true },
        },
    ],
    instructions: { type: String, required: true },
    cuisine: { type: String },
    preparationTime: { type: Number }, // in minutes
    taste: { type: String }, // e.g., sweet, spicy, savory
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
