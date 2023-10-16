import * as path from 'node:path'
import express from 'express'

const server = express()

server.use(express.urlencoded({ extended: true }))

server.get('/', (req, res, next) => {
  res.sendFile(path.resolve('./welcome.html'))
})

server.get('/fruit/:name', (req, res, next) => {
  const name = req.params.name
  res.send(`<h1>Hello, ${name} is a fruit </h1>`)
})

server.post('/fruit', (req, res, next) => {
  res.send(`Cool job ${req.body.name}`)
})

server.get('/fruit/:name/toppedwith/:topping', (req, res, next) => {
  const name = req.params.name
  const topping = req.params.topping
  console.log(req.query)
  // const { name, topping } = req.params

  res.send(`<h1>Hello, ${name} topped with ${topping}</h1>`)
})

export default server
