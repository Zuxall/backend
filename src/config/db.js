require('dotenv').config();
const { Sequelize } = require('sequelize');

// On priorise DATABASE_URL, sinon on tombe sur MYSQL_PUBLIC_URL
const url = process.env.DATABASE_URL || process.env.MYSQL_PUBLIC_URL;
if (!url) {
  console.error("❌ DATABASE_URL et MYSQL_PUBLIC_URL manquantes !");
  process.exit(1);
}

console.log(">>> Using DB URL:", url);

const sequelize = new Sequelize(url, {
  dialect: 'mysql',
  logging: false,
  dialectOptions: {
    // Certaines infra Railway / proxies exigent SSL forcé :
    ssl: { rejectUnauthorized: true }
  }
});

sequelize.authenticate()
  .then(() => console.log("✅ DB connected via URL"))
  .catch(err => {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  });

module.exports = sequelize;
