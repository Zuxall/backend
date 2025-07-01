const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Role = require('./Role');

const Utilisateur = sequelize.define('Utilisateur', {
  id:            { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nom:           { type: DataTypes.STRING(100), allowNull: false },
  email:         { type: DataTypes.STRING(150), unique: true, allowNull: false },
  mot_de_passe:  { type: DataTypes.STRING(255), allowNull: false }
}, {
  tableName: 'utilisateur',
  timestamps: false
});

Utilisateur.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });
module.exports = Utilisateur;
