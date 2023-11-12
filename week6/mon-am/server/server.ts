import express from 'express'
import sharkRoutes from './routes/sharks'

const server = express()
server.use(express.json())

server.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' })
})
server.use('/api/v1/sharks', sharkRoutes)
server.get('/api/*', (req, res) => {
  res.sendStatus(404)
})

export default server
