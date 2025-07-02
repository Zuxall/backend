// src/config/db.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("❌ DATABASE_URL n'est pas défini !");
  process.exit(1);
}

const sequelize = new Sequelize(url, {
  dialect: 'mysql',
  logging: false
});

sequelize
  .authenticate()
  .then(() => console.log("✅ DB connected via DATABASE_URL"))
  .catch(err => {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  });

module.exports = sequelize;
require('dotenv').config();
const { Sequelize } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) {
  console.error("❌ DATABASE_URL n'est pas défini !");
  process.exit(1);
}

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'mysql',
  logging: false
});

sequelize
  .authenticate()
  .then(() => console.log("✅ DB connected via DATABASE_URL"))
  .catch(err => {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  });

module.exports = sequelize;
