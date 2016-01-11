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
  var stuff = Dine().where('title', req.params.title).first().then(function(package){
    var lots_of_stuff = package;
      res.render('restaurants/show', {stuff: lots_of_stuff});
  });
})
router.get('/restaurants/:title/edit', function (req, res, next) {
  var restaurant = Dine().where('title', req.params.title).first().then(function(package){
    var lots_of_stuff = package;
      res.render('restaurants/edit', {restaurant: lots_of_stuff, states: stater});
      console.log(lots_of_stuff.description);
      // console.log(lots_of_stuff.location.split(' ')[1]);
  });
})

router.post('/restaurants/:title', function(req, res, next) {
  console.log('here');
  var thing = {
    title: req.body.name,
    imglink: req.body.image,
    rating: req.body.rating,
    description: req.body.description+ " cuisine",
    location: req.body.location+ ", " + req.body.staters,
    bio: req.body.bio
  }
  console.log(thing.bio);
  Dine().where('title', req.params.title).update(thing)
    .then(function(result){
      res.redirect('/');
  });
});

router.post('/restaurants/:title/delete', function (req, res) {
  Dine().where('title', req.params.title).del()
  .then(function (result) {
    res.redirect('/');
  })
})
////ATTENTION FUTURE ME!! .. start with the submit on the edit button working
///as well as auto population of the cuisine drop down FUUUUUUUCK.


module.exports = router;
