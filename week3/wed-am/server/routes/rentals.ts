import express from 'express'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
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
