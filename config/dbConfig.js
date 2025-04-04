const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("Database Connection Successfull");
    });
  } catch (error) {
    throw error;
  }
};

module.exports = DbConnection;
