import request from 'superagent'

import { Talk, TalkData } from '../models/Talk'

const talkUrl = '/api/v1/talks'

export async function getTalks(): Promise<Talk[]> {
  const dbTalks = await request.get(talkUrl)
  return dbTalks.body.talks
}

export async function addTalk(form: TalkData): Promise<Talk> {
  const addedTalk = await request.post(talkUrl).send({newTalk: form})
  return addedTalk.body.talk
}
