const { Registers } = require("../../database/database");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFromDB = await Registers.findOne({ where: { email, password } });
    if (!userFromDB) {
      return res
        .status(400)
        .json({ error: "Credenciales inválidas. Inténtalo de nuevo." });
    }
    if (userFromDB) {
      await userFromDB.update({ logged: true });
      return res.status(200).send(userFromDB);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};
