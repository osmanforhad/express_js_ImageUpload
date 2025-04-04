const mongoose = require("mongoose");
const AppSecrate = require("../Util/AppSecrate.js");

const DbConnection = async () => {
  try {
    await mongoose.connect(AppSecrate.DB_URL).then(() => {
      console.log("Database Connection Successfull");
    });
  } catch (error) {
    throw error;
  }
};

module.exports = DbConnection;
