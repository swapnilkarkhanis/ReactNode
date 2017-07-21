var express = require('express');
var router = express.Router();
var taskservice = require('../services/taskService');

router.get('/', function(req, res,next){
      var greet = taskservice.sayHello('swapnil');
      console.log("printing sayHello"+greet);
      res.render('index.html', {hello: greet});
});
module.exports = router;
