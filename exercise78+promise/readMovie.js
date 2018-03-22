var mongoose = require('mongoose'),
    Movie = require('./movieModel.js');
    Actor= require('./actorsModel.js');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movieDB',{
      useMongoClient: true
    });

//db.movies.find().pretty(); mongo method
Movie.find({}, function(error,movies) {
  //mongoose method
  if (error) {
    console.log('error' + error)
  }
  else{
    console.log('we are here' + movies)
    movies.forEach(movie => console.log(movie.title));
  }
})
