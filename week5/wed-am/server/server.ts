import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const server = express()
server.use(express.json())

server.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' })
})

server.get('/api/v1/movies', async(req, res) => {
  const token = process.env.MOVIEDB_API_TOKEN
  console.log(token)
  const response = await request
  .get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`)
  .set('Authorization', `Bearer ${token}`)
  res.json(response.body.results)
})

export default server
