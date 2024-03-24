const { Dogs } = require('../../database/database'); 

module.exports = async (req, res) => {
  try {
    const { hostage_id,city, name, height, weight, image, personality, life_span } = req.body;
console.log("somos data",hostage_id, city,name, height, weight, image, personality, life_span )
    if (!hostage_id || !name || !height || !weight || !city) {
      return res.status(400).json({ error: 'todos los campos son obligatorios' });
    }

  
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

    res.status(201).json(newDog );
  } catch (error) {
    console.error('Error creating dog:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
