const request=require("request");
const path="https://www.cbr-xml-daily.ru/daily_json.js";

module.exports=(r,q)=>{
    request(path,(error,rr,body) => {
        let model={};
        if(error) console.log(error);
        else{
            model=JSON.parse(body);
            model.Date=new Date(model.Date).toLocaleDateString();
            model.Valute["RUS"]={
                ID:"R0",
                NumCode:"0",
                CharCode:"RUS",
                Nominal:1,
                Name:"Российский рубль",
                Valute:1,
                Previous:1
            }
            for(let key in model.Valute){
                let item=model.Valute[key];
                item.Valute=item.Valute/item.Nominal;
                item.DeValute=1/item.Valutel
            }
            q.render("main",model);
        }
    });
}