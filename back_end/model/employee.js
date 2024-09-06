var mongoos = require('mongoose')
var schema =mongoos.Schema({
    name: String,
    age: Number,
    deot: String,
    sal:Number
})
var EmplyeeModel =mongoos.model("employee", schema);
module.exports= EmplyeeModel;