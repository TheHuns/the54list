const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");

// GET /
// fetches list of top users for home page
router.get("/", (req, res) => {
  User.find()
    .limit(5)
    .then(users => res.json(users));
});

// GET /:id
// fetches a specific user
router.get("/:username", (req, res) => {
  const { username } = req.params;

  User.findOne({ username }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    res.json({
      name: user.name
    });
  });
});

// @route POST api/users
// @desc Register new user
// @acess Public
router.post("/", (req, res) => {
  const { name, username, password, confirmPassword } = req.body;

  //    simple validation
  if ((!name, !username, !password, !confirmPassword)) {
    return res.status(400).json({ msg: "Pleast enter all fields" });
  }

  // check that they entered that same password twice
  if (password !== confirmPassword) {
    return res.status(400).json({ msg: "Passwords do not match" });
  }

  //    check for existing user
  User.findOne({ username }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });

    const newUser = new User({
      name,
      username,
      password
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          res.json({
            user: {
              id: user.id,
              name: user.name,
              username: user.username
            }
          });
        });
      });
    });
  });
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
