import { useEffect, useState } from 'react'
import { getPokemon } from '../apiClient/pokemon'

import { type Pokemon } from '../../models/pokemon'

export default function Pokemon() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  useEffect(() => {
    async function fetchPokemon() {
      const pokemonResponse = await getPokemon()
      setPokemon(pokemonResponse)
    }

    fetchPokemon()
  }, [])

  return (
    <section>
      <h2>Pokémon </h2>
      {pokemon && (
        <div>
          <h3>{pokemon.name}</h3>
          <h3>Abilities</h3>
          <ul>
            {pokemon.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>
          <img
            src={pokemon.sprites.front_default}
            alt={`Sprite for ${pokemon.name}`}
          />
        </div>
      )}
    </section>
  )
}
