const express = require("express");
const multer = require("multer");
const { extractTextFromImage } = require("../controllers/ocrController");

const router = express.Router();

// Configure Multer for image uploads
const upload = multer({ dest: "uploads/" });

router.post("/", upload.single("image"), extractTextFromImage);

module.exports = router;
