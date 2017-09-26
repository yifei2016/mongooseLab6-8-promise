var mongoose = require('mongoose'),
Movie = mongoose.model('Movie');


module.exports = {
  list_all_tasks: function(req, res) {
    console.log('==============')
    Movie.find({}, function(err, movie) {
      if (err) res.send(err);
      res.json(movie);
    });
  },
    list_matched_task: function(req, res) {
      console.log('!!!!!!!!!!')
      Movie.findById(req.params.taskId, function(err, movie) {
        if (err) res.send(err);
        res.json(movie);
      });
    }
  }

//   list_matched_task: function(req, res) {
//     console.log('!!!!!!!!!!')
//     Movie.findById({req.params.taskId}, function(err, movie) {
//       if (err) res.send(err);
//       res.json(movie);
//     });
//   }
// };
// exports.rlist_all_tasks = function(req, res) {
//   console.log('==============')
//   Movie.find({}, function(err, movie) {
//     if (err) res.send(err);
//     res.json(movie);
//   });
// };
// exports.list_matched_task = function(req, res) {
//   console.log('!!!!!!!!!!')
//   Movie.findById({req.params.taskId}, function(err, movie) {
//     if (err) res.send(err);
//     res.json(movie);
//   });
// };
