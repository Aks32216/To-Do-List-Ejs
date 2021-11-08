const express=require("express");
const bodyparser=require("body-parser");
let items=["Study"];
let works=[];
const app=express();

app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("./public"));

app.get("/",(req,res)=>{
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let today  = new Date();
    let day=today.toLocaleDateString("en-US", options);
    res.render("list",{listTitle:day,listItem:items});
})

app.post("/",(req,res)=>{
    let item=req.body.nextItem;
    if(req.body.list==="Today's")
    {
        works.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Today's Work",listItem:works});
})

app.post("/work",(req,res)=>{
    let item=req.body.nextItem;
    if(item!=="")
        works.push(item);
    res.redirect("/work");
})


app.listen(3000,()=>{
    console.log("listening to port 3000");
})
