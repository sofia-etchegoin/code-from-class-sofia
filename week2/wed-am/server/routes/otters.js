import fs from 'node:fs/promises'
import * as Path from 'node:path'
import express from 'express'

import * as lib from './lib.js'

const router = express.Router()

// Earlier in the week we used a js file for data
// import otters from './otters.js'

router.get('/', async (req, res) => {
  // JSON format is convenient for reading and writing
  const otters = await lib.readFile()

  res.render('home', {
    otters,
  })
})

// *
router.get('/add-otter', (req, res) => {
  res.render('add-otter')
})

// *
router.post('/add-otter', async (req, res) => {
  console.log('req.body:\n', req.body)

  // JSON format is convenient for reading and writing
  const otters = await lib.readFile()

  const newOtter = {
    id: otters.length + 1,
    name: req.body.name,
    isSeaOtter: Boolean(req.body.isSeaOtter),
    famousFor: req.body.famousFor,
  }

  console.log('newOtter:\n', newOtter)

  otters.push(newOtter)

  const newFileContents = JSON.stringify(otters, null)
  fs.writeFile(Path.resolve('server/otters.json'), newFileContents)

  res.redirect('/otters')
})

export default router
