const { DogsRecord } = require("../../../models/index.js");
const { fetchDogsData } = require("./getDogData/getDogData.js");

module.exports = async (req, res) => {
  try {
    const dogCount = await DogsRecord.count();

    let dogsFromDB;
    if (dogCount === 0) {
      const dogsFromAPI = await fetchDogsData();
      dogsFromDB = await DogsRecord.bulkCreate(dogsFromAPI);
    }
  } catch (error) {
    console.error("Error interno del servidor:", error);
    return res.status(500).send("Error interno del servidor");
  }
};
