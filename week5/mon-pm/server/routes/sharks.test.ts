import { describe, it, expect, vi } from 'vitest'
import server from '../server.ts'

import * as db from '../db/db.ts'
import request from 'supertest'

vi.mock('../db/db.ts')

describe('GET /api/v1/sharks', () => {
  it('GETs all sharks', async () => {
    // ARRANGE
    vi.mocked(db.getSharks).mockImplementation(async () => {
      return [
        {
          id: 1,
          name: 'Example Shark',
          colour: 'Pink',
        },
      ]
    })

    const res = await request(server).get('/api/v1/sharks')
    expect(res.statusCode).toBe(200)
    expect(res.body).toMatchInlineSnapshot(`
      [
        {
          "colour": "Pink",
          "id": 1,
          "name": "Example Shark",
        },
      ]
    `)
  })

  it('returns a 500 and logs an error when db fails', async () => {
    // ARRANGE
    const errorMessage = 'Oh no! Database sad'
    vi.spyOn(console, 'error').mockImplementation(() => {})
    vi.mocked(db.getSharks).mockImplementation(async () => {
      throw new Error(errorMessage)
    })
    const res = await request(server).get('/api/v1/sharks')
    expect(res.statusCode).toBe(500)
    expect(console.error).toBeCalledWith(errorMessage)
  })
})

describe('GET /api/v1/sharks/:id', () => {
  it('gets a specific shark', async () => {
    // ARRANGE
    vi.mocked(db.getShark).mockImplementation(async () => {
      return { id: 1, name: 'Dave', colour: 'Dave coloured' }
    })
    // ACT
    const res = await request(server).get('/api/v1/sharks/1')

    // ASSERT
    expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('name', 'Dave')
  })

  it('fails to get a specific shark if that shark does not exist', async () => {
    // ARRANGE
    vi.mocked(db.getShark).mockImplementation(async () => {
      return undefined
    })

    // ACT
    const res = await request(server).get('/api/v1/sharks/1')

    // ASSERT
    expect(res.statusCode).toBe(404)
  })

  it('fails to get a shark if the database is sad', async () => {
    vi.mocked(db.getShark).mockImplementation(async () => {
      throw Error('Disk full')
    })

    // ACT
    const res = await request(server).get('/api/v1/sharks/1')
    expect(res.statusCode).toBe(500)
  })
})
