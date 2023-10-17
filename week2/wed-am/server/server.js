import express from 'express'
import hbs from 'express-handlebars'
import * as Path from 'node:path'

import otterRoutes from './routes/otters.js'

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
  res.redirect('/otters')
})

server.use('/otters', otterRoutes)

export default server
