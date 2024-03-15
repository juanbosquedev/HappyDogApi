const { getData } = require("./getDogData/getDogData");
const { Dogs, Registers } = require('../../database/database'); 

module.exports = async (req, res) => {
  try {
    // Obtener los perros de la base de datos
    const dogsFromDB = await Dogs.findAll();

    // Obtener los perros de la función getData()
    const dogsFromAPI = await getData();

    // Combinar los perros de la base de datos y los obtenidos de la función getData()
    const allDogs = [...dogsFromDB, ...dogsFromAPI];

    // Para cada perro, obtener los detalles del usuario si está disponible
    const dogsWithUserDetails = await Promise.all(
      allDogs.map(async (dog) => {
        if (dog.hostage_id) {
          // Buscar el usuario en la base de datos
          const user = await Registers.findOne({ where: { id: dog.hostage_id } });

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
        
        return dog; // Si no se encuentra el usuario, retornar el perro sin detalles de usuario
      })
    );

    return res.status(200).json(dogsWithUserDetails);
  } catch (error) {
    console.error("Error interno del servidor:", error);
    return res.status(500).send("Error interno del servidor");
  }
};
