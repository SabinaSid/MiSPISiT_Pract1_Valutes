const express=require("express");
const routes=require("./rotes");

let app=express();
const port=80;
app.set("view engine","hbs");
app.set("view options",{layot:"layout"});
app.use("/",routes);
app.listen(port,()=>{
    console.log("app run on http://localhost");
})