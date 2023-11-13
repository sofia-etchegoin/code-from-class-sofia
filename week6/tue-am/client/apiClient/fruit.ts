import request from 'superagent'
import { Fruit, FruitData } from '../../models/fruit'

export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// GET /api/v1/fruit
export async function getFruit(): Promise<Fruit[]> {
  await sleep(1000)
  const response = await request.get('/api/v1/fruit')
  return response.body.fruit
}

// GET /api/v1/fruit/:fruitId
export async function getFruitById(fruitId: string): Promise<Fruit> {
  await sleep(1000)
  const response = await request.get(`/api/v1/fruit/${fruitId}`)
  return response.body.fruit
}

// POST /api/v1/fruit
export async function addFruit(newFruit: FruitData): Promise<Fruit> {
  await sleep(1000)
  const response = await request.post('/api/v1/fruit').send({ newFruit })
  return response.body.fruit
}
