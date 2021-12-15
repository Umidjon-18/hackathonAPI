const router = require('express').Router();
const userController = require('./user.controller');

router.route('/signup')
.post(userController.createUser);

router.route('/signin')
.post(userController.findUser);



module.exports = router;