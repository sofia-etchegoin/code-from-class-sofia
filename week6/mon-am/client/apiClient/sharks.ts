import request from 'superagent'
import { type Shark } from '../../models/shark'

export async function getSharks(): Promise<Shark[]> {
  const response = await request.get('/api/v1/sharks')
  return response.body
}
