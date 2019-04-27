const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const peaks = require("./routes/api/peaks");
const config = require("config");
const path = require("path");

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

app.use("https://the54list.herokuapp.com/api/users", users);
app.use("/api/peaks", peaks);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));
