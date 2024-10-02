const { User, DogsRecord } = require("../../../models/index.js");

module.exports = async (req, res) => {
  try {
    const {
      hostage_id,
      city,
      name,
      height,
      weight,
      image,
      personality,
      life_span,
    } = req.body;

    if (!hostage_id || !name || !height || !weight || !city) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newDog = await DogsRecord.create({
      hostage_id,
      name,
      city,
      height,
      weight,
      image,
      personality,
      life_span,
    });

    const dogWithUser = await DogsRecord.findOne({
      where: { id: newDog.id },
      include: {
        model: User,
        as: "user",
        attributes: ["name", "email"],
      },
    });

    res.status(201).json(dogWithUser);
  } catch (error) {
    console.error("Error creating dog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
