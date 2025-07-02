require('dotenv').config();  // ok même si .env local a disparu

const { Sequelize } = require('sequelize');

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("❌ DATABASE_URL manquant !");
  process.exit(1);
}
console.log(">>> connecting to:", url);

const sequelize = new Sequelize(url, {
  dialect: 'mysql',
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log("✅ DB connected via DATABASE_URL"))
  .catch(err => {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  });

module.exports = sequelize;
