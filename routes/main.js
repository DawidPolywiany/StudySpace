const connect_to_db = require("../dbconfig/db");

let _db, _documents;

(async () => {
    //подключаем mongoDB
    _db = await connect_to_db();
    const _main = _db.collection("main");
    
    _documents = _db.collection("documents");
})();

module.exports = (req, res, next) => {
    req.db = _db;
    req.documents = _documents;

    next();
}
