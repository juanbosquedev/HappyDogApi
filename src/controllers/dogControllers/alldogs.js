
const {getData} = require("./getDogData/getDogData");

module.exports = async (req, res) => {
  try {
    const data = await getData();
    console.log(data, "soy");
    if (data) {

      return res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).send("Error interno del servidor");
  }
};
