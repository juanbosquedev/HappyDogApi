const { Dogs, Registers } = require('../../database/database');

module.exports = async (req, res) => {
  try {
    const { hostage_id, city, name, height, weight, image, personality, life_span } = req.body;

    if (!hostage_id || !name || !height || !weight || !city) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Crear el nuevo perro en la base de datos
    const newDog = await Dogs.create({
      hostage_id,
      name,
      city,
      height,
      weight,
      image,
      personality,
      life_span,
    });

    const user = await Registers.findOne({ where: { id: hostage_id } });

    const dogWithUser = {
     dataValues: { ...newDogd},
      user: user
        ? { name: user.name, email: user.email } 
        : null 
    };

    // Devolver el nuevo perro con la información del usuario en la respuesta
    res.status(201).json(dogWithUser);
  } catch (error) {
    console.error('Error creating dog:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
