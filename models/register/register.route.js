;(function () {
  'use strict'
  var express = require('express')
  var router = express.Router()
  var Model = require('./register.schema.js')

  router.get('/', function (req, res, next) {
    Model.find({}).exec(function (err, results) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(results)
      }
    })
  })

  router.post('/', function (req, res, next) {
    var obj = new Model(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
  })

///////////////////////////////////////////////////////////Login

   router.post('/login',function(req,res){
      console.log(req.body.username + " " +req.body.  password);  
       member.find({ username : req.body.username , password : req.body.password }).exec(function (err, results) {
       if (err) {
         res.status(500).send(err);
       } else {
       
        res.send(results)
        console.log(results)
       }
     }); 

  module.exports = router
})()
