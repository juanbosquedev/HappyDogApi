const users = require("../../users.json");
const fs = require("fs");

const { Users } = require("../database/database");

module.exports = async (req, res) => {
  const jsonData = fs.readFileSync("users.json", "utf8");

  const usersToCreate = JSON.parse(jsonData);

  try {
    const test = await Users.findAll();

    if (test.length === 0) {
      await Users.bulkCreate(usersToCreate);
    }

    const { user, password } = req.body;
    const userFromDB = await Users.findOne({ where: { user, password } });

    if (userFromDB) {
      userFromDB.logged = true;
      await userFromDB.save();
      return res.status(200).send(userFromDB);
    } else {
      const userData = { user, password, logged: false };
      return res.status(401).send(userData);
    }
  } catch (error) {
    res.status(500).send("Error interno del servidor");
  }
};
