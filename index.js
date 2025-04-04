const express = require("express");
const DbConnection = require("./config/dbConfig.js");

const app = express();

app.use(express.json());

//runnig the app
const PORT = process.env.PORT || 8000;
try {
  app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
  });
} catch (error) {
  throw error;
}
DbConnection();
