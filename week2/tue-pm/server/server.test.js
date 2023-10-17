import { describe, it, test, expect } from 'vitest'
import request from 'supertest'
import server from './server'
import { render } from './test-utils'

describe('GET /', () => {
  it('shows some list items', async () => {
    // request(server) - is a fake server
    // request(server).get('/') - makes a fake GET request to our fake server
    // await ... that request, we get the response
    const response = await request(server).get('/')
    expect(response.statusCode).toBe(200)

    // gives us our fake DOM, an instance of JSDOM wrapped with all the
    // query methods from @testing-library
    const screen = render(response)

    // const links = screen.getAllByRole('link')
    const links = screen.queryAllByRole('link')

    expect(links[0]).toHaveTextContent('google')
    expect(links[1]).toHaveTextContent('x (previously twitter)')
  })
})