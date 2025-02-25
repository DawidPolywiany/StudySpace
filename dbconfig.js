const {MongoClient} = require("mongodb");
const _url = "mongodb://127.0.0.1:27017";
const _db_name = "StudySpace";

let _db;

(async () => {
    //подключаем mongoDB
    try {
        const _client = new MongoClient(_url);
        await _client.connect();
        _db = _client.db(_db_name);
        console.log("успешно подключенно к MongoDB");
    } catch (_err) {
        console.log('ошибка при подключении к MongoDB:', _err);
    }
})();

module.exports = (req, res, next) => {
    req.db = _db;
    next();
}
