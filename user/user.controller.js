const userModel = require('./user.model');

async function createUser(req, res) {
    try {
        const detect = await userModel.findOne(req.body);
        if (detect) {
            res.json({ exist: "Bunday foydalanuvchi oldindan mavjud, iltimos boshqa nom kiriting !" })
        } else {
            const result = await userModel.create(req.body);
            if (result) {
                res.status(200).json(result);
            }
        }
    } catch (error) {
        res.json({ error: error.body })
    }
}

async function findUser(req, res) {

    try {
        user = await userModel.findOne({
            username: req.body.username,
            password: req.body.password
        });
        if (user != []) {
            return res.status(200).json(user);
        }
    } catch (error) {
        return res.status(404).json(error);
    }

}



module.exports = {
    createUser,
    findUser
}