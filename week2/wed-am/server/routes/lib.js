import fs from 'node:fs/promises'
import * as Path from 'node:path'

export async function readFile() {
  try {
    return await fs
      .readFile(Path.resolve('server/otters.json'), 'utf-8')
      // We need JSON.parse to turn a JSON string into useable JS objects
      .then((data) => JSON.parse(data))
  } catch (err) {
    console.error(err.message)
  }
}

export function readFilePromises() {
  return (
    fs
      .readFile(Path.resolve('server/otters.json'), 'utf-8')
      // We need JSON.parse to turn a JSON string into useable JS objects
      .then((data) => JSON.parse(data))
      .catch((err) => {
        console.err(err.message)
      })
  )
}
