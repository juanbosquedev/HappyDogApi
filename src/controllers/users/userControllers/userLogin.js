const { User } = require("../../../models/index.js");

const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFromDB = await User.findOne({ where: { email, password } });

    if (!userFromDB) {
      return res
        .status(400)
        .json({ error: "Credenciales inválidas. Inténtalo de nuevo." });
    }

    const token = jwt.sign({ id: userFromDB.id }, process.env.JWT_SECRET, {
      expiresIn: "60m",
    });

    const userResponse = { ...userFromDB.toJSON(), logged: true };

    return res.status(200).json({ user: userResponse, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
