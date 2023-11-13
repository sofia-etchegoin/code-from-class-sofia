import { useEffect, useState } from 'react'
import { getPokemon } from '../apiClient/pokemon'
import { useQuery } from '@tanstack/react-query'

import { type Pokemon } from '../../models/pokemon'

interface Props {
  name: string
}

export default function Pokemon(props: Props) {
  // const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  // useEffect(() => {
  //   async function fetchPokemon() {
  //     const pokemonResponse = await getPokemon()
  //     setPokemon(pokemonResponse)
  //   }

  //   fetchPokemon()
  // }, [])

  const {data: pokemon, error, isLoading} = useQuery(
    {queryKey: ['pokemon', props.name], queryFn: () => getPokemon(props.name)}
  )

  if (error) {
    return <p>Ack!</p>
  }
  if (!pokemon || isLoading) {
    return <p>Still loading pokemon...</p>
  }
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
