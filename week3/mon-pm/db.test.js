import * as db from './db.js'
import {describe, it, expect, beforeAll, beforeEach, afterAll} from 'vitest'
import connection from './connection.js'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

describe('deleteJarById', () => {
  it('deletes a jar with id 2', async () => {
    await db.deleteJarById(2)
    const allJars = await db.getAllJars()
    expect(allJars).toHaveLength(2)
  })
})

describe('getAllJars', () => {
  it('gets the complete seed list of jars', async () => {
    const allJars = await db.getAllJars()
    expect(allJars).toHaveLength(3)
  })
})

afterAll(() => {
  return connection.destroy()
})