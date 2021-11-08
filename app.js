const express=require("express");
const bodyparser=require("body-parser");
var items=["Study"];
const app=express();

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));



app.get("/",(req,res)=>{
    var options = { weekday: 'long', month: 'long', day: 'numeric' };
    var today  = new Date();
    var day=today.toLocaleDateString("en-US", options);
    res.render("list",{Day:day,listItem:items});
})

app.post("/",(req,res)=>{
    item=req.body.nextItem;
    items.push(item);
    res.redirect("/");
})


app.listen(3000,()=>{
    console.log("listening to port 3000");
})
