//Skapa nu två filer till, som ändrar resp raderar i actors. Använd fortfarande hårdkodade värden.

var mongoose = require('mongoose'),
    Movie = require('./movieModel.js');
    Actor= require('./actorsModel.js');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movieDB',{
      useMongoClient: true
    });

Movie.remove({ _id: "59c6b98b05222615a93cff4e" }, function(err, result) {
    if (!err)
        console.log("===========Användaren raderades utan problem");
});
