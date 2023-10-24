import express from 'express'
import * as db from '../db/rentals.ts'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const allRentals = await db.getAllRentals()
    console.log(allRentals)
    const viewData = {
      groupName: 'Rentals',
    }
    res.render('list-rentals', viewData)
  } catch (e) {
    next(e)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // do something
  } catch (e) {
    next(e)
  }
})

export default router
