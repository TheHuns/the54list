const express = require("express");
const router = express.Router();

// GET /
// fetches list of top users for home page
router.get("/", (req, res) => {
   res.send("list of top users");
});

// GET /:id
// fetches a specific user
router.get("/:id", (req, res) => {
   res.send("grab single user", req.params.id);
});

// POST /:id
// creates a new user
router.get("/", (req, res) => {
   res.send("create user");
});

// PUT /:id
// updates a user profile
router.get("/", (req, res) => {
   res.send("update user profile");
});

// DELETE /:id
// deletes a user profile
router.get("/", (req, res) => {
   res.send("delete user");
});

module.exports = router;
