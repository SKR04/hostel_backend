// import default
const express = require("express");
require("dotenv").config(); // Load environment variables
const path = require("path");

// import from files
const authRouter = require("./routes/auth");
const mongoose = require("mongoose");

// init
const app = express();
const PORT = 3000;

const DB = process.env.DB_URL;

app.use(express.json());
app.use(authRouter);

// connections
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
