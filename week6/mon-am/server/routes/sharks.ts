import express from 'express'
import * as db from '../db/db'

const router = express.Router()

// GET /api/v1/sharks
router.get('/', async (req, res) => {
  try {
    const sharks = await db.getAllSharks()

    res.json(sharks)
  } catch (error) {
    console.error(error)
    res.status(500).json('There was an error trying to get the sharks')
  }
})

export default router
