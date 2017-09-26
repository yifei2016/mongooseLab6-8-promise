//Skapa därefter en fil (app.js) som använder sig av din model för att skriva data
//till din databas. Denna fil ska koppla upp sig mot databasen, skriva in data och meddela
//när den gjort det (räcker med console.log).
//Du kan nu också nöja dig med att skriva hårdkodade värden som skrivs in i databasen.

var mongoose = require('mongoose'),
    Movie = require('./movie.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movies',{
      useMongoClient: true
    });

    var film1  = new Movie({
      title: 'De kommer att drunkna i sina mödrars tårar',
      year: 1992,
      ratings: [1,4,2,5],
      name: 2
    });
//Instances of these models represent documents which can be saved and retrieved from our database.
//All document creation and retrieval from the database is handled by these models.
    film1.save(function(err,result){
      if(err)
      console.log(err)
      console.log('Filmen ' + film1.title + ' saved.')
    });
//new Movie genererar en instans av modellen, vilket blir ett document.
//.save to save document to database
    var film2  = new Movie({
      title: 'De kommer',
      year: 1994,
      ratings: [1,2,2,1]
    });
    film2.save(function(err,result){
      if(err)
      console.log(err)
      console.log('Filmen ' + film2.title + ' saved.')
    });
    var film3  = new Movie({
      title: 'De',
      year: 1996,
      ratings: [5,2,4,5]
    });
    film3.save(function(err,result){
      if(err)
      console.log(err)
      console.log('Filmen ' + film3.title + ' saved.')
    });
//fylla på med en egenskap som inte finns i den model du skapat.
//wont cause error
