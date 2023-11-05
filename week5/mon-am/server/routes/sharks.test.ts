import { describe, it, expect, vi } from 'vitest'
import server from '../server'
import * as db from '../db/db'
import request from 'supertest'

vi.mock('../db/db.ts')

describe('GET /api/v1/sharks', () => {
  it('GETs all sharks', async () => {
    // arrange
    vi.mocked(db.getSharks).mockImplementation(async () => {
      return [{ id: 1, name: 'Baby Shark', colour: 'green' }]
    })

    // act
    const res = await request(server).get('/api/v1/sharks')

    // assert
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveLength(1)
    expect(res.body[0]).toHaveProperty('colour', 'green')
    expect(res.body[0]).toHaveProperty('name', 'Baby Shark')
    expect(db.getSharks).toHaveBeenCalledOnce()
  })
  it('returns a 500 and logs an error when db fails', async () => {
    // arrange
    const errorMsg = 'Database is sad :('
    vi.mocked(db.getSharks).mockImplementation(async () => {
      throw new Error(errorMsg)
    })
    vi.spyOn(console, 'error')

    // act
    const res = await request(server).get('/api/v1/sharks')

    // assert
    expect(res.statusCode).toBe(500)
    expect(console.error).toHaveBeenCalledWith(errorMsg)
  })
})
describe('GET /api/v1/sharks/:id', () => {
  it('', async () => {
    // arrange
    vi.mocked(db.getShark).mockImplementation(async (sharkId: number) => {
      return { id: 2 }
    })

    // act
    const res = await request(server).get('/api/v1/sharks/2')

    // assert
    expect(res.body).toHaveProperty('id', 2)
  })
  it('', async () => {})
})
