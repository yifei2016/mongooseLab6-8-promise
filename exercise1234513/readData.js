var express = require('express'),
app = express();
var router = express.Router();

var mongoose = require('mongoose'),
Movie = require('./movie.js'), //created model loading here
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movies');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(function(req, res) {
  //res.status(404).send({url: req.originalUrl + ' not found'})
//});

console.log("server started ====================  ");

var routes = require('./routes/index.js');//importing route
app.listen(3000);
routes(app);
