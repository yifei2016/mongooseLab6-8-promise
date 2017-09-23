

var mongoose = require('mongoose'),
    Director = require('./model.js');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/directorDB',{
  useMongoClient: true
});


var director = new Director({
  name: {
    firstName: 'Jnnes',
    lastName: 'Ayu'
  }
});

director.save(function (err,data){
      if(err)
        console.log(err)
      console.log('data is ' + data)
});
