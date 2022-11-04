const mongoose = require("mongoose");
const config = require("config");
// const db = config.get("mongoURI");
require('dotenv').config();


const connectDB = () => {
  
    mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useCreatIndex: true,
      useUnifiedTopology: true
    })
    .then(console.log("MongoDB is Connected..."));
};

module.exports = connectDB;
