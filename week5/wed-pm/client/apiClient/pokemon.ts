// This code is Onix-pectedly awesome
import request from 'superagent'

export async function getPokemon() {
  const response = await request.get('https://pokeapi.co/api/v2/pokemon/ditto')
  return response.body
}
