exports.seed = function (knex) {
  // Inserts seed entries
  return knex('fruit').insert([
    { id: 1, name: 'Apple', rating: '7' },
    { id: 2, name: 'Feijoa', rating: '4' },
    { id: 3, name: 'Orange', rating: '5' }
  ])
}
