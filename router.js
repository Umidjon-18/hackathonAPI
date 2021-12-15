const router = require('express').Router();
const userRouter = require('./user/user.router');
const doctorRouter = require('./doctor/doctor.router');
const messageRouter = require('./message/message.router');

router.route('/').get((req, res)=>{
    res.render('home');
})


router.use('/api/user/', userRouter);
router.use('/api/doctor/', doctorRouter);
router.use('/api/message/', messageRouter);

module.exports=router;