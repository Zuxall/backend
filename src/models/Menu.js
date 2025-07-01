const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Menu = sequelize.define('Menu', {
  id:          { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nom:         { type: DataTypes.STRING(100), allowNull: false },
  description: { type: DataTypes.TEXT }
}, {
  tableName: 'menu',
  timestamps: false
});

module.exports = Menu;
