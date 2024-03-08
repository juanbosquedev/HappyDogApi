const { Purchases } = require("../database/database");

module.exports = async (req, res) => {
  try {
    const { purchas } = req.body;
    const pur = purchas.purcheseOrder.map(async (it) => {
      const obj = {
        userID: purchas.userID,
        id: it.id,
        title: it.title,
      };

      await Purchases.create(obj);
    });
    if (pur.length > 0) res.status(200).send("succesful purchase");
  } catch (error) {
    res.status(506).json({ message: "Error interno del servidor" }, error);
  }
};
