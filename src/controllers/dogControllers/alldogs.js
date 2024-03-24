const { getData } = require("./getDogData/getDogData");
const { Dogs, Registers } = require("../../database/database");

module.exports = async (req, res) => {
  try {
    const isEmpty = await Dogs.count() === 0;

    let dogsFromDB;
    if (isEmpty) {
      const dogsFromAPI = await getData();
      await Dogs.bulkCreate(dogsFromAPI);
      dogsFromDB = dogsFromAPI;
    } else {
      dogsFromDB = await Dogs.findAll();
    }

    const dogsWithUserDetails = await Promise.all(
      dogsFromDB.map(async (dog) => {
        if (dog.hostage_id) {
          const user = await Registers.findOne({
            where: { id: dog.hostage_id },
          });

          if (user) {
            return {
              ...dog,
              user: {
                name: user.name,
                email: user.email,
              },
            };
          }
        }

        return dog;
      })
    );

    return res.status(200).json(dogsWithUserDetails);
  } catch (error) {
    console.error("Error interno del servidor:", error);
    return res.status(500).send("Error interno del servidor");
  }
};
