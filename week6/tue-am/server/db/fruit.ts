import db from './connection'

import { Fruit, FruitData } from '../../models/fruit'

export async function getAllFruit(): Promise<Fruit[]> {
  const fruit = await db('fruit').select('*')
  return fruit
}

export async function getFruitById(fruitId: number): Promise<Fruit> {
  const fruit = await db('fruit').where('id', fruitId).select('*').first()
  return fruit
}

export async function addFruit(newFruit: FruitData): Promise<Fruit> {
  const [fruit] = await db('fruit').insert(newFruit).returning('*')
  return fruit
}
