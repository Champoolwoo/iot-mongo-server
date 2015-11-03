;(function () {
  'use strict'
  var modelName = 'iot'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({

    timestamp: { type: Date, default: Date.now },

    id_iot: {
      type: String,
      required: true
    },

    temperature: {
      type: String,
      required: true
    },

    relative_humidity: {
      type: String,
      required: true
    },

  })

  module.exports = mongoose.model(modelName, schema)

})()
