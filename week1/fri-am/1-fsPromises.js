import * as fsPromises from "node:fs/promises"

console.log('START')

// async function readText(pathToFile) {
//   const returnedText = await fsPromises.readFile(pathToFile, 'utf-8')
//   console.log(returnedText)
// }
// readText('./comments.txt')

async function readText(pathToFile) {
  try {
    return await fsPromises.readFile(pathToFile, 'utf-8')
  } catch (error) {
    console.error(error.message)
  }
}
const returnedText = await readText('./comments7.txt')
console.log(returnedText)

// console.log(await fsPromises.readFile('./comments.txt', 'utf-8'))

// fsPromises.readFile('./comments.txt', 'utf-8').then(result => console.log(result))

async function write(path, content) {
  await fsPromises.writeFile(path, content)
  console.log('done writing')
}
write('./comments.txt', 'something new')

const writeFunction = async (path, content) => {
  await fsPromises.writeFile(path, content)
  console.log('done arrow writing')
}
writeFunction('./comments7.txt', 'something else new')

await fsPromises.appendFile('./comments7.txt', '\nAdded stuff')
console.log('appended')

console.log('END')
