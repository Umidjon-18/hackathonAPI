const doctorModel = require('./doctor.model');

async function createDoctor(req, res) {
    try {
        const detect = await doctorModel.findOne(req.body);
        if (detect) {
            res.json({ exist: "Bunday doktor nomi oldindan mavjud, iltimos boshqa nom kiriting !" })
        } else {
            const result = await doctorModel.create(req.body);
            if (result) {
                res.status(200).json(result);
            }
        }
    } catch (error) {
        res.json({ error: error.body })
    }
}

async function findDoctor(req, res) {

    try {
        doctor = await doctorModel.findOne({
            firstname: req.body.username,
            lastname: req.body.lastname,
            password: req.body.password
        });
        if (doctor != []) {
            return res.status(200).json(doctor);
        }
    } catch (error) {
        return res.status(404).json(error);
    }

}



module.exports = {
    createDoctor,
    findDoctor
}