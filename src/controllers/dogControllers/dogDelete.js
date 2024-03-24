const { Dogs } = require('../../database/database');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: 'Missing required parameter: id' });
    }
const dud = await Dogs.findAll();
console.log("total pre", dud)

    const dog = await Dogs.findByPk(id);
    console.log(dog, " idbd")

    if (!dog) {
      return res.status(408).json({ error: 'Dog not found' });
    }

    await dog.destroy();
    const did = await Dogs.findAll();
    console.log("total post", did)

    res.status(200).json({ success: true, message: 'Dog deleted successfully' });
  } catch (error) {
    console.error('Error deleting dog:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
