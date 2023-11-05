import express from 'express'
import * as Path from 'node:path/posix'

const server = express()

import sharkRoutes from './routes/sharks'

// Middleware (body parser)
server.use(express.json())

// Static folder
server.use(express.static(Path.resolve('public')))

// Routes
server.use('/api/v1/sharks', sharkRoutes)

export default server
