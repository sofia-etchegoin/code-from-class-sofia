import db from './connection.ts'
import { RenterData, Renter } from '../../models/Renter.ts'

export function getAllRenters(): Promise<Renter[]> {
  try {
    return db('renters').select('id', 'name', 'phone_num as phoneNum')
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export function getRenterById(id: number): Promise<Renter> {
  try {
    return db('renters')
      .join('movies', 'renters.fav_movie_id', 'movies.id')
      .select(
        'renters.id as renterId',
        'name',
        'title as favMovie',
        'phone_num as phoneNum',
        'year'
      )
      .where('renters.id', id)
      .first()
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export function getRentersByFavMovieId(movieId: number): Promise<Renter[]> {
  try {
    return db('renters').select().where('fav_movie_id', movieId)
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export function addRenter(renterData: RenterData): Promise<Renter[]> {
  const formattedRenterData = {
    name: renterData.name,
    phone_num: renterData.phoneNum,
    fav_movie_id: renterData.favMovieId,
  }
  try {
    return db('renters')
      .returning([
        'id',
        'name',
        'phone_num as phoneNum',
        'fav_movie_id as favMovieId',
      ])
      .insert(formattedRenterData)
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export function updateRenter(renter: Renter): Promise<Renter[]> {
  const formattedRenterData = {
    id: renter.id,
    name: renter.name,
    phone_num: renter.phoneNum,
    fav_movie_id: renter.favMovieId,
  }
  try {
    return db('renters')
      .returning([
        'id',
        'name',
        'phone_num as phoneNum',
        'fav_movie_id as favMovieId',
      ])
      .update({ ...formattedRenterData })
      .where('id', renter.id)
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}

export function deleteRenter(renterId: number): Promise<number> {
  try {
    return db('renters').delete().where('id', renterId).returning('id')
  } catch (err: any) {
    console.log(err.message)
    return err.message
  }
}
