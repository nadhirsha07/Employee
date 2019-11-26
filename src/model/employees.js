var mongoose=require("mongoose");
var schema=mongoose.schema;
var empschema=new mongoose.Schema({
    Eid:{type:String,require:true},
    Name:String,
    Salary:Number
});
var empmodel=mongoose.model("employee",empschema,"emp_table");

module.exports=empmodel;