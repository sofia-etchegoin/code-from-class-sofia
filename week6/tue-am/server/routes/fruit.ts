import express from 'express'
import * as db from '../db/fruit'
import { FruitData } from '../../models/fruit'

const router = express.Router()

// GET /api/v1/fruit
router.get('/', async (req, res) => {
  try {
    const fruit = await db.getAllFruit()
    res.json({ fruit })
  } catch(error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// GET /api/v1/fruit/:fruitId
router.get('/:fruitId', async (req, res) => {
  try {
    const fruitId = Number(req.params.fruitId)
    if(isNaN(fruitId)) {
      res.sendStatus(400)
      return
    }

    const fruit = await db.getFruitById(fruitId)
    res.json({ fruit })
  } catch(error) {
    console.log(error)
    res.sendStatus(500)
  }
})

// POST /api/v1/fruit
router.post('/', async (req, res) => {
  try {
    const newFruit = req.body.newFruit as FruitData
    if (!newFruit) {
      res.sendStatus(400)
      return
    }

    const fruit = await db.addFruit(newFruit)
    res.json({ fruit })
  } catch(error) {
    console.log(error)
    res.sendStatus(500)
  }
})

export default router
