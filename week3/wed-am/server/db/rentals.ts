import db from './connection.ts'
// import { ,  } from '../../models/Movie.ts'

export function getAllRentals() {
  return db('movies')
    .join('rentals', 'movies.id', 'rentals.movie_id')
    .join('renters', 'rentals.renter_id', 'renters.id')
    .select('movies.title as movieTitle', 'renters.name as renterName')
}