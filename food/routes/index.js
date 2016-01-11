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

router.get('/', function(req, res, next) {
  var stuff = Dine().select().then(function(package){
    var lots_of_stuff = package;
    res.render('restaurants/index', { title: "Eats", stuff: lots_of_stuff});
  });
});

router.get('/restaurants/new', function(req, res, next) {
    res.render('restaurants/new', {states: stater});
    console.log(stater);
});

router.post('/restaurants', function(req, res, next) {
  var thing = {
    title: req.body.name,
    imglink: req.body.image,
    rating: req.body.rating,
    description: req.body.description+ " cuisine",
    location: req.body.location+ ", " + req.body.staters
  }
  Dine().insert(thing).then(function(result){
    res.redirect('/');
  });
});

router.get('/restaurants/:title', function (req, res, next) {
  Dine().where('title', req.params.title).first().then(function(result){
    res.render('restaurants/show', { restaurant: result});
  });
})


module.exports = router;
