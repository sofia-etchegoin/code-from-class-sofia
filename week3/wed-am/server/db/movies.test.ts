import * as db from './movies.ts'
import connection from './connection.ts'
import { describe, it, expect, beforeAll, beforeEach, afterAll } from 'vitest'
import { MovieData } from '../../models/Movie.ts'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

describe('getAllMovies', () => {
  it('gets the complete seed list of movies', async () => {
    const allMovies = await db.getAllMovies()
    expect(allMovies).toHaveLength(10)
  })
})
describe('getMovieById', () => {
  it('gets just movie with Id of 2', async () => {
    const movie = await db.getMovieById(2)
    expect(movie.title).toBe('Fight Club')
  })
})

describe('addMovie', () => {
  it('adds a movie', async () => {
    // Arrange
    const movieToAdd = { title: 'Empire Records', year: 1995 } as MovieData

    // Act
    const addedMovie = await db.addMovie(movieToAdd)
    const allMovies = await db.getAllMovies()

    // Assert
    expect(allMovies).toHaveLength(11)
    expect(addedMovie[0]).toEqual({ ...movieToAdd, id: 11 })
  })
})

describe('updateMovie', () => {
  it('should update an existing movie with different details', async () => {
    // Arrange
    const revisedMovie = {
      id: 6,
      title: 'Knives Out',
      year: 2019,
    }
    const originalMovie = await db.getMovieById(6)

    // Act
    const finalMovieArr = await db.updateMovie(revisedMovie)
    const finalMovie = finalMovieArr[0]

    // Assert
    expect(finalMovie).not.toEqual(originalMovie)
    expect(finalMovie.title).toBe(revisedMovie.title)
  })
})

describe('deleteMovie', () => {
  it('should delete a movie by id', async () => {
    await db.deleteMovie(7)
    const allMovies = await db.getAllMovies()

    expect(await db.getMovieById(7)).toBeFalsy()
    expect(allMovies).toHaveLength(9)
  })
})

afterAll(() => {
  return connection.destroy()
})
