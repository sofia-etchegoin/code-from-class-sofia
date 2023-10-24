export async function seed(knex) {
  await knex('renters').del()
  await knex('movies').del()
}
