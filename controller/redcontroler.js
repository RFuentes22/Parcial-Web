var mongoose = require('mongoose');
var posts = require("../models/posts");

const redcontroller = {};

redcontroller.create = (function (req, res) {
    let data = {

        nombre: req.body.nombre,
        creador: req.body.creador
    }

    if (data.nombre && data.creador && data.nombre != "" && data.creador != "") {
     
        let newpost = new posts(data);
        newpost.save(function (err) {
            if (err) {
                res.json({code:500},err);
                throw err;
            }
            console.log('added !');
            res.send("ok");
        });
    }
    else {
        res.status(500);
        res.json({code:400},err);
    }

});

redcontroller.getAll = (function(req,res){
    
    posts.find({},function(err,posts){
        if (err) {
            console.log("error");
            res.json({code:500},err);
            throw err;
        }
        
        res.send("ok");
    });
});

redcontroller.get = (function(req,res){
    posts.findOne(req.body.id,function(){
        if (err) {
            console.log("error");
            res.json({code:500},err);
            throw err;
        }
        
        res.send("ok");
    })
});

redcontroller.update = (function(req,res){
    let data = {
       
        nombre: req.body.nombre,
        creador: req.body.creador
    };
    posts.findByIdAndUpdate(data.id,data,function(){
        if (err) {
            console.log("error");
            res.status(500);
            res.json({code:500},err);
            throw err;
            
        }
        res.json({ok:true},old,data);
        res.send("ok");
    });
});

redcontroller.delete = (function(req,res){
    posts.findOneAndDelete(req.body.id,function(err,elimando){
        if (err) {
            console.log("error");
            res.status(500);
            res.json({code:500},err);
            throw err;
            
        }
    
        res.send("ok");
    });
}

);

module.exports=redcontroller;