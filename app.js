const express = require("express");
const _app = express();
const _port = 3000;

//ejs параметры
_app.set("view engine", "ejs");
_app.use(express.static("public"));

//подключаем роуты
_app.use(require("./routes/main"));
_app.use("/", require("./routes/index"));
_app.use("/signup", require("./routes/signup"));
_app.use("/document", require("./routes/about"));
_app.use("/forgot-password", require("./routes/forgot-password"));
_app.use("/application", require("./routes/application"));

//запуск сервера
try {
    _app.listen(_port, () => {
        console.log(`сервер запущен на http://localhost:${_port}`);
    });
} catch (_err) {
    console.log('ошибка при запуске сервера:', _err);
}
