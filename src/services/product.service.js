const Produit = require('../models/Produit');
const Joi = require('joi');

exports.productSchema = Joi.object({
  nom: Joi.string().required(),
  description: Joi.string().allow(''),
  prix: Joi.number().required(),
  disponible: Joi.boolean(),
  image_url: Joi.string().uri()
});

exports.updateProductSchema = Joi.object({
  nom: Joi.string(),
  description: Joi.string().allow(''),
  prix: Joi.number(),
  disponible: Joi.boolean(),
  image_url: Joi.string().uri()
});

exports.list = () => Produit.findAll();
exports.getOne = (id) => Produit.findByPk(id);
exports.create = (data) => Produit.create(data);
exports.update = async (id, data) => {
    await Produit.update(data, { where: { id } });
    return exports.getOne(id);
};
exports.remove = (id) => Produit.destroy({ where: { id } });
