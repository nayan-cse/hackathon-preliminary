# Kitchen Buddy API Documentation

## Overview

The Kitchen Buddy API provides functionality for managing ingredients, recipes, and OCR-based recipe retrieval. This documentation outlines the endpoints, their usage, and examples.

## Base URL

```
http://localhost:3000/api
```

---

## Ingredients API

### 1. Get All Ingredients

- **Route:** /ingredients
- **Method:** GET

**Sample Response:**

```json
[
  {
    "_id": "123456",
    "name": "Flour",
    "quantity": 2,
    "unit": "kg"
  }
]
```

---

### 2. Add a New Ingredient

- **Route:** /ingredients
- **Method:** POST

**Sample Payload:**

```json
{
  "name": "Flour",
  "quantity": 2,
  "unit": "kg"
}
```

**Sample Response:**

```json
{
  "_id": "123456",
  "name": "Flour",
  "quantity": 2,
  "unit": "kg"
}
```

---

### 3. Update an Ingredient

- **Route:** /ingredients/:id
- **Method:** PUT

**Sample Payload:**

```json
{
  "quantity": 3
}
```

**Sample Response:**

```json
{
  "_id": "123456",
  "name": "Flour",
  "quantity": 3,
  "unit": "kg"
}
```

---

### 4. Delete an Ingredient

- **Route:** /ingredients/:id
- **Method:** DELETE

**Sample Response:**

```json
{
  "message": "Ingredient deleted successfully"
}
```

---

## Recipes API

### 1. Get All Recipes

- **Route:** /recipes
- **Method:** GET

**Sample Response:**

```json
[
  {
    "_id": "123456",
    "name": "Pancakes",
    "ingredients": [
      { "name": "Flour", "quantity": 2, "unit": "cups" },
      { "name": "Milk", "quantity": 1, "unit": "cup" }
    ],
    "instructions": "Mix ingredients and cook on skillet.",
    "cuisine": "American",
    "preparationTime": 15,
    "taste": "Sweet"
  }
]
```

---

### 2. Add a New Recipe

- **Route:** /recipes
- **Method:** POST

**Sample Payload:**

```json
{
  "name": "Pancakes",
  "ingredients": [
    { "name": "Flour", "quantity": 2, "unit": "cups" },
    { "name": "Milk", "quantity": 1, "unit": "cup" }
  ],
  "instructions": "Mix ingredients and cook on skillet.",
  "cuisine": "American",
  "preparationTime": 15,
  "taste": "Sweet"
}
```

**Sample Response:**

```json
{
  "_id": "123456",
  "name": "Pancakes",
  "ingredients": [
    { "name": "Flour", "quantity": 2, "unit": "cups" },
    { "name": "Milk", "quantity": 1, "unit": "cup" }
  ],
  "instructions": "Mix ingredients and cook on skillet.",
  "cuisine": "American",
  "preparationTime": 15,
  "taste": "Sweet"
}
```

---

### 3. Find Recipes by Ingredients

- **Route:** /recipes/find
- **Method:** POST

**Sample Payload:**

```json
{
  "ingredients": ["Flour", "Milk"]
}
```

**Sample Response:**

```json
[
  {
    "_id": "123456",
    "name": "Pancakes",
    "ingredients": [
      { "name": "Flour", "quantity": 2, "unit": "cups" },
      { "name": "Milk", "quantity": 1, "unit": "cup" }
    ],
    "instructions": "Mix ingredients and cook on skillet.",
    "cuisine": "American",
    "preparationTime": 15,
    "taste": "Sweet"
  }
]
```

---

## OCR API

### 1. Extract Ingredients from Image

- **Route:** /ocr
- **Method:** POST

**Request:**

- **Body:**
  - `image` (form-data, File): Upload the recipe image file.

**Sample Response:**

```json
{
  "extractedText": "Ingredients:\n- 2 cups of flour\n- 1 cup of sugar\n- 3 tablespoons of butter",
  "ingredients": ["flour", "sugar", "butter"],
  "matchedRecipes": [
    {
      "_id": "123456",
      "name": "Pancakes",
      "ingredients": [
        { "name": "Flour", "quantity": 2, "unit": "cups" },
        { "name": "Sugar", "quantity": 1, "unit": "cups" },
        { "name": "Butter", "quantity": 3, "unit": "tablespoons" }
      ],
      "instructions": "Mix and bake at 350°F.",
      "cuisine": "Dessert",
      "preparationTime": 30,
      "taste": "Sweet"
    }
  ]
}
```

---

## Environment Variables

- **`MONGO_URI`**: Your MongoDB connection string.
- **`PORT`**: Port number to run the server (default: 3000).

---

## How to Run

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Test the APIs using Postman.
