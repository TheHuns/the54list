const express = require("express");
const router = express.Router();
const Peak = require("../../models/Peak");

// GET /
// fetches list of top users for home page
router.get("/", (req, res) => {
  Peak.find().then(peaks => res.json(peaks));
});

module.exports = router;
