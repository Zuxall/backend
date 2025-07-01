const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Produit = sequelize.define('Produit', {
  id:          { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nom:         { type: DataTypes.STRING(100), allowNull: false },
  description: { type: DataTypes.TEXT },
  prix:        { type: DataTypes.DECIMAL(10,2), allowNull: false },
  disponible:  { type: DataTypes.BOOLEAN, defaultValue: true },
  image_url:   { type: DataTypes.STRING(255) }
}, {
  tableName: 'produit',
  timestamps: false
});

module.exports = Produit;
