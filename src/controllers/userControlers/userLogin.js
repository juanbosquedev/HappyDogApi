const { Register } = require("../../database/database");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFromDB = await Register.findOne({ where: { email, password } });

    if (userFromDB) {
    
      await userFromDB.update({ logged: true });
      return res.status(200).send(userFromDB);
    } else {
      return res.status(401).send("Credenciales inválidas. Inténtalo de nuevo.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};
