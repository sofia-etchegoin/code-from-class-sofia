export async function seed(knex) {
  await knex('renters').insert([
    { id: 1, name: 'Lucy', phone_num: '021 555 1234', fav_movie_id: 5 },
    { id: 2, name: 'Gaby', phone_num: '022 123 456', fav_movie_id: 2 },
    { id: 3, name: 'Michael', phone_num: '027 987 654', fav_movie_id: 4 },
    { id: 4, name: 'Gerard', phone_num: '021 010 34567', fav_movie_id: 3 },
    { id: 5, name: 'Elise', phone_num: '027 555 3006', fav_movie_id: 3 },
    { id: 6, name: 'Keeley', phone_num: '022 111 0987', fav_movie_id: 4 },
    { id: 7, name: 'James', phone_num: '021 798 2412', fav_movie_id: 2 },
    { id: 8, name: 'Will', phone_num: '011 111 1111', fav_movie_id: 1 },
    { id: 9, name: 'Anthony', phone_num: '022 222 2222', fav_movie_id: 4 },
    { id: 10, name: 'Sofia', phone_num: '033 333 3333', fav_movie_id: 6 },
    { id: 11, name: 'Cody', phone_num: '044 444 4444', fav_movie_id: 9 },
    { id: 12, name: 'Rose', phone_num: '055 555 5555', fav_movie_id: 10 },
  ])
}
