export function up(knex) {
  return knex.schema.createTable('sharks', (table) => {
    table.increments('id')
    table.string('name')
    table.string('colour')
  })
}

export function down(knex) {
  return knex.schema.dropTable('sharks')
}
