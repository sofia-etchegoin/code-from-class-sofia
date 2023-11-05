import request from 'superagent'
import { SharkData, SharkFull } from '../models/shark'
const sharksUrl = '/api/v1/sharks/'

export async function getSharks(): Promise<SharkFull[]> {
  const sharksResp = await request.get(sharksUrl)
  return sharksResp.body
}

export async function postShark(shark: SharkData): Promise<SharkFull> {
  const sharkResp = await request
    .post(sharksUrl)
    .send(shark) // just one shark
  return sharkResp.body
}
