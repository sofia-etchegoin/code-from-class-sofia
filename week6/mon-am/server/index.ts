import server from './server'

const port = process.env.PORT ?? 3000
process.env.NODE_ENV

server.listen(port, () => {
  console.log('API server is running...')
})
