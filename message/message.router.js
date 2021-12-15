const router = require('express').Router();
const messageControl = require('./message.controller');



router.route('/send').post(messageControl.sendMessage);
router.route('/getall').get(messageControl.getMessages);


module.exports = router;