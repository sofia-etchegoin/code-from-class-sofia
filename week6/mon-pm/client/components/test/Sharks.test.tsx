//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import {
  screen,
  within,
  waitFor,
  waitForElementToBeRemoved,
  logRoles,
} from '@testing-library/react'
import nock from 'nock'
import { renderApp } from '../../test/setup.tsx'

describe('<Sharks>', () => {
  it('should render a loading indicator', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/sharks')
      .reply(200, [
        { id: 1, name: 'Cool Shark', colour: 'Gray' },
        { id: 2, name: 'Parent Shark', colour: 'Yellow' },
      ])

    renderApp('/sharks')

    await waitFor(() => screen.getByText(/loading/i))
    expect(scope.isDone()).toBe(true)
  })

  it('should render some sharks', async () => {
    const scope = nock('http://localhost')
      .get('/api/v1/sharks')
      .reply(200, [
        { id: 1, name: 'Cool Shark', colour: 'Gray' },
        { id: 2, name: 'Parent Shark', colour: 'Yellow' },
      ])

    const screen = renderApp('/sharks')

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i))
    logRoles(document.body)
    const heading = screen.getByRole('heading', { name: 'Sharks' })
    const list = heading.nextElementSibling
    // PROVE IT
    // if (list == undefined || !(list instanceof HTMLElement)) {
    //   expect.fail('List element was not fail')
    // }

    // ASSERT IT "trust me bro"

    const sharks = within(list as HTMLElement).getAllByRole('listitem')
    expect(sharks).toMatchInlineSnapshot(`
      [
        <li>
          <p>
            Cool Shark
             is
             
            <span
              style="background-color: Gray; padding-inline: 0.5rem;"
            >
              Gray
            </span>
          </p>
        </li>,
        <li>
          <p>
            Parent Shark
             is
             
            <span
              style="background-color: Yellow; padding-inline: 0.5rem;"
            >
              Yellow
            </span>
          </p>
        </li>,
      ]
    `)
    expect(scope.isDone()).toBe(true)
  })

  it('should render an error message when things go wrong', async () => {
    const scope = nock('http://localhost').get('/api/v1/sharks').reply(500)

    renderApp('/sharks')

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i))

    const error = screen.getByText(/Whoops/i)
    expect(error).toBeInTheDocument()
    expect(scope.isDone()).toBe(true)
  })
})
