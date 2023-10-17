import { describe, it, expect } from 'vitest'
import { render } from './test-utils.js'
import request from 'supertest'
import server from './server.js'

describe('otters', () => {
  it('renders some otters', async () => {
    const res = await request(server).get('/otters')
    const screen = render(res)

    expect(screen.getAllByRole('listitem')).toMatchInlineSnapshot(`
      [
        <li>
          
              Joey is a sea otter.
          
        </li>,
        <li>
          
              Jin is a river otter.
          
        </li>,
        <li>
          
              Daz is a river otter.
          
        </li>,
        <li>
          
              Chip is a river otter.
          
        </li>,
      ]
    `)
  })
})
