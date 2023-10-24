export async function seed(knex) {
  await knex('rentals').insert([
    { movie_id: 1, renter_id: 1 },
  ])
}
