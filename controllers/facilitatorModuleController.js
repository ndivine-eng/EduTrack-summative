const { Facilitator, Module } = require('../models');

exports.allocateModule = async (req, res) => {
  const { facilitatorId, moduleId } = req.body;

  try {
    const facilitator = await Facilitator.findByPk(facilitatorId);
    const module = await Module.findByPk(moduleId);

    if (!facilitator || !module) {
      return res.status(404).json({ error: 'Facilitator or Module not found' });
    }

    await facilitator.addModule(module); // Sequelize magic
    res.status(200).json({ message: 'Module allocated to facilitator successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
