const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,  // Make sure this reads the password
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('DB connected successfully');
  } catch (err) {
    console.error('DB connection failed:', err);
  }
};

module.exports = { sequelize, connectDB };
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_HOST:', process.env.DB_HOST);
