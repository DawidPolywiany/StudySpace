const send_email = require("../email.js");
module.exports = async (req, res) => {
    //ищем пользователя
    try {
        const _users = await req.db.collection("users");
        const _user = await _users.findOne({
            email:req.body.email,
            password:req.body.password
        });
        if (_user) {
            if (req.body.code) {
                //Проверяем activation код
                res.json({confirm:(_user.activation_code == req.body.code)});

            } else {
                //Создание кода активации
                const _activation_code = Math.floor(Math.random() * (1000000 - 100000) + 100000);
                send_email(_user.email, `Hello, ${_user.username}!`, `
                    <h1 style="text-align:center;">Activation code: ${_activation_code}</h1>
                `);
                await _users.updateOne({_id:_user._id}, {$set: {activation_code: _activation_code}});
                //Высылаем post с формой
                res.json({sended:true});
            }
        } else {
            //Неправильный username или password
            res.json({sended:false});
        }
    } catch (_err) {
        console.log("Ошибка при попытке найти пользователя", _err);
    }
}
