import { join } from 'node:path'
import express from 'express'
import talksRoutes from './routes/talks'

const server = express()
server.use(express.json())
server.use(express.static(join(__dirname, 'public')))

server.use('/api/v1', talksRoutes)

export default server
