const router = require('express').Router();
const doctorController = require('./doctor.controller');

router.route('/add').post(doctorController.createDoctor);
router.route('/find').get(doctorController.findDoctor);




module.exports = router;