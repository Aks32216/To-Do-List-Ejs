const express=require("express");
const bodyparser=require("body-parser");
const app=express();
const mongoose=require("mongoose");


app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended:true}));

app.use(express.static("./public"));

mongoose.connect("mongodb://localhost:27017/todolistDB",{useNewUrlParser:true});


const itemsSchema={
    name: String
};

const Item=new mongoose.model("Item",itemsSchema); 

const item1= new Item({
    name: "Welcome to do your list"
});

const item2= new Item({
    name: "Hit + button to add items to this list"
});

const item3= new Item({
    name: "check on box to delete"
});

const defaultItems=[item1,item2,item3];

Item.insertMany(defaultItems,(err)=>{
    if(err)
        console.log(err);
    else
        console.log("saved to database");
})

app.get("/",(req,res)=>{

    res.render("list",{listTitle:"Today",listItem:items});
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
