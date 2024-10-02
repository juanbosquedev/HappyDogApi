const { User } = require("../../../models/index.js");

module.exports = async (req, res) => {
  try {
    const userCount = await User.count();
    if (userCount === 0) {
      await User.create({
        name: "Juan",
        email: "juan@hotmail.com",
        password: "123",
        passwordValidate: "123",
      });
    }
  } catch (error) {
    console.error("Error interno del servidor:", error);
    return res.status(500).send("Error interno del servidor");
  }
};

// const { User, DogsRecord } = require("../../models/index.js");
// const { fetchDogsData } = require("./getDogData/getDogData");

// // Se crean dogs y usuarios en la primer llamada
// module.exports = async (req, res) => {
//   try {
//     const isDogTableEmpty = (await DogsRecord.count()) === 0;

//     let dogsFromDB;

//     if (isDogTableEmpty) {
//       const dogsFromAPI = await fetchDogsData();

//       // First, check if any users exist
//       const userCount = await User.count();
//       if (userCount === 0) {
//         // Create a default first user
//         await User.create({
//           name: "Juan",
//           email: "juan@hotmail.com",
//           password: "123",
//         });
//       }

//       // Ensure the dogs have a valid userId before bulk creating
//       const defaultUser = await User.findOne({ where: { id: 1 } });

//       const dogsToInsert = dogsFromAPI.map(dog => ({
//         ...dog,
//         userId: defaultUser.id,  // Ensure the dog is linked to the user
//       }));

//       dogsFromDB = await DogsRecord.bulkCreate(dogsToInsert);
//     } else {
//       dogsFromDB = await DogsRecord.findAll();
//     }

//     // Retrieve user details along with dogs
//     const dogsWithUserDetails = await Promise.all(
//       dogsFromDB?.map(async (dog) => {
//         const user = await User.findOne({
//           where: { id: dog.userId },
//           include: {
//             model: DogsRecord,
//           }
//         });

//         if (user) {
//           return {
//             ...dog.toJSON(),  // Convert Sequelize instance to JSON
//             user: {
//               name: user.name,
//               email: user.email,
//             },
//           };
//         }
//         return dog;
//       })
//     );

//     return res.status(200).json(dogsWithUserDetails);
//   } catch (error) {
//     console.error("Error interno del servidor:", error);
//     return res.status(500).send("Error interno del servidor");
//   }
// };
