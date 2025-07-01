const r = require('express').Router();
const ctrl = require('../controllers/order.controller');
const auth = require('../middlewares/authenticate');
const can = require('../middlewares/authorize');
const validate = require('../middlewares/validate');
const { orderSchema, statusSchema } = require('../services/order.service');

r.use(auth);

r.get('/',       can('preparation','admin'), ctrl.list);
r.get('/:id',    can('admin','preparation','accueil'), ctrl.getOne);
r.post('/',      can('accueil'), validate(orderSchema), ctrl.create);
r.patch('/:id',  can('preparation'), validate(statusSchema), ctrl.updateStatus);

module.exports = r;
