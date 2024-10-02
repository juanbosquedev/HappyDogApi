module.exports = async (req, res) => {
  try {
    return res.status(200).send(false);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};
