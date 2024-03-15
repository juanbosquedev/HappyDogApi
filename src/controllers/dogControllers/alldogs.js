const { getData } = require("./getDogData/getDogData");

const { Register } = require("../../database/database");

module.exports = async (req, res) => {
  try {
    const dogsData = await getData();
    const dogsWithUserDetails = await Promise.all(
      dogsData.map(async (dog) => {
        const user = await Register.findOne({ where: { id: dog.hostage_id } });

        if (user) {
          return {
            ...dog,
            user: {
              name: user.name,
              email: user.email,
            },
          };
        } else {
          return dog;
        }
      })
    );
    return res.status(200).json(dogsWithUserDetails);
  } catch (error) {
    console.error("Error interno del servidor:", error);
    return res.status(500).send("Error interno del servidor");
  }
};
