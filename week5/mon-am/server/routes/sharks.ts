import express from 'express'
const router = express.Router()

// GET /api/v1/sharks
router.get('/', (req, res) => {
  const sharks = [{ id: 1, name: 'Baby Shark', colour: 'yellow' }]
  res.json(sharks)
})

// GET /api/v1/sharks/3 (e.g.)
router.get('/:id', (req, res) => {})

// POST /api/v1/sharks
router.post('/', (req, res) => {})

export default router