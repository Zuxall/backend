const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Menu = require('./Menu');
const Produit = require('./Produit');

const MenuProduit = sequelize.define('MenuProduit', {}, {
  tableName: 'menu_produit',
  timestamps: false
});

Menu.belongsToMany(Produit, { through: MenuProduit, foreignKey: 'menu_id', otherKey: 'produit_id' });
Produit.belongsToMany(Menu, { through: MenuProduit, foreignKey: 'produit_id', otherKey: 'menu_id' });

module.exports = MenuProduit;
