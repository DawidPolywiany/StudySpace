const _index = require("./index");

module.exports = async (req, res) => {
    try {
        //Получение info
        const _users = await req.db.collection("users");
        if (req.session.user) {
            const _user = await _users.findOne({_id: req.session.user});
            res.render("application", Object.assign({},
                {meta:{
                    title:"StudySpace",
                    description:""
                }}
            ));
        } else _index(req, res); //Если сессия не создана
    } catch (_err) {
        console.log("ошибка при попытке получения info аккаунта:", _err);
    }
}
