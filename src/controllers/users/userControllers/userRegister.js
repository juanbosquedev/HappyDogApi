const { User } = require("../../../models/index.js");

module.exports = async (req, res) => {
  const { name, email, password, passwordValidate } = req.body;

  if (!name || !email || !password || !passwordValidate) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  if (password !== passwordValidate) {
    return res.status(400).json({ error: "Las contraseñas no coinciden" });
  }

  try {
    const newUser = await User.create({
      name,
      email,
      password,
    });
    return newUser && res.status(201).json(true);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};
