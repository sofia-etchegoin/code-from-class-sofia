// This code is Onix-pectedly awesome
import request from 'superagent'
import { Pokemon } from '../../models/Pokemon'

export async function getPokemon(): Promise<Pokemon> {
  const response = await request.get('https://pokeapi.co/api/v2/pokemon/ditto')
  return response.body
}
