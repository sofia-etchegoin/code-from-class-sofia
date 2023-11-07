import request from "superagent";
import { Movie } from "../../models/Movies.ts";

export async function getMovies(): Promise<Movie[]> {
  const response = await request.get('/api/v1/movies')
    // .get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
    // .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmI3NDc1MjQzZmViNDU4OTZiYTcxZTVhZjdjZDJmMyIsInN1YiI6IjY1NDk4NTEwMjg2NmZhMDEzOGE4NDg1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KDsOp1y_AFyhU4ZZnL_D0NGPKXz2yqMnKzSmQEk_J4A')
  return response.body
}