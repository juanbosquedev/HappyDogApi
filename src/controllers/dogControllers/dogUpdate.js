const { Dogs } = require("../../database/database");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, height, weight, image, personality, life_span } = req.body;

    if (!name && !height && !weight && !image && !personality && !life_span) {
      return res
        .status(400)
        .json({ error: "At least one field to update is required" });
    }

  
    let dog = await Dogs.findByPk(id);

   
    if (!dog) {
      return res.status(404).json({ error: "Dog not found" });
    }

    if (name) dog.name = name;
    if (height) dog.height = height;
    if (weight) dog.weight = weight;
    if (image) dog.image = image;
    if (personality) dog.personality = personality;
    if (life_span) dog.life_span = life_span;

 
    await dog.save();


    res.status(200).json({ success: true, dog });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
