// What's your starter?
import { useEffect, useState } from 'react'

import { getPokemon } from '../apiClient/pokemon.ts'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    async function fetchPokemon() {
      const pokemonData = await getPokemon()
      setPokemon(pokemonData)
    }

    try {
      fetchPokemon()
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <h2>Pokémon </h2>
      {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}
    </>
  )
}
