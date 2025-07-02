require('dotenv').config();
const { Sequelize } = require('sequelize');

const url = process.env.DATABASE_URL
          || process.env.MYSQL_PUBLIC_URL
          || "mysql://root:BKaSGLkFHSgbMeDfRuZTWuKhVTQXIUSJ@yamabiko.proxy.rw/railway";

console.log(">>> connecting to:", url);

const sequelize = new Sequelize(url, {
  dialect: 'mysql',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

sequelize.authenticate()
  .then(() => console.log("✅ DB connected via URL"))
  .catch(err => {
    console.error("❌ DB connection failed:", err);
    process.exit(1);
  });

module.exports = sequelize;
