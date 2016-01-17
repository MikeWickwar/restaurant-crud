
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('dinning', function(table){
    table.increments('id');
    table.string('title');
    table.string('imglink');
    table.string('description');
    table.string('location');
    table.integer('rating');
    table.text('bio');
  }),
    knex.schema.createTable('reviews', function(table){
    table.increments('rev_id');
    table.text('review');
    table.integer('rating');
    table.integer('restaurant_id')
    table.date('date')
    table.string('name');
  }),
    knex.schema.createTable('employees', function(table){
    table.increments('id');
    table.string('firstName');
    table.string('lastName');
    table.integer('rest_id');
  }),

])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dinning');
};
