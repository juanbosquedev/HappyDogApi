const { DogsRecord } = require("../../../models/index");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Missing required parameter: id" });
    }

    const dog = await DogsRecord.findByPk(id);

    if (!dog) {
      return res.status(404).json({ error: "Dog not found" }); 
    }

    const deletedCount = await DogsRecord.destroy();

    if (deletedCount === 0) {
      return res.status(500).json({ error: "Failed to delete dog" });
    }

    res.status(200).json({ success: true, message: "Dog deleted successfully" });
    
  } catch (error) {
    console.error("Error deleting dog:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
