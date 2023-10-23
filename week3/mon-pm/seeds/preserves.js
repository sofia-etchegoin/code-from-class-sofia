/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('preserves').del()
  await knex('preserves').insert([
    {id: 1, contents: 'strawberry jam', canned_date: '2022-12-02'},
    {id: 2, contents: 'zucchini relish', canned_date: '2023-01-28'},
    {id: 3, contents: 'sweet pickled gherkins', canned_date: '2023-02-21'},
  ]);
};
