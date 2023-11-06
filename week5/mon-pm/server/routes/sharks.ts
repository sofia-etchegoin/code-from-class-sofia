import express from 'express'
const router = express.Router()
import * as db from '../db/db.ts'

// GET /api/v1/sharks
router.get('/', async (req, res) => {
  try {
    const sharks = await db.getSharks()
    res.json(sharks)
  } catch (err) {
    res.sendStatus(500)
    console.error((err as any).message)
  }
})

// GET /api/v1/sharks/3 (e.g.)
router.get('/:id', async (req, res, next) => {
  try {
    const sharkId = Number(req.params.id)
    const shark = await db.getShark(sharkId)
    if (shark == undefined) {
      res.sendStatus(404)
      return
    }

    res.json(shark)
  } catch (err) {
    next(err)
  }
})

// POST /api/v1/sharks
router.post('/', async (req, res) => {
  const newShark = req.body
  const dbResponse = await db.addShark(newShark)
  res.json(dbResponse[0])
})

export default router
