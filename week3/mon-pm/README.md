# Relational Databases and Knex.js

## Demo Agenda

- Creating tables with migrations
- Adding data with seeds
- CRUD - Create, Read, Update, Delete operations with Knex.js

## Setup

```sh
npm init [-y]
npm install knex sqlite3
```

Add a script for "knex": "knex",

```sh
npm run knex init # creates the knexfile.js
```

Edit the knexfile:

- `export default {`
- `useNullAsDefault: true`

## Create a table

```sh
npm run knex migrate:make table_name

# edit the migration file for the new table, including `export function up(knex) {` and down, too

npm run knex migrate:latest
```

## Fill the table with data

```
npm run knex seed:make table_name

# add new data to the seed file and update `export async function seed(knex) {`

npm run knex seed:run
```

## Create an open database connection

```js
import knex from 'knex'
import config from './knexfile.js'

const db = knex(config.development)
db.destroy()
```

## Query records from the database

```js
async function showAllPreserves() {
  const preserves = await db('preserves').select()
  preserves.forEach((jar) => {
    const { id, contents, canned_date: cannedDate } = jar
    console.log(`${id}: ${contents} (${cannedDate})`)
  })
}
```

## Query a single record from the database

```js
async function getJarById(jarId) {
  const jar = await db('preserves').select().where('id', jarId).first()
  const { id, contents, canned_date: cannedDate } = jar
  console.log(`${id}: ${contents} (${cannedDate})`)
}
```

## Add a new record to the database

```js
async function addPreserve(newJar) {
  const addedIds = await db('preserves').insert({ contents: newJar.contents })
  console.log('ID of new jar:', addedIds[0])
}
```

## Update a record in the database

```js
async function updateJar(jar) {
  const updatedCount = await db('preserves')
    .update({ contents: jar.contents, canned_date: jar.cannedDate })
    .where('id', jar.id)
  console.log('Number of records updated:', updatedCount)
}
```

## Delete a record in the database

```js
async function deleteJar(id) {
  const deletedCount = await db('preserves').delete().where('id', id)
  console.log('Number of records deleted:', deletedCount)
}
```

## Writing a shell script in JavaScript

- Run `chmod +x filename` to make it executable. Verify with `ls -al`.
- Run the file by running `./filename`.
