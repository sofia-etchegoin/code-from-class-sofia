import * as fsPromises from "node:fs/promises"

console.log('START')

// 1. Async await that completes and logs outside the code flow.
// async function readText(pathToFile) {
//   const returnedText = await fsPromises.readFile(pathToFile, 'utf-8')
//   console.log(returnedText)
// }
// readText('./comments.txt')

// 2. Async await with try/catch. Await result of the function
// before logging.
async function readText(pathToFile) {
  try {
    return await fsPromises.readFile(pathToFile, 'utf-8')
  } catch (error) {
    console.error(error.message)
  }
}
const returnedText = await readText('./comments7.txt')
console.log(returnedText)

// 3. Super-minimal execution-only. Awaits not nested in any function
// do not need an "async"
// console.log(await fsPromises.readFile('./comments.txt', 'utf-8'))


// 4. Dot-then syntax that completes and logs outside of the main
// execution flow.
// fsPromises.readFile('./comments.txt', 'utf-8')
//   .then(result => console.log(result))

// 5. Same structure as function 1, above. Async await that completes
// and logs outside the code flow.
async function write(path, content) {
  await fsPromises.writeFile(path, content)
  console.log('done writing')
}
write('./comments.txt', 'something new')

// 6. Example with arrow function. Non-blocking, unless you await
// the function invocation. But it happens to complete very fast.
// const writeFunction = async (path, content) => {
//   await fsPromises.writeFile(path, content)
//   console.log('done arrow writing')
// }
// writeFunction('./comments7.txt', 'something else new')

// 7. Awaiting then logging in the main code flow.
await fsPromises.appendFile('./comments7.txt', '\nAdded stuff')
console.log('appended')

console.log('END')
