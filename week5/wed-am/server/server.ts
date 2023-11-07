import express from 'express'

const server = express()
server.use(express.json())

server.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' })
})

export default server
