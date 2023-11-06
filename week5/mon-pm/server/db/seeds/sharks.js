export async function seed(knex) {
  // Deletes ALL existing entries
  return knex('sharks')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('sharks').insert([
        { id: 1, name: 'Baby Shark', colour: 'yellow' },
        { id: 2, name: 'Mommy Shark', colour: 'pink' },
        { id: 3, name: 'Daddy Shark', colour: 'blue' },
        { id: 4, name: 'Grandma Shark', colour: 'orange' },
        { id: 5, name: 'Grandpa Shark', colour: 'green' },
      ])
    })
}
