import express from 'express'

const router = express.Router()

router.get('/b12', (req, res, next) => {
  // res.send(`
  // <h1>Vitamin B12</h1>
  // <p>This vitamin is made up, you don't need to eat it</p>
  // `)
  next(new Error('Not a real vitamin'))
})

export default router
