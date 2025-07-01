const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Role = sequelize.define('Role', {
  id:   { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nom:  { type: DataTypes.STRING(50), unique: true, allowNull: false }
}, {
  tableName: 'role',
  timestamps: false
});

module.exports = Role;
