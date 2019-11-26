var express=require("express")
const app=express();
var path=require("path");
var bodyparser=require("body-parser");
var emprouter=require("./src/route/employeerouter.js");

app.set("view engine","ejs");
app.set("views","./src/views");

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.use("/employee",emprouter);

app.get("/",function(req,res){
    res.render("home");
}
);
app.listen(7000,()=>{
    console.log("istento port 7000")
});