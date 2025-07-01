const r = require('express').Router();
const ctrl = require('../controllers/menu.controller');
const auth = require('../middlewares/authenticate');
const can = require('../middlewares/authorize');
const validate = require('../middlewares/validate');
const { menuSchema, updateMenuSchema } = require('../services/menu.service');

r.use(auth);

r.get('/', ctrl.list);
r.get('/:id', ctrl.getOne);
r.post('/', can('admin'), validate(menuSchema), ctrl.create);
r.put('/:id', can('admin'), validate(updateMenuSchema), ctrl.update);
r.delete('/:id', can('admin'), ctrl.remove);

module.exports = r;
