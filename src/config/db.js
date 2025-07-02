// src/config/db.js (ou en haut de src/app.js)
const { Sequelize } = require('sequelize');

// → Hardcode temporaire pour ton examen :
const url = "mysql://root:BKaSGLkFHSgbMeDfRuZTWuKhVTQXIUSJ@yamabiko.proxy.rw/railway";

console.log(">>> USING HARDCODED URL:", url);

const sequelize = new Sequelize(url, {
  dialect: 'mysql',
  logging: false,
  dialectOptions: {
    ssl: { rejectUnauthorized: true }
  }
});

sequelize.authenticate()
  .then(() => console.log("✅ DB connected via HARDCODED URL"))
  .catch(err => {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  });

module.exports = sequelize;
