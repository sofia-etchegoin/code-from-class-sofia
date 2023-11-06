import express from 'express'

import { addNewTalk, getAllTalks } from '../db/talks'
import { TalkData } from '../../models/Talk'

const router = express.Router()

// GET /api/v1/talks
router.get('/talks', async (req, res) => {
  try {
    const talks = await getAllTalks()
    res.json({ talks })
  } catch(error) {
    console.error(error)
    res.sendStatus(500)
  }
})

// POST /api/v1/talks
router.post('/talks', async (req, res) => {
  try {
    const newTalk = req.body.newTalk as TalkData
    console.log('There has been a request to add a new talk, req.body:')
    console.log(req.body)
    if(!newTalk) {
      res.sendStatus(400)
      return
    }
    const talk = await addNewTalk(newTalk)
    res.json({ talk })
  } catch(error) {
    console.error(error)
    res.sendStatus(500)
  }
})

export default router
