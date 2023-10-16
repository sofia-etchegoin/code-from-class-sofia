// IMPORT THE BASICS
import express from 'express'
import * as Path from 'node:path'

// CREATE YOUR SERVER
const server = express()

// ADD PUBLIC FOLDER
const publicFolder = Path.resolve('public')
server.use(express.static(publicFolder))
server.use(express.urlencoded({ extended: false}))

// WRITE THOSE ROUTES
server.get('/', (req, res) => {
    res.sendFile(publicFolder + '/old.html')
})

export default server
