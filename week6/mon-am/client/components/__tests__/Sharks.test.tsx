//@vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import {
  screen,
  within,
  waitFor,
  waitForElementToBeRemoved,
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
    // expect(screen.getByRole('list', { name: /sharks/i })).toBeInTheDocument()
    const list = screen.getByRole('list', { name: /sharks/i })
    const listItems = within(list)
      .getAllByRole('listitem')
      .map((li) => li.textContent)

    // const listItems = screen.getAllByRole('listitem')

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
    // const scope = nock('http://localhost').get('/api/v1/sharks').replyWithError('whatever happened')

    renderApp('/sharks')

    await waitForElementToBeRemoved(() => screen.queryByText(/loading/i))

    const error = screen.getByText(/wrong/i)
    expect(error).toBeInTheDocument()
    expect(scope.isDone()).toBe(true)
  })
})