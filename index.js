const express = require("express");
const DbConnection = require("./config/dbConfig.js");
const AppSecrate = require("./Util/AppSecrate.js");

const app = express();

app.use(express.json());

//runnig the app
const PORT = AppSecrate.Port || 8000;
try {
  app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
  });
} catch (error) {
  throw error;
}
DbConnection();
