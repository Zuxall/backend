const router = require('express').Router();
const authCtrl = require('../controllers/auth.controller');
const validate = require('../middlewares/validate');
const { loginSchema } = require('../services/auth.service');

router.post('/login', validate(loginSchema), authCtrl.login);

module.exports = router;
