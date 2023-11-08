// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import '../test/setup.ts'
import * as api from '../apiClient/pokemon.ts'
import * as Models from '../../models/Pokemon.ts'

import Pokemon from './Pokemon.tsx'

vi.mock('../apiClient/pokemon.ts')

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
    vi.mocked(api.getPokemon).mockImplementation(async () => {
      return mockPokemonData
    })

    render(<Pokemon />)
    const message = screen.getByText('Loading...')
    await waitForElementToBeRemoved(message)
    expect(api.getPokemon).toHaveBeenCalled()
  })

  it('renders a pokemon sprite', async () => {
    vi.mocked(api.getPokemon).mockImplementation(async () => {
      return mockPokemonData
    })

    render(<Pokemon />)

    const image = await screen.findByAltText('Jimbo')
    expect(image).toBeVisible()
    expect(image).toHaveAttribute('src', '/shiny_front_jimbo.gif')
    expect(api.getPokemon).toHaveBeenCalled()
  })

  it('shows an error if the service fails', async () => {
    vi.mocked(api.getPokemon).mockImplementation(async () => {
      throw new Error()
    })

    render(<Pokemon />)

    const message = await screen.findByText('Failed to load the pokemon')
    expect(message).toBeVisible()
  })
})
