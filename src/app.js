require('dotenv').config();
const express = require('express');
const sequelize = require('./config/db');

// Charger les modèles pour associations
require('./models/Role');
require('./models/Utilisateur');
require('./models/Produit');
require('./models/Menu');
require('./models/MenuProduit');
require('./models/Commande');

const app = express();
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth.routes'));
app.use('/users', require('./routes/user.routes'));
app.use('/products', require('./routes/product.routes'));
app.use('/menus', require('./routes/menu.routes'));
app.use('/orders', require('./routes/order.routes'));

// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Erreur serveur' });
});

sequelize.sync({ alter: true })
  .then(() => app.listen(process.env.PORT || 3000, () => 
    console.log(`🚀 Serveur sur :${process.env.PORT || 3000}`)
  ));
