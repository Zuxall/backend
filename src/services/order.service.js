const Commande = require('../models/Commande');
const Joi = require('joi');

exports.orderSchema = Joi.object({
  utilisateur_id: Joi.number().integer().required()
});

exports.statusSchema = Joi.object({
  statut: Joi.string().valid('créée','préparée','livrée').required()
});

exports.list = () => Commande.findAll({ include: 'utilisateur' });
exports.getOne = (id) => Commande.findByPk(id, { include: 'utilisateur' });
exports.create = (data) => Commande.create(data);
exports.updateStatus = async (id, statut) => {
  await Commande.update({ statut }, { where: { id } });
  return exports.getOne(id);
};
