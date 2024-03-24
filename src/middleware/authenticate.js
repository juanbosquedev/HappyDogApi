const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("authorization");
console.log(token, " soy token backHDHDHDHDH")
  if (!token) {
    return res
      .status(401)
      .json({ message: "No se proporcionó un token de autenticación" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Token de autenticación inválido" });
  }
};
