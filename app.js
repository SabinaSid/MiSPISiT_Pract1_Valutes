//подключаем модули
//веб-фреймворк
const express = require("express");
const routes = require("./routes");

let app = express();
const port = 80;

//подключаем шаблонизатор
app.set("view engine","hbs");


app.set("view options", {layout:"layout"});
//подключаем маршруты
app.use("/", routes);
app.use(express.static(__dirname +"/css"));

app.listen(port,() =>{
    console.log("app run on http://localhost");
});
