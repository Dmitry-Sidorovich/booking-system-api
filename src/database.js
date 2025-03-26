require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false,
    }
);

sequelize.authenticate()
    .then(() => {
        console.log("Подключение к базе данных успешно установлено.");
    })
    .catch(error => {
        console.log("Ошибка подключения к базе данных: ", error);
    });

module.exports = sequelize;