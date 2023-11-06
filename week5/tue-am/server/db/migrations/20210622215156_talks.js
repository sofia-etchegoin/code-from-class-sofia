exports.up = function (knex) {
  return knex.schema.createTable('talks', table => {
    table.increments('id')
    table.string('speaker')
    table.string('topic')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('talks')
}
