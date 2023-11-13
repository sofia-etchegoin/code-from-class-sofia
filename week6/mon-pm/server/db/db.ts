import db from './connection'

import { Shark, SharkData } from '../../models/shark'

export async function getAllSharks(): Promise<Shark[]> {
  return db('sharks').select('*')
}
