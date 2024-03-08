const { Purchases } = require("../database/database");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = await Purchases.findOne({
      where: { id },
    });
    const deleted = await Purchases.destroy({
      where: { id },
    });
    deleted === 1 ? res.status(204).json(filter) : res.status(204).json(deleted);
  } catch (error) {
    console.log(error, " error");
    res.status(506).json({ message: "Error interno del servidor" }, error);
  }
};
