// // controllers/modeController.js
// const db = require("../models");
// const Mode = db.Mode;

// // Create a new mode
// exports.createMode = async (req, res) => {
//   try {
//     const { name } = req.body;

//     // Generate ID manually like 'M001'
//     const count = await Mode.count();
//     const id = `M${String(count + 1).padStart(3, '0')}`;

//     const newMode = await Mode.create({ id, name });
//     res.status(201).json(newMode);
//   } catch (error) {
//     res.status(500).json({ message: "Error creating mode", error: error.message });
//   }
// };

// // Get all modes
// exports.getAllModes = async (req, res) => {
//   try {
//     const modes = await Mode.findAll();
//     res.status(200).json(modes);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching modes", error: error.message });
//   }
// };

// // Get mode by ID
// exports.getModeById = async (req, res) => {
//   try {
//     const mode = await Mode.findByPk(req.params.id);
//     if (!mode) {
//       return res.status(404).json({ message: "Mode not found" });
//     }
//     res.status(200).json(mode);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching mode", error: error.message });
//   }
// };

// // Update a mode
// exports.updateMode = async (req, res) => {
//   try {
//     const mode = await Mode.findByPk(req.params.id);
//     if (!mode) {
//       return res.status(404).json({ message: "Mode not found" });
//     }

//     mode.name = req.body.name || mode.name;
//     await mode.save();

//     res.status(200).json(mode);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating mode", error: error.message });
//   }
// };

// // Delete a mode
// exports.deleteMode = async (req, res) => {
//   try {
//     const mode = await Mode.findByPk(req.params.id);
//     if (!mode) {
//       return res.status(404).json({ message: "Mode not found" });
//     }

//     await mode.destroy();
//     res.status(200).json({ message: "Mode deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting mode", error: error.message });
//   }
// };
