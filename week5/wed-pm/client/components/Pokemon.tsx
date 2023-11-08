// What's your starter?
import { useEffect, useState } from 'react'

import { getPokemon } from '../apiClient/pokemon.ts'
import type { Pokemon } from '../../models/Pokemon.ts'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<Pokemon | null>()
  const [error, setError] = useState<Error | null>()

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokemonData = await getPokemon()
        setPokemon(pokemonData)
        setError(null)
      } catch (err) {
        setError(err as Error)
      }
    }

    fetchPokemon()
  }, [])

  if (error != undefined) {
    return <p>Failed to load the pokemon</p>
  }

  if (pokemon == null) {
    return <p>Loading...</p>
  }

  return (
    <>
      <h2>Pokémon </h2>
      <img
        className="pokemon--display"
        src={pokemon.sprites.front_shiny}
        alt={pokemon.name}
      />
    </>
  )
}
