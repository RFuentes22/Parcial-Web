var express = require('express');
var router = express.Router();
var redControler = require('../controller/redcontroler');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//insert
router.post('/', redControler.create);


module.exports = router;
