import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout'
import Pokemon from './components/Pokemon'
import Sharks from './components/Sharks'

export const routes = createRoutesFromElements(
  <Route path="/" element={<AppLayout />}>
    <Route path="pokemon" element={<Pokemon />} />
    <Route path="sharks" element={<Sharks />} />
  </Route>
)
