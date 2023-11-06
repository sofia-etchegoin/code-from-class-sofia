import {
  describe,
  it,
  expect,
  vi,
  beforeAll,
  beforeEach,
  afterAll,
} from 'vitest'
import server from '../server.ts'
import connection from '../db/connection.ts'
import request from 'supertest'

beforeAll(async () => {
  // npm run knex migrate:latest
  await connection.migrate.latest()
})

beforeEach(async () => {
  // npm run knex seed:run
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('GET /api/v1/sharks', () => {
  it('GETs all sharks', async () => {
    // ARRANGE
    // ACT
    const res = await request(server).get('/api/v1/sharks')
    // ASSERT
    expect(res.statusCode).toBe(200)
    expect(res.body.length).toBeGreaterThanOrEqual(1)
    expect(res.body).toHaveLength(5)
    expect(res.body[0]).toMatchInlineSnapshot(`
      {
        "colour": "yellow",
        "id": 1,
        "name": "Baby Shark",
      }
    `)
  })
})

describe('GET /api/v1/sharks/:id', () => {
  it('gets a specific shark', async () => {
    // ARRANGE
    // ACT
    const res = await request(server).get('/api/v1/sharks/3')
    expect(res.statusCode).toBe(200)

    expect(res.body).toHaveProperty('colour', 'blue')
    expect(res.body).toHaveProperty('name', 'Daddy Shark')

    expect(res.body).toMatchInlineSnapshot(`
      {
        "colour": "blue",
        "id": 3,
        "name": "Daddy Shark",
      }
    `)
  })

  it('gets a specific shark that does not exist', async () => {
    const res = await request(server).get('/api/v1/sharks/7')
    expect(res.statusCode).toBe(404)
  })
})
