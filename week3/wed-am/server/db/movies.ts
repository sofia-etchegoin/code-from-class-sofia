import db from './connection.ts'
import { MovieData, Movie } from '../../models/Movie.ts'

export function getAllMovies(): Promise<Movie[]> {
  try {
    return db('movies').select()
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export function getMovieById(id: number): Promise<Movie> {
  try {
    return db('movies').select().where({ id }).first()
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export function addMovie(movieData: MovieData): Promise<Movie[]> {
  try {
    return db('movies').returning(['id', 'title', 'year']).insert(movieData)
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export function updateMovie(movie: Movie): Promise<Movie[]> {
  try {
    return db('movies')
      .returning(['id', 'title', 'year'])
      .update({ ...movie })
      .where('id', movie.id)
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export function deleteMovie(movieId: number): Promise<number> {
  try {
    return db('movies').delete().where('id', movieId).returning('id')
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}
