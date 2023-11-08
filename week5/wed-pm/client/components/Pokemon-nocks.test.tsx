// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import nock from 'nock'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import '../test/setup.ts'
import * as Models from '../../models/Pokemon.ts'
// no import of apiClient
// no `vi.mock('...')`
import Pokemon from './Pokemon.tsx'

const mockPokemonData = {
  sprites: {
    front_shiny: '/shiny_front_jimbo.gif',
  },

  name: 'Jimbo',
  // this is a double cast, it is ugly on purpose because what
  // we're doing here is a _lie_
} as unknown as Models.Pokemon

describe('<Pokemon />', () => {
  it('shows a loader', async () => {
    const scope = nock('https://pokeapi.co')
      .get('/api/v2/pokemon/ditto')
      .reply(200, mockPokemonData)

    render(<Pokemon />)
    const message = screen.getByText('Loading...')
    await waitForElementToBeRemoved(message)

    // a request has been made that matched this pattern
    expect(scope.isDone()).toBe(true)
  })

  it('renders a pokemon sprite', async () => {
    const scope = nock('https://pokeapi.co')
      .get('/api/v2/pokemon/ditto')
      .reply(200, mockPokemonData)

    render(<Pokemon />)

    const image = await screen.findByAltText('Jimbo')
    expect(image).toBeVisible()
    expect(image).toHaveAttribute('src', '/shiny_front_jimbo.gif')
    expect(scope.isDone()).toBe(true)
  })

  it('shows an error if the service fails', async () => {
    const scope = nock('https://pokeapi.co')
      .get('/api/v2/pokemon/ditto')
      .reply(500)

    render(<Pokemon />)

    const message = await screen.findByText('Failed to load the pokemon')
    expect(message).toBeVisible()
    expect(scope.isDone()).toBe(true)
  })
})
