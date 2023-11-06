import connection from './connection'
import { Talk, TalkData } from '../../models/Talk'

export async function getAllTalks(db = connection): Promise<Talk[]> {
  const talks = await db('talks').select()
  return talks
}

export async function addNewTalk(talk: TalkData, db = connection): Promise<Talk> {
  const [newTalk] = await db('talks').insert(talk).returning('*')
  return newTalk
}
