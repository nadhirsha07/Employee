var express=require("express");
var mongoose=require("mongoose");
var emprouter=express.Router();

var url="mongodb://127.0.0.1:27017/Sam"
var empmodel=require("../model/employees.js")

mongoose.connect(url,(err)=>{
    if (err) throw err
    else{console.log("Connection Established")
    }
});

emprouter.route("/newemp")
.get((req,res)=>{
    res.render("newemp")
});

emprouter.route("/editemp")
.get((req,res)=>{
    res.render("editemp")
});
emprouter.route("/dltemp")
.get((req,res)=>{
    res.render("dltemp")
});
emprouter.route("/viewemp")
.get((req,res)=>{
    res.render("viewemp")
});
emprouter.route("/srchemp")
.get((req,res)=>{
    res.render("srchemp")
});

emprouter.route("/save")
.post((req,res)=>{
   var newemp=new empmodel();
   newemp.Eid=req.body.Eid;
   newemp.Name=req.body.Name;
   newemp.Salary=req.body.Salary;
    newemp.save((err)=>{
        if (err) throw err;
        else console.log("Data added Successfully")
    })
    res.send("Data added")
});


module.exports=emprouter;