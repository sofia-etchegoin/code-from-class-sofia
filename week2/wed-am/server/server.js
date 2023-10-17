import express from 'express'
import hbs from 'express-handlebars'
import * as Path from 'node:path'

import otterRoutes from './routes/otters.js'
import vitaminRoutes from './routes/vitamins.js'

const server = express()

// Server configuration
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

// Routes
server.get('/', (req, res) => {
  // req.params

  // req.query
  // req.body
  res.redirect('/otters')
})

server.use(express.urlencoded({ extended: false }))

// GET /teachers/michael
// GET /teachers/gerard
// GET /teachers
server.get('/teachers/:name', (req, res) => {
  const name = res.params.name
})

// GET /teachers
server.get('/teachers', (req, res) => {
  const name = res.query.name
})

// POST /teachers
server.post('/teachers', (req, res) => {
  // <input name="age" type="number" />
  // Encoding: text/www-form-urlencoding
  const age = res.body.age
})

server.use('/otters', otterRoutes)
server.use('/vitamins', vitaminRoutes)

export default server
