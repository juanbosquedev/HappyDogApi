const { Dogs } = require('../../database/database');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    // Verificar si se proporcionó un ID válido
    if (!id) {
      return res.status(400).json({ error: 'Missing required parameter: id' });
    }


    const dog = await Dogs.findByPk(id);

    if (!dog) {
      return res.status(404).json({ error: 'Dog not found' });
    }

    await dog.destroy();


    res.status(200).json({ success: true, message: 'Dog deleted successfully' });
  } catch (error) {
    console.error('Error deleting dog:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};