const orderService = require('../services/order.service');

exports.list = async (req, res, next) => {
  try {
    const items = await orderService.list();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const item = await orderService.getOne(req.params.id);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const item = await orderService.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
};

exports.updateStatus = async (req, res, next) => {
  try {
    const item = await orderService.updateStatus(req.params.id, req.body.statut);
    res.json(item);
  } catch (err) {
    next(err);
  }
};
