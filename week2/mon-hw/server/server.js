// IMPORT THE BASICS
import express from 'express'
import * as Path from 'node:path'

import { engine } from 'express-handlebars'
import data from './data/data.js'

// CREATE YOUR SERVER
const server = express()

// ADD PUBLIC FOLDER
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false}))

// Use the hbs engine on our server
server.engine('hbs', engine({ extname: 'hbs' }))

// Connect the view engine to server
server.set('view engine', 'hbs')
server.set('views', Path.resolve('server/views'))

// WRITE THOSE ROUTES
server.get('/', (req, res) => {
    // res.sendFile(publicFolder + '/old.html')

    const viewData = {
        artists: data.artists
    }
    res.render('home', viewData)
})
server.get('/about', (req, res) => {

    res.render('aboutme')
})

export default server