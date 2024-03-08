const { Purchases } = require("../database/database");

module.exports = async (req, res) => {
  try {
    const allPurchases = await Purchases.findAll();
    if (allPurchases.length > 0) res.status(200).json(allPurchases);
   else res.status(200).send("Esperamos por tu pedido")
  } catch (error) {
    res.status(506).json({ message: "Error interno del servidor" }, error);
  }
};
