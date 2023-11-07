// Beep boop movies
import { useState, useEffect } from 'react'
import { Movie } from "../../models/Movies.ts"
import { getMovies } from '../apiClient/movies.ts'

export default function Movies() {
  // REMEMBER: handle the loading and error cases
  const [movies, setMovies] = useState([] as Movie[])

  useEffect(() => {
    async function fetchMovies() {
      const movieList = await getMovies()
      setMovies(movieList)
    }
    fetchMovies()
  }, [])

  return (
    <>
      <h2>Movies</h2>
      {movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
    </>
  )
}
