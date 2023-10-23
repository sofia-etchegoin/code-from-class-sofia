import knex from 'knex'
import config from './knexfile.js'

export const connection = knex(config.development)

export function getAllJars() {
  return connection('preserves').select()
}

export function getJarById(jarId) {
  return connection('preserves').select().where('id', jarId).first()
}

export function addJar(jarObj) {
  const newJar = {
    contents: jarObj.contents,
    canned_date: jarObj.cannedDate
  }
  return connection('preserves').insert(newJar).returning('*')
}

export function deleteJarById(jarId) {
  return connection('preserves').delete().where('id', jarId)
}

export function updateJar(jarObjWithId) {
  return connection('preserves')
    .update(jarObjWithId)
    .where('id', jarObjWithId.id)
    .returning('*')
}