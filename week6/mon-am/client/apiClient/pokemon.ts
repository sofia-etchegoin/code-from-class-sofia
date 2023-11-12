import request from 'superagent'
import { type Pokemon } from '../../models/pokemon'

export async function getPokemon(): Promise<Pokemon> {
  const response = await request.get('https://pokeapi.co/api/v2/pokemon/ditto')

  return response.body
}
