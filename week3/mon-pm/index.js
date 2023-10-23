#!/usr/bin/env node

import * as db from './db.js'
const argsArr = process.argv.slice(2)

async function main() {
  try {
    switch (argsArr[0]) {
      case 'pantry':
        console.log(await db.getAllJars())
        break;
      case 'get':
        if (!argsArr[1]) {
          console.log('Specify an id to get')
        } else {
          console.log(await db.getJarById(argsArr[1]))
        }
        break;
      case 'add':
        try {
          let addObj = JSON.parse(argsArr[1])
          console.log(await db.addJar(addObj))
        } catch {
          console.log(await db.addJar({contents: argsArr[1]}))
        }
        break;
      case 'delete':
        if (!argsArr[1]) {
          console.log('Specify an id to be deleted')
        } else {
          console.log('records deleted:', await db.deleteJarById(argsArr[1]))
        }
        break;
      case 'update':
        let updateObj = JSON.parse(argsArr[1])
        if (typeof updateObj === 'object' && updateObj.id) {
          console.log(await db.updateJar(updateObj))
        }
        break;
      default:
        console.log('Specify an operation:\npantry\nget\nadd\ndelete\nupdate')
    }
  } catch(err) {
    console.log(err.message)
  } finally {
    db.connection.destroy()
  }
}

main()
