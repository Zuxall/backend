const router = require('express').Router();
const ctrl = require('../controllers/user.controller');
const auth = require('../middlewares/authenticate');
const can = require('../middlewares/authorize');
const validate = require('../middlewares/validate');
const { userSchema, updateUserSchema } = require('../services/user.service');

router.use(auth);

router.get('/', can('admin'), ctrl.list);
router.get('/:id', can('admin'), ctrl.getOne);
router.post('/', can('admin'), validate(userSchema), ctrl.create);
router.put('/:id', can('admin'), validate(updateUserSchema), ctrl.update);
router.delete('/:id', can('admin'), ctrl.remove);

module.exports = router;
