//подключаемые маршруты
//маршрутизатор у express
const router = require("express").Router();
//обработчик главного маршрута
const main = require("./main");

//связываем маршруты
router.get("/", main);
//экспртируем
module.exports = router;