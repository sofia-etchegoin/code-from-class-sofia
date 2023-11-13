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

    renderApp('/sharks')

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i))
    logRoles(document.body)
    const section = screen.getByRole('heading', { name: 'Sharks' })
    expect(section.parentElement).not.toBeNull()
    const listItems = within(section.parentElement as HTMLElement)
      .getAllByRole('listitem')
      .map((li) => li.textContent)

    expect(listItems).toMatchInlineSnapshot(`
      [
        "Cool Shark is Gray",
        "Parent Shark is Yellow",
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
