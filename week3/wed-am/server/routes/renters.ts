import express from 'express'
import * as db from '../db/renters.ts'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const rentersArr = await db.getAllRenters()
    const viewData = {
      groupName: 'Renters',
      items: rentersArr,
    }
    res.render('list', viewData)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const renterId = parseInt(req.params.id)
    const renter = await db.getRenterById(renterId)
    res.render('single-renter', { ...renter })
  } catch (e) {
    next(e)
  }
})

export default router
