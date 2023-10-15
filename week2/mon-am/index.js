import * as path from 'node:path'
import express from 'express'

const server = express()

const PORT = 3000

server.get('/', (req, res, next) => {
  res.sendFile(path.resolve('./welcome.html'))
})

server.get('/fruit/:name', (req, res, next) => {
  const name = req.params.name
  res.send(`<h1>Hello, ${name} is a fruit</h1>`)
})

server.get('/fruit/:name/toppedwith/:topping', (req, res, next) => {
  const name = req.params.name
  const topping = req.params.topping
  console.log(req.query)
  // const { name, topping } = req.params

  res.send(`<h1>Hello, ${name} topped with ${topping}</h1>`)
})

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
