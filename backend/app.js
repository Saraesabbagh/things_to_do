const express = require("express");
const mongoose = require('mongoose');
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();

// routes
// const users = require("./routes/api/users");
const authRoutes =require("./routes/auth");
const todos = require("./routes/api/todos");
//app
const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};

// Connect Database
connectDB();

// middlewares/ use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cors
app.use(cors());

// routes
// users
app.get("/", (req, res) => res.send("Hello world!"));

app.use("/api", authRoutes);

// todos
app.use("/api/todos", todos);

const port = 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
