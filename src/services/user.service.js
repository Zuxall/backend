const Utilisateur = require('../models/Utilisateur');
const bcrypt = require('bcrypt');
const Joi = require('joi');

exports.userSchema = Joi.object({
  nom: Joi.string().required(),
  email: Joi.string().email().required(),
  mot_de_passe: Joi.string().required(),
  role_id: Joi.number().integer().required()
});

exports.updateUserSchema = Joi.object({
  nom: Joi.string(),
  email: Joi.string().email(),
  mot_de_passe: Joi.string(),
  role_id: Joi.number().integer()
});

exports.list = () => Utilisateur.findAll({ include: 'role' });
exports.getOne = (id) => Utilisateur.findByPk(id, { include: 'role' });
exports.create = async (data) => {
  data.mot_de_passe = await bcrypt.hash(data.mot_de_passe, 10);
  return Utilisateur.create(data);
};
exports.update = async (id, data) => {
  if (data.mot_de_passe) data.mot_de_passe = await bcrypt.hash(data.mot_de_passe, 10);
  await Utilisateur.update(data, { where: { id } });
  return exports.getOne(id);
};
exports.remove = (id) => Utilisateur.destroy({ where: { id } });
