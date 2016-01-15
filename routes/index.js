var express = require('express');
var router = express.Router();
var stater = require('../public/javascripts/states.js')
var sort = require('../public/javascripts/sort.js')
var i =0;

var knex = require('knex')({
   client: 'pg',
   connection: process.env.DATABASE_URL || 'postgres://localhost/restaurant'
});

var Dine  = function(){
  return knex('dinning');
}

router.get('/', function(req, res, next) {
  var stuff = Dine().select().then(function(package){
    var lots_of_stuff = package;
    res.render('restaurants/index', {title: "Eats", stuff: lots_of_stuff});
  });
});

router.get('/restaurants/new', function(req, res, next) {
    res.render('restaurants/new', {states: stater});
    console.log(stater);
});


// runQuery('select * from rests', functions(result){
//   runQuery('select * from employees', function(resultE){
//       render{ locaal with both result.rows and resultE.rows}
//   }
// } good way to write with two different objects or you can loop through one object via the jade file

router.get('/restaurants/admin', function(req, res, next) {
  var stuff = Dine().select().fullOuterJoin('employees', 'dinning.title', 'employees.restaurant').then(function(package){
    console.log(package);
  var lots_of_stuff = package;
  var restaurantsArr = sort.rSorter(package);
  var empArr = sort.eSorter(restaurantsArr, package)
    res.render('restaurants/admin', {title: "Admin Page", stuff: lots_of_stuff });
    });
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

router.get('/restaurants/:id', function (req, res, next) {
  var restaurant = Dine().select().innerJoin('reviews', 'dinning.id', 'restaurant_')
  var stuff = Dine().where('id', req.params.id).first().then(function(package){
    var lots_of_stuff = package;
      res.render('restaurants/show', {stuff: lots_of_stuff});
  });
})
router.get('/restaurants/:id/edit', function (req, res, next) {
  var restaurant = Dine().where('id', req.params.id).first().then(function(package){
    var lots_of_stuff = package;
      res.render('restaurants/edit', {restaurant: lots_of_stuff, states: stater});
      console.log(lots_of_stuff.description);
      // console.log(lots_of_stuff.location.split(' ')[1]);
  });
})

router.post('/restaurants/:id', function(req, res, next) {
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
  Dine().where('id', req.params.id).update(thing)
    .then(function(result){
      res.redirect('/');
  });
});

router.post('/restaurants/:id/delete', function (req, res) {
  Dine().where('id', req.params.id).del()
  .then(function (result) {
    res.redirect('/');
  })
})


module.exports = router;
