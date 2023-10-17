import server from './server.js'
const port = 3000

server.listen(port, function () {
  console.log('Server is listening on http://localhost:' + port)
})
