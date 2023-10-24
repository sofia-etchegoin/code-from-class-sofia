export async function seed(knex) {
  await knex('rentals').del()
  await knex('renters').del()
  await knex('movies').del()
}
