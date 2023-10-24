export function up(knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id').primary()
    table.varchar('title')
    table.integer('year')
  })
}

export function down(knex) {
  return knex.schema.dropTable('movies')
}
