require("dotenv").config();
const server = require("./src/server");
const { sequelize, Register, Login, Dog } = require("./src/database/database");
const { PORT } = process.env;


async function main() {
  try {
    await sequelize.sync({force:false});
    console.log("Login, conection has been established successfully.") ;
    server.listen(PORT);
    console.log("Server lingening");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
