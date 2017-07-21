var express = require('express');
var router = express.Router();
//var zpitdataService = require('../services/zpitdataService');
var waterfall = require('async-waterfall');
var zpitModel = require('../models/zpit');

router.delete('/zpitdata/:action/:zipcode', function(req, res,next){
      console.log("URL /zpitdata/:action/:zipcode action::"+ req.params.action +"and zipcode::"+ req.params.zipcode);
      zpitModel.findOneAndRemove({zipcode:req.params.zipcode},function(err, result){
            if(err) {
                throw err;
            } 
            console.log("Result for::"+ req.params.zipcode +"::"+ JSON.stringify(result));
            res.json(result);
        });        
      
});

router.put('/zpitdata/:action/:zipcode', function(req, res,next){
      console.log("URL /zpitdata/:action/:zipcode action"+req.params.action +"and zipcode"+req.params.zipcode);
      
      	zpitModel.find(req.params.zipcode, function (err, zpit) {  
      		if(err) {
                throw err;
            } 
            console.log("Result for"+ req.params.zipcode +"::"+ JSON.stringify(zpit));
            zpit.state = req.body.state || zpit.state;
            zpit.city = req.body.city || zpit.city;
            zpit.retired = req.body.retired || zpit.retired;
            zpit.disabled = req.body.disabled || zpit.disabled;

            zpit.save(function (err, zpit) {
            if (err) {
                res.status(500).send(err)
            }
            res.send(zpit);

        });

      	});     
        
      
});

router.get('/zpitdata/:zipcode', function(req, res,next){
       console.log("/zpitdata/:zipcode::"+ req.params.zipcode);
       zpitModel.find({zipcode:req.params.zipcode},function(err, zpit){
            if(err) {
                throw err;
            } 
            console.log("Result for"+ req.params.zipcode +"::"+ JSON.stringify(zpit));
            res.json(zpit);
        });   
});


router.get('/zpitdata', function(req, res,next){
       console.log("/zpitdata/ ** retrieve all"+Date.now());
       zpitModel.find(function(err, zpit){
            if(err) {
                throw err;
            } 
            res.json(zpit);
        });   
});

// mongoimport -d zpit -c zpitdata1 --type csv --file test_data.csv --headerline
// });
 //      var result = zpitdataService.getAllZpitData();
//       console.log("get all zpit dataresult"+result);
//       res.render('zpitdata.html');
       // zpitModel.find(function(err, zpit){
       //      if(err) {
       //          throw err;
       //      } 
       //      console.log("result all 2"+ JSON.stringify(zpit));
       //      res.setHeader("Type-content", "application/json");
       //      res.setStatus = 200;
       //      res.json(zpit);
       //  });   

module.exports = router;
