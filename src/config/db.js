// src/config/db.js

require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,       // ex. 'railway'
  process.env.DB_USER,       // ex. 'root'
  process.env.DB_PASS,       // ex. 'vNmaSCbWNRElNwbw…'
  {
    host: process.env.DB_HOST,       // → doit être mysql.railway.internal
    port: process.env.DB_PORT,       // → 3306
    dialect: 'mysql',
    logging: false
  }
);

module.exports = sequelize;
