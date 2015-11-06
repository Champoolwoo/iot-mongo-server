;(function () {
  'use strict'
  var modelName = 'register'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({

    user_name: {
      type: String,
      required: true
    },

    password: {
      type: String,
      required: true
    },

 
  })

  module.exports = mongoose.model(modelName, schema)

})()