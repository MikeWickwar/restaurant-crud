var express = require('express');
var router = express.Router();
var stater = require('../public/javascripts/states.js')
var i =0;

var knex = require('knex')({
   client: 'pg',
   connection: 'postgres://localhost/restaurant'
});

var Dine  = function(){
  return knex('dinning');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  var stuff = Dine().select().then(function(package){
    var lots_of_stuff = package;
    res.render('restaurants/index', { title: "Eats", stuff: lots_of_stuff, rating: rate });
  });
});

router.get('/restaurants/new', function(req, res, next) {
    res.render('restaurants/new', {states: stater});
    console.log(stater);
});

// router.post('/restaurants', function(req, res, next) {
//   var stuff = Dine().select().then(function(package){
//     var lots_of_stuff = package;
//
//   Dine().insert(book).then(function(result){
//     res.redirect('/books');
//   });
// });
module.exports = router;
