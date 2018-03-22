//du skriver två nya .js-filer som sparar resp läser från actors,
//på samma sätt som du tidigare sparade och läste från movies.
var mongoose = require('mongoose'),
    Movie = require('./movieModel.js');
    Actor= require('./actorsModel.js');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movieDB',{
      useMongoClient: true
    });

//db.movies.find().pretty(); mongo method
Actor.find({}, function(error,actors) {
  //mongoose method
  if (error) {
    console.log('error' + error)
  }
  else{
    console.log('we are here' + actors)
    actors.forEach(actor => console.log(actor.name))
  }
})
