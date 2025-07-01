const menuService = require('../services/menu.service');

exports.list = async (req, res, next) => {
  try {
    const items = await menuService.list();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const item = await menuService.getOne(req.params.id);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const item = await menuService.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const item = await menuService.update(req.params.id, req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await menuService.remove(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
