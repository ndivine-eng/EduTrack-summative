const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,
    dialect: 'mysql',
    logging: false,
  }
);

// Test connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(' Database connection has been established successfully.');
  } catch (error) {
    console.error(' Unable to connect to the database:', error.message);
  }
};

testConnection(); // Call the function

module.exports = sequelize;
