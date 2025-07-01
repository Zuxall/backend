const Menu = require('../models/Menu');
const Joi = require('joi');

exports.menuSchema = Joi.object({
  nom: Joi.string().required(),
  description: Joi.string().allow('')
});
exports.updateMenuSchema = Joi.object({
  nom: Joi.string(),
  description: Joi.string().allow('')
});

exports.list = () => Menu.findAll();
exports.getOne = (id) => Menu.findByPk(id);
exports.create = (data) => Menu.create(data);
exports.update = async (id, data) => {
    await Menu.update(data, { where: { id } });
    return exports.getOne(id);
};
exports.remove = (id) => Menu.destroy({ where: { id } });
