const { Registers } = require("../../database/database");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFromDB = await Registers.findOne({ where: { email, password } });

    if (!userFromDB) {
      return res.status(400).json({ error: "Credenciales inválidas. Inténtalo de nuevo." });
    }

    // Generar un token JWT con una expiración de 60 minutos
    const token = jwt.sign({ id: userFromDB.id }, process.env.JWT_SECRET, { expiresIn: '60m' });

    // Marcar al usuario como autenticado (opcional)
    await userFromDB.update({ logged: true });

    // Devolver el token JWT junto con los datos del usuario
    return res.status(200).json({ userFromDB, token });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
};
