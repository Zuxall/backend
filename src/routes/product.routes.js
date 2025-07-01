const r = require('express').Router();
const ctrl = require('../controllers/product.controller');
const auth = require('../middlewares/authenticate');
const can = require('../middlewares/authorize');
const validate = require('../middlewares/validate');
const { productSchema, updateProductSchema } = require('../services/product.service');

r.use(auth);

r.get('/', ctrl.list);
r.get('/:id', ctrl.getOne);
r.post('/', can('admin'), validate(productSchema), ctrl.create);
r.put('/:id', can('admin'), validate(updateProductSchema), ctrl.update);
r.delete('/:id', can('admin'), ctrl.remove);

module.exports = r;
