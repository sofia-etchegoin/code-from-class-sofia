exports.up = (knex) => {
  return knex.schema.createTable('sharks', (table) => {
    table.increments('id')
    table.string('name')
    table.string('colour')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('sharks')
}
