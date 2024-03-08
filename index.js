
const express = require('express');

const app = express();


// Ruta para responder "Hola"
app.get('/', (req, res) => {
  res.send('Hola yo');
});

// Iniciar el servidor
app.listen(8000, () => {
  console.log(`Server listening on port: ${8000}`);
});
