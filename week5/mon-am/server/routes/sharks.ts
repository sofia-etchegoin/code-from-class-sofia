import express from 'express'
const router = express.Router()
import * as db from '../db/db'

// GET /api/v1/sharks
router.get('/', async (req, res) => {
  try {
    const sharks = await db.getSharks()
    res.json(sharks)
  } catch (err) {
    res.sendStatus(500)
    console.error(err.message)
  }
})

// GET /api/v1/sharks/3 (e.g.)
router.get('/:id', async (req, res) => {
  const sharkId = Number(req.params.id)
  const shark = await db.getShark(sharkId)
  res.json(shark)
})

// POST /api/v1/sharks
router.post('/', async (req, res) => {
  const newShark = req.body
  const dbResponse = await db.addShark(newShark)
  res.json(dbResponse[0])
})

// GET /api/v1/sharks/something
// router.get('/something', (req, res) => {
//   res.send('<p>what is even happening?!?!?<p>')
// })

export default router