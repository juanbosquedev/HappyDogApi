require("dotenv").config();
const { sequelize } = require("./src/database/connection-db.js");
const server = require("./src/server");
const { PORT } = process.env;

require("./src/models/index.js");
require("./src/models/association/associations.js");
const { fillDbDogs, fillDbUsers } = require("./src/utils/index.js");

(async function main() {
  try {
    await sequelize.sync({ force: false });
    await fillDbUsers();
    await fillDbDogs();
    console.log("Login, conection has been established successfully.");
    server.listen(PORT);
    console.log(`Server lingening on: ${PORT}`);
  } catch (error) {
    console.error(`Unable to connect to the database: ${error}`);
  }
})();
