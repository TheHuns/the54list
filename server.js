const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const users = require("./routes/api/users");

const app = express();

// Body parser
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").URI;

// Connect to db
mongoose
   .connect(db)
   .then(() => console.log("Mongo DB connected"))
   .catch(err => console.log(err));

app.use("/api/users", users);

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
