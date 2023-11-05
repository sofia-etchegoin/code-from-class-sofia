import connection from './connection.ts'
import {beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'

import * as db from './db'

beforeAll(() => {
  return connection.migrate.latest()
})

beforeEach(() => {
  return connection.seed.run()
})

afterAll(() => {
  return connection.destroy()
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
