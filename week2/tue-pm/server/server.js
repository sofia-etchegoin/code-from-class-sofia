import * as Path from 'node:path/posix'
import * as URL from 'node:url'

import express from 'express'
import { engine } from 'express-handlebars'

const server = express()

export default server

// Middleware
server.engine(
  'hbs',
  engine({
    extname: 'hbs',
  })
)

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

server.set('view engine', 'hbs')
server.set('views', __dirname + '/views')
server.use(express.static(__dirname + '/public'))

// Routes
server.get('/', (req, res) => {
  const viewData = {
    items: [
      { name: 'google', link: 'https://google.com' },
      { name: 'x (previously twitter)', link: 'https://twitter.com'}
    ]
  }
  res.render('home', viewData)
})