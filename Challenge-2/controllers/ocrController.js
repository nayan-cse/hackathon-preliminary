const Recipe = require("../models/recipe");
const Tesseract = require("tesseract.js");

const extractTextFromImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No image file provided" });
        }

        // Use Tesseract.js to recognize text from the image
        const result = await Tesseract.recognize(req.file.path, "eng", {
            logger: (info) => console.log(info), // Optional: log OCR progress
        });

        const extractedText = result.data.text;

        // Extract ingredients from the text
        const ingredients = extractIngredientsFromText(extractedText);

        // Query database for recipes that match the extracted ingredients
        const recipes = await Recipe.find({
            "ingredients.name": {
                $in: ingredients.map((ingredient) => new RegExp(`^${ingredient}$`, "i")),
            },
        });

        res.status(200).json({
            extractedText,
            ingredients,
            matchedRecipes: recipes,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Helper function to extract ingredients from text
const extractIngredientsFromText = (text) => {
    const lines = text.split("\n");
    const ingredients = [];

    const ignoreWords = ["cups", "cup", "tablespoons", "tablespoon", "teaspoons", "teaspoon", "of"];

    lines.forEach((line) => {
        if (line.trim().startsWith("-") || line.trim().startsWith("•")) {
            const ingredient = line.split("-")[1] || line.split("•")[1];
            if (ingredient) {
                const words = ingredient.trim().toLowerCase().split(" ");
                const filteredWords = words.filter((word) => isNaN(word) && !ignoreWords.includes(word));
                const ingredientName = filteredWords.join(" ");
                if (ingredientName) {
                    ingredients.push(ingredientName.trim());
                }
            }
        }
    });

    return ingredients;
};

module.exports = { extractTextFromImage };
