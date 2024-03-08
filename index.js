
require("dotenv").config();
const server = require("./src/server");
// const { conn } = require("./src/database/database");

const { PORT } = process.env;

const express = require('express');

const app = express();



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
