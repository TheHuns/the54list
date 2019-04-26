const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");

// GET /
// fetches list of top users for home page
router.get("/", (req, res) => {
  User.find()
    .sort({ totalPeaks: -1 })
    .limit(5)
    .then(users => res.json(users));
});

// // GET /:id
// // fetches a specific user
// router.get("/:username", (req, res) => {
//   const { username } = req.params;

//   User.findOne({ username }).then(user => {
//     if (!user) return res.status(400).json({ msg: "User does not exist" });

//     res.json({
//       name: user.name
//     });
//   });
// });

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

// @route POST api/auth
// @desc user log in
// @acess Public
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  //    simple validation
  if ((!username, !password)) {
    return res.status(400).json({ msg: "Pleast enter all fields" });
  }

  //    check for existing user
  User.findOne({ username }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        {
          id: user.id
        },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              username: user.username
            }
          });
        }
      );
    });
  });
});

// @route GET api/auth/user
// @desc Get User data
// @acess Private
router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

// PUT /:id
// updates a user profile
router.put("/", (req, res) => {
  const { peakList, username } = req.body;

  User.findOne({ username }).then(user => {
    if (!user)
      return res
        .status(400)
        .json({ msg: "Cannot find user to update, try again later" });

    // updates peak list for user
    user.peakList = peakList;

    // saves user data
    user.save(function(err) {
      if (err)
        return res
          .status(400)
          .json({ msg: "Could not save user, try again later" });
      res.json(user);
    });
  });
});

// DELETE /:id
// deletes a user profile
router.delete("/:id", (req, res) => {
  res.send(`delete user wid id: ${req.params.id}`);
});

module.exports = router;
