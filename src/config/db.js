// src/config/db.js
require('dotenv').config();   // ne chargera rien en prod car .env n'existe plus
const { Sequelize } = require('sequelize');

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("❌ DATABASE_URL manquant !");
  process.exit(1);
}

const sequelize = new Sequelize(url, {
  dialect: 'mysql',
  logging: false
});

sequelize.authenticate()
  .then(() => console.log("✅ DB connected via DATABASE_URL"))
  .catch(err => {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  });

module.exports = sequelize;
