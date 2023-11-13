import express from 'express'
import fruitRoutes from './routes/fruit'

const server = express()
server.use(express.json())

server.use('/api/v1/fruit', fruitRoutes)

server.get('/api/*', (req, res) => {
  res.sendStatus(404)
})

export default server
