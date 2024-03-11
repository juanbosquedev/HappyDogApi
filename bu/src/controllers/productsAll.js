const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    if(data.length >0)return res.status(200).json(data);
  } catch (error) {
    res.status(506).json({ message: "Error interno del servidor" }, error);
  }
};
