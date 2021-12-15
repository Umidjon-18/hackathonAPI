const messageModel = require('./message.model');

async function sendMessage(req, res){
    try {
        const result = await messageModel.create(req.body);
            res.json({natija:"Xabar yuborildi."});
    } catch (error) {
        res.json({error: error.body});
    }
}

async function getMessages(req, res){
    try {
        const result = await messageModel.find({});
        res.json(result);
    } catch (error) {
        res.json({error: error.body});
    }
}






module.exports = {
    sendMessage,
    getMessages
}
