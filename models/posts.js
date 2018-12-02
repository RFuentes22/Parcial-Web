var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var posts = new Schema({
  
    nombre: String,
    creador: String,
   
  });
module.exports =  mongoose.model("post",posts)