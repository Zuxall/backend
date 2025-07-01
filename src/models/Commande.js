const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Utilisateur = require('./Utilisateur');

const Commande = sequelize.define('Commande', {
  id:            { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  date_creation: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  statut:        { type: DataTypes.ENUM('créée','préparée','livrée'), defaultValue: 'créée' }
}, {
  tableName: 'commande',
  timestamps: false
});

Commande.belongsTo(Utilisateur, { foreignKey: 'utilisateur_id', as: 'utilisateur' });
module.exports = Commande;
