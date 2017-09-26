//Använd sedan denna method i en .js-fil där du hämtar ut data från din directors-collection
var mongoose = require('mongoose'),
    Director = require('./directorModel.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/directorDB',{
      useMongoClient: true
    });

//db.movies.find().pretty(); mongo method
Director.find({}, function(error,directors) {
  //mongoose method
  if (error) {
    console.log('error' + error);
  }
  else{
    console.log('we are here' + directors);
    //directors.forEach(director => console.log('fullName is: ' + director.fullname));
    directors.forEach(director => console.log('fullName is: ' + director.fullName()));
  }
})
// Director.findOne({
//   name: { firstName: 'Jnnes', lastName: 'Ayu' }
// }, function(error,directors) {
//   //mongoose method
//   if (error) {
//     console.log('error' + error);
//   }
//   else{
//     console.log('we are here' + directors._id);
//
//   }
// })
//directors is a Document in findOne, directors is a Array in find method
