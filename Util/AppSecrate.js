const dotenv = require("dotenv");

dotenv.config();

const DB_URL = process.env.MONGO_URL;
const Port = process.env.PORT;
const Image_Upload_Path = process.env.Image_Upload;

module.exports = { DB_URL, Port, Image_Upload_Path };
