//Skapa nu en fil som enbart hämtar data från databasen,
//exempelvis listar alla filmtitlar som du har i den.

var mongoose = require('mongoose'),
    Movie = require('./movie.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movie',{
      useMongoClient: true
    });

//db.movies.find().pretty(); mongo method
Movie.find({}, function(error,datas) {
  //mongoose method
  if (error) {
    console.log(error)
  }
  else{
    datas.forEach(function(data) {
      console.log(data.title)
    })
  }
})
