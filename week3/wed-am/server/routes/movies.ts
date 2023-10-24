import express from 'express'
import * as db from '../db/movies.ts'
import * as dbRenters from '../db/renters.ts'

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const moviesArr = await db.getAllMovies()
    const viewData = {
      groupName: 'Movies',
      items: moviesArr,
    }
    res.render('list', viewData)
  } catch (e) {
    next(e)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const movieId = parseInt(req.params.id)
    const movie = await db.getMovieById(movieId)
    const movieLovers = await dbRenters.getRentersByFavMovieId(movieId)

    const viewData = { ...movie, movieLovers }
    res.render('single-movie', viewData)
  } catch (e) {
    next(e)
  }
})

export default router
