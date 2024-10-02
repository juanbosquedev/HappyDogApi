const { User } = require("../../../models/index.js");

module.exports = async (req, res) => {
  try {
    const userCount = await User.count();
    if (userCount === 0) {
      await User.create({
        name: "Juan",
        email: "juan@hotmail.com",
        password: "123",
        passwordValidate: "123",
      });
    }
  } catch (error) {
    console.error("Error interno del servidor:", error);
    return res.status(500).send("Error interno del servidor");
  }
};
