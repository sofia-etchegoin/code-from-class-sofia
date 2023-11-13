import { Route, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './components/AppLayout'
import FruitList from './components/FruitList'
import FruitDetails from './components/FruitDetails'

export const routes = createRoutesFromElements(
  <Route path='/' element={<AppLayout />}>
    {/* http://localhost:5137 */}
    <Route index element={<FruitList />} />
    
    {/* http://localhost:5137/:fruitId */}
    <Route path=':fruitId' element={<FruitDetails />} />
  </Route>
)
