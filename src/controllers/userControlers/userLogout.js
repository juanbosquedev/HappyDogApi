const { Registers } = require("../../database/database");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFromDB = await Registers.findOne({ where: { email, password } });

    if (userFromDB) {
    
      await userFromDB.update({ logged: false });
      return res.status(200).send(false);
    } else {
      return res.status(401).send("Algo salió mal");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};
