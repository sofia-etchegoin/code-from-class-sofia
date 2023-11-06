import { describe, it, expect, vi } from 'vitest'
import server from '../server.ts'
import * as db from '../db/db.ts'
import request from 'supertest'

vi.mock('../db/db.ts')

describe('GET /api/v1/sharks', () => {
  it.todo('GETs all sharks')
  it.todo('returns a 500 and logs an error when db fails')
})

describe('GET /api/v1/sharks/:id', () => {
  it.todo('gets a specific shark')
})
