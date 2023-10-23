#!/usr/bin/env node

import * as db from './db.js'

console.log('args:', process.argv.slice(2))

console.log(await db.getAllJars())

console.log(await db.getJarById(2))

console.log(await db.addJar({contents: 'plum butter'}))

console.log('records deleted', await db.deleteJarById(2))

console.log(await db.updateJar({
  id: 1,
  contents: 'blueberry jam',
  canned_date: '2022-12-02'
},))

db.connection.destroy()
