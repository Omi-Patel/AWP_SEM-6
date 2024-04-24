const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully!!");
  } catch (error) {
    console.log("Failed to Connect with DB..!", error);
  }
};

module.exports = connectToDB;
