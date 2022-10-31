const express = require("express");
const connectDB = require("./config/db");
const bp = require("body-parser");
var cors = require("cors");

// routes
const users = require("./routes/api/users");
const todos = require("./routes/api/todos");

const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};

// Connect Database
connectDB();

// use body-parser
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

// cors
app.use(cors({ origin: true, credentials: true }));

// routes
// users
app.get("/", (req, res) => res.send("Hello world!"));

app.use("/api/users", users);

// todos
app.use("/api/todos", todos);

const port = 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
