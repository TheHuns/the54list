const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");

const app = express();

// Body parser
app.use(express.json());

// DB config
const db = require("./config/keys").URI;

// Connect to db
mongoose
   .connect(db, {
      useNewUrlParser: true
   })
   .then(() => console.log("Mongo DB connected"))
   .catch(err => console.log(err));

app.use("/api/users", users);

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
