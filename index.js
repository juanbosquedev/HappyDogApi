require("dotenv").config();
const server = require("./src/server");
const { conn } = require("./src/database/database");

const { PORT } = process.env;

async function main() {
  try {
    await conn.sync();
    console.log("Connection has been established successfully.");
    server.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
