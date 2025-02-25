const express = require("express");
const session = require("express-session");
const https = require("https");
const fs = require("fs");
const _app = express();
const _port = 443;

//Путь до ssl сертификатов
const options = {
    key:fs.readFileSync("./localhost.key"),
    cert:fs.readFileSync("./localhost.crt")
};

//ejs параметры
_app.set("view engine", "ejs");
_app.use(express.static("public"));

//настройка session
_app.use(session({
    secret: "1234567890",
    resave: false,
    saveUninitialized: true,
    coockie: {secure: true, httpOnly: true, maxAge: 999999}
}))

//подключаем mongoDB
_app.use(require("./dbconfig"));

//подключаем роуты
_app.use("/", require("./routes/index"));
_app.use("/signup", require("./routes/signup"));
_app.use("/document", require("./routes/about"));
_app.use("/forgot-password", require("./routes/forgot-password"));
_app.use("/application", require("./routes/application"));

//запуск сервера
try {
    https.createServer(options, _app).listen(_port, () => {
        console.log(`сервер запущен на https://localhost:${_port}`);
    });
} catch (_err) {
    console.log('ошибка при запуске сервера:', _err);
}
