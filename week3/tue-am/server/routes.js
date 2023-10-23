import express from 'express'
import * as db from './db/db.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('WOMBLES!')
})

router.get('/list', async (req, res) => {
  const getWombles = await db.wombles()
  const view = { getWombles }
  console.log(getWombles)
  res.render('list', view)
})

export default router
