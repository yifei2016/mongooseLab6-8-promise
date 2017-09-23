var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var directorSchema = new Schema({
  name:{
    firstName: {
      type: String,
      required: 'director must have a title',
      unique: true
    },
    lastName: {
      type: String,
      unique: true
    }
  }
});

directorSchema.methods.fullName = function() {
    return this.firstName + " " + this.lastName;
}
//Använd sedan denna method i en .js-fil där du hämtar ut data från din directors-collection

module.exports = mongoose.model('Director', directorSchema)
