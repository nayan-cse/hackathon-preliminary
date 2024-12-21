const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const ingredientRoutes = require("./routes/ingrediantRoutes");
const recipeRoutes = require("./routes/reciepeRoutes");
const ocrRoutes = require("./routes/ocrRoutes");

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
app.use(express.json());

// API routes
app.use("/api/ingredients", ingredientRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/ocr", ocrRoutes);

app.get("/", (req, res) => {
    res.send("Kitchen Buddy API is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 
