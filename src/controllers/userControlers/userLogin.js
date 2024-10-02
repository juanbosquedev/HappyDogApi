const { Registers } = require("../../database/database");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const userFromDB = await Registers.findOne({ where: { email, password } });
const userFromDB = await Registers.findAll();
    return res.status(200).json(userFromDB);
    // if (!userFromDB) {
    //   return res
    //     .status(400)
    //     .json({ error: "Credenciales inválidas. Inténtalo de nuevo." });
    // }

    // const token = jwt.sign({ id: userFromDB.id }, process.env.JWT_SECRET, {
    //   expiresIn: "60m",
    // });

    // await userFromDB.update({ logged: true });

    // return res.status(200).json({ userFromDB, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
