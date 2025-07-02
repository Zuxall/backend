const { Sequelize } = require('sequelize');
require('dotenv').config();

// Utilisation de l'URL unique :
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: { /* ssl: { rejectUnauthorized: true } si besoin */ },
  logging: false
});

module.exports = sequelize;
