import connection from './connection.ts'
import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'

import * as db from './db'

beforeAll(async () => {
  await connection.migrate.latest()
})

beforeEach(async () => {
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('getSharks', () => {
  it('returns the correct sharks array', () => {
    return db.getSharks().then((sharks) => {
      expect(sharks).toHaveLength(5)
      expect(sharks[0].name).toBe('Baby Shark')
      return null
    })
  })
})
