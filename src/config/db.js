// src/config/db.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

// On récupère l'URL complète dans DATABASE_URL
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("❌ DATABASE_URL n'est pas défini !");
  process.exit(1);
}

const sequelize = new Sequelize(connectionString, {
  dialect: 'mysql',
  dialectOptions: {
    // si tu as besoin de SSL (Railway l’active parfois sur PUBLIC_URL)
    // ssl: { rejectUnauthorized: true }
  },
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
