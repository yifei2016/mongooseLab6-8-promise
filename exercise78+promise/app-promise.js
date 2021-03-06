//När vi bestämmer oss för att lagra information i fler än en collection kommer
//vi att behöva hämta in info från båda, vilket i tidigare versioner
//av MongoDB och Mongoose var lite problematiskt, men sedan en tid tillbaka
//finns det en lösning för det, och i Mongoose kallas det för population.

var mongoose = require('mongoose'),
    Movie = require('./movieModel.js');
    Actor = require('./actorsModel.js');
//När vi har skapat denna instans av vår modell kan vi bland annat spara den
//i databasen. Då måste vi också lite tidigare ha skrivit kod som skapar en
//uppkoppling till databasen som nedan

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movieDB',{
  useMongoClient: true
});
//vi sedan kan spara info om actor enligt koden nedan.

var actor1 = new Actor({
  name: 'Johannes berg',
  gender: 'M'
});
var actor2 = new Actor({
  name: 'Gones yyg',
  gender: 'F'
});

var movie  = new Movie({
    title: 'De kommer att drunkna i sina mödrars tårar',
    year: 1972,
    ratings: [1,4,9,5]
//Sedan sparar du skådespelarnas id i movie-collectionen.
  });

movie.save()
  .then(function(savedMovie){
    actor1.save()
      .then(function(savedActor){
        savedMovie.actors.push(savedActor._id);
        actor2.save()
          .then(function(savedActor){
            savedMovie.actors.push(savedActor._id);
            savedMovie.save()
              .then(function(updatedMovie){
                console.log('Movie ' + updatedMovie + ' saved.');
              });
          });
      })
      .catch(function(err){
        console.log('============ Catched ERROR ==================');
        console.error(err);
      })
  })
  .catch(function(err){
    console.log('============ Movie Save ERROR ==================');
    console.error(err);
  });
//Det är när du kör save() som det skriva till databasen. Innan det lär de bara ligga i classen
//cb 是一个套路, 第一个参数永远是err. 第二个就是返回的数据。
