// IMPORT THE BASICS
import * as Path from 'node:path'

import express from 'express'
import * as hbs from 'express-handlebars'

import movieRoutes from './routes/movies.ts'
import renterRoutes from './routes/renters.ts'
import rentalRoutes from './routes/rentals.ts'

// CREATE YOUR SERVER
const server = express()
export default server

// ADD PUBLIC FOLDER
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false }))

server.engine('hbs', hbs.engine({ extname: 'hbs' }))
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

server.get('/', (req, res) => {
  res.render('home')
})
server.use('/renters', renterRoutes)
server.use('/movies', movieRoutes)
server.use('/rentals', rentalRoutes)
