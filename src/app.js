// avant tout : charger dotenv si tu veux tester en local
require('dotenv').config();

const { Sequelize } = require('sequelize');

// → Hardcode temporaire pour ton examen (ou fallback sur env)
const url = process.env.DATABASE_URL
          || process.env.MYSQL_PUBLIC_URL
          || "mysql://root:...@yamabiko.proxy.rw/railway";

console.log(">>> connecting to:", url);

const sequelize = new Sequelize(url, {
  dialect: 'mysql',
  logging: false,
  dialectOptions: { ssl: { rejectUnauthorized: true } }
});

sequelize.authenticate()
  .then(() => console.log("✅ DB connected via URL"))
  .catch(err => {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  });
