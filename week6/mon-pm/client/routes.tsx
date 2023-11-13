import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout'
import Pokemon from './components/Pokemon'
import Sharks from './components/Sharks'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route path="pokemon" element={
      <>
        <Pokemon name="pikachu"/>
        <Pokemon name="bulbasaur" />
        <Pokemon name="snorlax" />
        <Pokemon name="diglett" />
        <Pokemon name="rayquaza" />
      </>
    } />
    <Route path="sharks" element={<Sharks />} />
  </Route>
)
