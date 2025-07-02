require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
app.use(express.json());

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  }
);

sequelize.authenticate()
  .then(() => console.log("DB connected"))
  .catch(err => console.error("DB error", err));

app.get('/ping', (req, res) => res.send('pong'));

module.exports = app;
