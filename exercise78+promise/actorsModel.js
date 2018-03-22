var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    // Movie = require('./movieModel.js');

    var actorSchema = new Schema({
          name: String,
          gender: String
    });

    module.exports = mongoose.model('Actor', actorSchema)
