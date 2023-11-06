exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('talks').del()
  // Inserts seed entries
  await knex('talks').insert([
    {
      id: 1,
      speaker: 'Ninja Turtles',
      topic: 'Function programming, avoiding mutations and side effects'
    },
    {
      id: 2,
      speaker: 'Simba',
      topic: 'Object Oriented Programming and inheritance'
    },
    {
      id: 3,
      speaker: 'Transformers',
      topic: 'Array functions and data manipulation'
    },
    {
      id: 4,
      speaker: 'Popeye',
      topic: 'Asking questions to enhance your learning experience'
    }
  ])
}
