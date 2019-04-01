const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const peaks = require("./routes/api/peaks");
const config = require("config");

const app = express();

// Body parser
app.use(express.json());

// DB config
const db = config.get("URI");

// Connect to db
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("Mongo DB connected"))
  .catch(err => console.log(err));

app.use("/api/users", users);
app.use("/api/peaks", peaks);

const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
