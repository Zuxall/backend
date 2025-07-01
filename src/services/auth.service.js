const Utilisateur = require('../models/Utilisateur');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

exports.loginSchema = Joi.object({
  email: Joi.string().email().required(),
  mot_de_passe: Joi.string().required()
});

exports.login = async (email, mot_de_passe) => {
  const user = await Utilisateur.findOne({ where:{ email }, include: 'role' });
  if (!user) throw { status:401, message:'Utilisateur non trouvé' };
  const valid = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
  if (!valid) throw { status:401, message:'Mot de passe incorrect' };
  const payload = { id:user.id, role:user.role.nom };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn:'1h' });
};
