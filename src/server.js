const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json());
server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(require("./routes/index"));

server.use("*", (req, res)=>{
  res.status(404).send("Not Found")
});
server.use((err, req, res, next) => {
res.status(err.statusCode || 500).send({
  error: true,
  message: err.message,
});
});

module.exports = server;

