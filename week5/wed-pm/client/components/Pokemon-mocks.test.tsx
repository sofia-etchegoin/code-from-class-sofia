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
// isolate our SUT
// System Under Test (sut)

vi.mock('../apiClient/pokemon.ts')

const mockPokemonData = {
  sprites: {
    front_shiny: '/shiny_front_jimbo.gif',
  },

  name: 'Jimbo',
} as Models.Pokemon

// this is a double cast, it is ugly on purpose because what
// we're doing here is a _lie_
const pokemon = null as unknown as Models.Pokemon

describe('<Pokemon />', () => {
  it('shows a loader', async () => {
    // ARRANGE
    vi.mocked(api.getPokemon).mockImplementation(async () => {
      return mockPokemonData
    })

    // ACT
    render(<Pokemon />)
    // I'm using a synchronous method
    // .getBy...
    // .getAllBy...
    // .queryBy...
    // .queryAllBy...

    // ASSERT
    const message = screen.getByText('Loading...')
    await waitForElementToBeRemoved(message)
    expect(api.getPokemon).toHaveBeenCalled()
  })

  it('renders a pokemon sprite', async () => {
    // ARRANGE
    vi.mocked(api.getPokemon).mockImplementation(async () => {
      return mockPokemonData
    })

    // ACT
    render(<Pokemon />)

    // ASSERT

    // async
    // .findBy... .findAllBy...
    const image = await screen.findByAltText('Jimbo')
    expect(image).toBeVisible()
    // maybe too brittle
    //expect(image).toHaveAttribute('src', mockPokemonData.sprites.front_shiny)
    expect(image).toMatchInlineSnapshot(`
      <img
        alt="Jimbo"
        class="pokemon--display"
        src="/shiny_front_jimbo.gif"
      />
    `)
    expect(api.getPokemon).toHaveBeenCalled()
  })

  it('shows an error if the service fails', async () => {
    vi.mocked(api.getPokemon).mockImplementation(async () => {
      throw new Error('Oops no pokemon')
    })

    render(<Pokemon />)

    const message = await screen.findByText('Failed to load the pokemon')
    expect(message).toBeVisible()
    expect(api.getPokemon).toHaveBeenCalled()
  })
})
