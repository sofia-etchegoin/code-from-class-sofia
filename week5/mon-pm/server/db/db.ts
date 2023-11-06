import { SharkData, SharkFull } from '../../models/shark.ts'
import db from './connection.ts'

export function getSharks(): Promise<SharkFull[]> {
  return db('sharks').select()
}

export function getShark(id: number): Promise<SharkFull | undefined> {
  return db('sharks').select().where('id', id).first()
}

export function addShark(shark: SharkData): Promise<SharkFull[]> {
  return db('sharks').insert(shark).returning('*')
}

export function updateShark(shark: SharkFull) {
  return db('sharks').update(shark).where('id', shark.id).returning('*')
}
