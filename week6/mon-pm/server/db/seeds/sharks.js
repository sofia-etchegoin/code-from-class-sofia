exports.seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('sharks').del()
  // Inserts seed entries
  await knex('sharks').insert([
    { id: 1, name: 'Baby Shark', colour: 'Green' },
    { id: 2, name: 'Parent Shark', colour: 'Yellow' },
    { id: 3, name: 'Grand Shark', colour: 'Orange' },
    { id: 4, name: 'Great Grand Shark', colour: 'Red' },
  ])
}
