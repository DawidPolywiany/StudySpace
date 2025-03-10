const nodemailer = require("nodemailer");

const _transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"studyspace2025su@gmail.com",
        pass:"oikgfwmrhhurhtds"
    }
});

//функция отправки
module.exports = async (to, subject, html) => {
    //отправка
    try {
        /*
        const info = await _transporter.sendMail({
            from:"studyspace2025su@gmail.com",
            to:to,
            subject:subject,
            html:html
        });
        */
        console.log(html);
        console.log("Успешно отправленно email:", to);
    } catch (_err) {
        console.log("Ошибка при отправке email:", _err);
    }
};
