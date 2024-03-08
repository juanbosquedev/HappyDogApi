
require("dotenv").config();
// const server = require("./src/server");
// const { conn } = require("./src/database/database");

const { PORT } = process.env;

const express = require('express');

const app = express();


// Ruta para responder "Hola"
app.get('/', (req, res) => {
  res.send('Hola yo');
});

app.get('/next', (req, res) => {
  res.send('Hola ya');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
