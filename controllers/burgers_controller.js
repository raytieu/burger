const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

// Create routes and input logic
router.get("/", function(req, res) {
  
});

router.post("/api/burgers", function(req, res) {
  
});

router.put("/api/burgers/:id", function(req, res) {
  
});

router.delete("/api/burgers/:id", function(req, res) {
  
});

// Export routes for server.js to use.
module.exports = router;
