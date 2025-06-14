const express = require("express"); // Importing express to create a router for AI-related routes
const aiController = require("../controllers/ai.controller"); // Importing the AI controller to handle requests related to AI functionalities

const router = express.Router(); // Creating a new router instance for AI routes

router.post("/get-review", aiController.getReview); // Defining a POST route for "/get-review" that will call the getReview method from the AI controller

module.exports = router; // Exporting the router so it can be used in the main application file
