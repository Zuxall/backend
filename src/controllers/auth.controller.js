const authService = require('../services/auth.service');

exports.login = async (req, res, next) => {
  try {
    const token = await authService.login(req.body.email, req.body.mot_de_passe);
    res.json({ token });
  } catch (err) {
    next(err);
  }
};
