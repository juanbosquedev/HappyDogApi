const { Dogs } = require('../../database/database'); 

module.exports = async (req, res) => {
  try {
    const { hostage_id, name, height, weight, image, personality, life_span } = req.body;

    if (!hostage_id || !name || !height || !weight) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

  
    const newDog = await Dogs.create({
      hostage_id,
      name,
      height,
      weight,
      image,
      personality,
      life_span,
    });
    
    res.status(201).json({ success: true, dog: newDog });
  } catch (error) {
    console.error('Error creating dog:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
