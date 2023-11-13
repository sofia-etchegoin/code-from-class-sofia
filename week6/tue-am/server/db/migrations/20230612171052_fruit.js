exports.up = function (knex) {
  return knex.schema.createTable('fruit', table => {
    table.increments('id')
    table.string('name')
    table.string('rating')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('fruit')
}
