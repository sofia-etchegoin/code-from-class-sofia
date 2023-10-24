export function up(knex) {
  return knex.schema.createTable('renters', (table) => {
    table.increments('id').primary()
    table.varchar('name')
    table.varchar('phone_num')
    table.integer('fav_movie_id').references('movies.id')
  })
}

export function down(knex) {
  return knex.schema.dropTable('renters')
}
