import { describe, it, expect } from 'vitest'
import request from 'supertest'
import server from './server.js'

describe('GET / route', () => {
  it('returns a page with the correct title', async () => {
    // ARRANGE
    // ACT
    const res = await request(server).get('/')
    // ASSERT
    expect(res.statusCode).toBe(200)
    expect(res.text).toMatch(/Welcome/)
  })
})

describe('GET a bad url', () => {
  it('responds with a 404', async () => {
    // ARRANGE
    // ACT
    const res = await request(server).get('/hajbdljhsavfjvasfj')
    // ASSERT
    expect(res.statusCode).toBe(404)
  })
})

describe('GET /fruit/:name', () => {
  it('mentions the correct fruit', async () => {
    // ARRANGE
    // ACT
    const res = await request(server).get('/fruit/pineapple')
    // ASSERT
    expect(res.statusCode).toBe(200)
    expect(res.text).toMatch(/pineapple/)
  })
})

describe('POST /fruit', () => {
  it('responds with my name', async () => {
    /*
      <input name="name" value="James" />
    */
    const res = await request(server)
      .post('/fruit')
      .send('name=James&fruit=pineapple')

    expect(res.text).toMatchInlineSnapshot('"Cool job James"')
  })
})
