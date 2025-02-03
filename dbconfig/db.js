const {MongoClient} = require("mongodb");
const _url = "mongodb://127.0.0.1:27017";
const _db_name = "StudySpace";

async function connect_to_db() {
    try {
        const _client = new MongoClient(_url);
        await _client.connect();
        const _db = _client.db(_db_name);
        console.log("успешно подключенно к MongoDB");

        return _db;
    } catch (_err) {
        console.log('ошибка при подключении к MongoDB:', _err);
    }
}

module.exports = connect_to_db;
