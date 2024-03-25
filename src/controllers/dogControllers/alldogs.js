const { Dogs, Registers } = require("../../database/database");
const { getData } = require("./getDogData/getDogData");

module.exports = async (req, res) => {
  try {
    const isEmpty = (await Dogs.count()) === 0;

    let dogsFromDB;
    if (isEmpty) {
      const dogsFromAPI = await getData();
      dogsFromDB = await Dogs.bulkCreate(dogsFromAPI);

      const userCount = await Registers.count();
      if (userCount === 0) {
        // default first user
        await Registers.create({
          name: "Juan",
          email: "juan@hotmail.com",
          password: "123",
          passwordValidate: "123",
        });
      }
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
