const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Manager } = require('../models');
require('dotenv').config();

// Register a new manager
exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if manager already exists
    const existing = await Manager.findOne({ where: { email } });
    if (existing) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create manager
    await Manager.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });

    res.status(201).json({ message: 'Manager registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login manager
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const manager = await Manager.findOne({ where: { email } });
    if (!manager) {
      return res.status(404).json({ error: 'Manager not found' });
    }

    const match = await bcrypt.compare(password, manager.password);
    if (!match) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    const token = jwt.sign(
      { id: manager.id, role: 'manager' },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
