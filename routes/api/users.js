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
   res.send(`grab single user with id: ${req.params.id}`);
});

// POST /:id
// creates a new user
router.post("/", (req, res) => {
   res.send("create user");
});

// PUT /:id
// updates a user profile
router.put("/:id", (req, res) => {
   res.send(`update user profile with id:, ${req.params.id}`);
});

// DELETE /:id
// deletes a user profile
router.delete("/:id", (req, res) => {
   res.send(`delete user wid id: ${req.params.id}`);
});

module.exports = router;
