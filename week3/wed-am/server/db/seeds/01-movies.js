export async function seed(knex) {
  await knex('movies').insert([
    { id: 1, title: 'Forrest Gump', year: 1994 },
    { id: 2, title: 'Fight Club', year: 1999 },
    { id: 3, title: 'Josie and the Pussycats', year: 2001 },
    { id: 4, title: 'The Last Unicorn', year: 1982 },
    { id: 5, title: 'A Little Princess', year: 1995 },
    { id: 6, title: 'Pride & Prejudice', year: 2005 },
    { id: 7, title: 'Green Card', year: 1990 },
    { id: 8, title: 'Mulholland Drive', year: 2001 },
    { id: 9, title: 'Harold and Maude', year: 1971 },
    { id: 10, title: 'The Lion King', year: 1994 },
    // { id: , title: '', year:  },
    // { id: , title: '', year:  },
  ])
}
